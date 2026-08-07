import React, { useRef, useEffect } from 'react'
import { About } from '../sections/About';

const PARTICLE_COUNT = 200;
const SPIRAL_ARMS = 5;
const ROTATION_SPEED = 0.006;

const SpiralGalaxy = () => {
  const containerRef = useRef(null);
  const observerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.innerHTML = "";
    const canvas = document.createElement("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.style.zIndex = "0";
    canvas.style.position = "absolute";
    canvas.style.left = "0";
    canvas.style.top = "0";
    container.appendChild(canvas);

    const ctx = canvas.getContext("2d");
    let centerX = canvas.width / 2;
    let centerY = canvas.height / 2;
    let lastTime = 0;
    let time = 0;
    let animationId = null;

    const maxRadius = Math.min(canvas.width, canvas.height);

    const particles = [];
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const distanceFactor = Math.pow(Math.random(), 0.5);
      const distance = distanceFactor * maxRadius;
      const armIndex = Math.floor(Math.random() * SPIRAL_ARMS);
      const armOffset = (armIndex / SPIRAL_ARMS) * Math.PI * 2;
      const spiralTightness = 0.2;
      const spiralAngle = Math.log(distance / 5) / spiralTightness;

      particles.push({
        distance,
        angle: spiralAngle + armOffset,
        armIndex,
        size: 1 + Math.random() * 1.5,
        opacity: 0.3 + Math.random() * 0.7,
        speedFactor: 0.6 + Math.random() * 0.4,
        color: {
          r: 220 + Math.floor(Math.random() * 35),
          g: 220 + Math.floor(Math.random() * 35),
          b: 255
        }
      });
    }

    // Users who ask the OS to reduce motion get a single static frame
    // instead of a permanent requestAnimationFrame loop.
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    function draw(deltaTime) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.beginPath();
      ctx.arc(centerX, centerY, 3, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(255, 255, 255, 0.3)";
      ctx.fill();

      for (const particle of particles) {
        const rotationFactor = 1 / Math.sqrt(particle.distance / 10);
        particle.angle +=
          ROTATION_SPEED *
          rotationFactor *
          particle.speedFactor *
          deltaTime *
          0.05;

        const x = centerX + Math.cos(particle.angle) * particle.distance;
        const y = centerY + Math.sin(particle.angle) * particle.distance;

        const armPhase = (time * 0.5 + particle.armIndex / SPIRAL_ARMS) % 1;
        const pulseFactor = Math.sin(armPhase * Math.PI * 2) * 0.3 + 0.7;

        ctx.beginPath();
        ctx.arc(x, y, particle.size * pulseFactor, 0, Math.PI * 2);

        const finalOpacity = particle.opacity * pulseFactor;
        ctx.fillStyle = `rgba(${particle.color.r}, ${particle.color.g}, ${particle.color.b}, ${finalOpacity})`;
        ctx.fill();

        if (particle.size > 1.8) {
          const trailLength = particle.distance * 0.15;
          const trailAngle = particle.angle - 0.1 * rotationFactor;
          const trailX =
            centerX + Math.cos(trailAngle) * (particle.distance - trailLength);
          const trailY =
            centerY + Math.sin(trailAngle) * (particle.distance - trailLength);

          ctx.beginPath();
          ctx.moveTo(x, y);
          ctx.lineTo(trailX, trailY);
          ctx.strokeStyle = `rgba(${particle.color.r}, ${particle.color.g}, ${
            particle.color.b
          }, ${finalOpacity * 0.3})`;
          ctx.lineWidth = particle.size * 0.5;
          ctx.stroke();
        }
      }

    }

    function animate(timestamp) {
      if (!lastTime) lastTime = timestamp;
      const deltaTime = timestamp - lastTime;
      lastTime = timestamp;
      time += deltaTime * 0.001;
      draw(deltaTime);
      animationId = requestAnimationFrame(animate);
    }

    const start = () => {
      if (animationId) return;
      lastTime = 0;
      animationId = requestAnimationFrame(animate);
    };

    const stop = () => {
      if (!animationId) return;
      cancelAnimationFrame(animationId);
      animationId = null;
    };

    if (reduceMotion) {
      draw(0); // one static frame, no loop
    } else {
      // Don't burn CPU/battery animating a full-screen canvas that is
      // scrolled out of view.
      const observer = new IntersectionObserver(
        ([entry]) => (entry.isIntersecting ? start() : stop()),
        { threshold: 0 }
      );
      observer.observe(container);
      observerRef.current = observer;
    }

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      centerX = canvas.width / 2;
      centerY = canvas.height / 2;
      if (reduceMotion) draw(0);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      stop();
      observerRef.current?.disconnect();
      window.removeEventListener("resize", handleResize);
      if (container.contains(canvas)) {
        container.removeChild(canvas);
      }
    };
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div ref={containerRef} className="absolute inset-0 z-0"></div>

      <div className="relative z-10 flex flex-col items-center justify-center h-[100vh]">
        <About />
      </div>
    </div>
  )
}

export default SpiralGalaxy