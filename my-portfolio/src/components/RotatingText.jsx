import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const segmenter = new Intl.Segmenter("en", { granularity: "grapheme" });
const splitChars = (word) => Array.from(segmenter.segment(word), (s) => s.segment);

/* Cycles through `texts`, animating each character in, staggered from the last. */
const RotatingText = ({
  texts,
  transition,
  initial,
  animate,
  exit,
  rotationInterval = 2000,
  staggerDuration = 0,
  mainClassName = "",
  splitLevelClassName = "",
}) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    // Reduced motion: don't cycle text on a timer.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % texts.length), rotationInterval);
    return () => clearInterval(id);
  }, [texts.length, rotationInterval]);

  const words = texts[index].split(" ").map(splitChars);
  const total = words.reduce((sum, chars) => sum + chars.length, 0);
  let charCount = 0;

  return (
    <motion.span
      className={`flex flex-wrap whitespace-pre-wrap relative ${mainClassName}`}
      layout
      transition={transition}
    >
      <span className="sr-only">{texts[index]}</span>
      <AnimatePresence mode="wait" initial={false}>
        <motion.div key={index} className="flex flex-wrap whitespace-pre-wrap relative" layout aria-hidden="true">
          {words.map((chars, wordIndex) => (
            <span key={wordIndex} className={`inline-flex ${splitLevelClassName}`}>
              {chars.map((char, charIndex) => {
                const delay = (total - 1 - charCount++) * staggerDuration;
                return (
                  <motion.span
                    key={charIndex}
                    initial={initial}
                    animate={animate}
                    exit={exit}
                    transition={{ ...transition, delay }}
                    className="inline-block"
                  >
                    {char}
                  </motion.span>
                );
              })}
              {wordIndex < words.length - 1 && <span className="whitespace-pre"> </span>}
            </span>
          ))}
        </motion.div>
      </AnimatePresence>
    </motion.span>
  );
};

export default RotatingText;
