import { lazy, Suspense, useState } from "react";
import { useLenis } from "lenis/react";
import SplitText from "./SplitText";
import RainbowFillButton from "./RainbowFillButton";
import { RESUME_URL } from "../sections/Contact";

// Spline (+ its physics engine) is ~2 MB: load it after the hero text paints.
const Spline = lazy(() => import("@splinetool/react-spline"));

export default function SplineWithLoader() {
  const [isLoaded, setIsLoaded] = useState(false);
  const lenis = useLenis();

  const handleContactClick = (e) => {
    e.preventDefault();
    if (lenis) {
      lenis.scrollTo("#Contact", { offset: -70, duration: 1.2 });
    } else {
      document.querySelector("#Contact")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative flex w-full flex-col overflow-hidden">
      {/* Intro text sits above the scene (z-10). The scene keeps a fixed height so the
          whole bot and its floor always fit; Spline scales it by width, which leaves
          empty space above and below the bot; it's pulled up behind the text so the
          full floor circle shows instead of being cut off. */}
      <div className="relative z-10 flex flex-col items-center gap-3 px-4 pt-12 sm:pt-16 text-white text-center">
        <div className="drop-shadow-md" aria-hidden="true">
          <SplitText text="Hello, World!" className="text-lg font-semibold text-[#b6b7bb]" />
        </div>
        <h1 className="text-4xl font-bold sm:text-5xl drop-shadow-md">Shivam Goswami</h1>
        <p className="bg-gradient-to-r from-purple-500 to-pink-600 bg-clip-text text-xl font-semibold text-transparent">
          Software Engineer
        </p>
        <p className="max-w-xl text-gray-300">
          2+ years building production React &amp; TypeScript apps.
        </p>
        <div className="mt-2 flex flex-wrap items-center justify-center gap-4">
          <RainbowFillButton text="Download Resume" href={RESUME_URL} />
          <a
            href="#Contact"
            onClick={handleContactClick}
            className="inline-flex min-h-11 cursor-pointer items-center rounded-lg border border-white/30 px-5 transition-colors hover:bg-white/10"
          >
            Contact me
          </a>
        </div>
      </div>

      <div className="relative -mt-52 h-[52rem]">
        {!isLoaded && <LoadingSpinner />}
        <Suspense fallback={null}>
          <Spline
            scene="https://prod.spline.design/rRYxxPq4P8BG2Flk/scene.splinecode"
            onLoad={() => setIsLoaded(true)}
            className="absolute inset-0"
          />
        </Suspense>
      </div>

      {/* Sits exactly over Spline's "Built with Spline" watermark (bottom-right of the canvas). */}
      <div className="absolute bottom-3 right-3 z-10 flex h-11 w-40 flex-col justify-center rounded-lg bg-gradient-to-r from-purple-500 to-pink-600 px-3 text-xs font-bold text-black">
        <p>BUILT BY A DEV</p>
        <p>BUILT FOR YOU</p>
      </div>
    </section>
  );
}

function LoadingSpinner() {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-md z-10">
      <div className="w-10 h-10 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin" />
    </div>
  );
}
