import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText as GSAPSplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, GSAPSplitText);

/* Reveals `text` character by character once it scrolls into view. */
const SplitText = ({ text, className = "" }) => {
  const ref = useRef(null);

  useEffect(() => {
    // Reduced motion: leave the text in its final state, skip the reveal.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const splitter = new GSAPSplitText(ref.current, { type: "chars" });
    const tween = gsap.fromTo(
      splitter.chars,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power3.out",
        stagger: 0.1,
        force3D: true,
        scrollTrigger: { trigger: ref.current, start: "top 90%-=100px", once: true },
      }
    );

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
      splitter.revert();
    };
  }, [text]);

  return (
    <p
      ref={ref}
      className={`overflow-hidden inline-block whitespace-normal break-words text-center ${className}`}
    >
      {text}
    </p>
  );
};

export default SplitText;
