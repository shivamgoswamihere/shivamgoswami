import { useEffect, useRef } from 'react';
import { animate, splitText, stagger, utils } from 'animejs';

/**
 * Section heading that reveals once, the first time it scrolls into view:
 * letters rise out of a clip mask, then a thin accent line draws underneath.
 * It never replays, so scrolling back and forth stays calm.
 */
const RevealHeading = ({ as = 'h2', text, className = '' }) => {
  const Tag = as;
  const label = useRef(null);
  const line = useRef(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const split = splitText(label.current, { chars: { wrap: 'clip' } });
    utils.set(split.chars, { translateY: '100%' });
    utils.set(line.current, { scaleX: 0 });

    const io = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      io.disconnect();
      animate(split.chars, {
        translateY: '0%',
        duration: 700,
        ease: 'outExpo',
        delay: stagger(28),
      });
      animate(line.current, {
        scaleX: 1,
        duration: 900,
        ease: 'inOutQuart',
        delay: 250,
      });
    }, { rootMargin: '0px 0px -15% 0px' });
    io.observe(label.current);

    return () => {
      io.disconnect();
      split.revert();
      utils.remove(line.current);
      utils.set(line.current, { scaleX: 1 });
    };
  }, [text]);

  return (
    <Tag className={className}>
      <span className="relative inline-block pb-2">
        <span ref={label}>{text}</span>
        <span
          ref={line}
          aria-hidden="true"
          className="absolute bottom-0 left-0 h-px w-full origin-left bg-gradient-to-r from-purple-500 to-pink-600"
        />
      </span>
    </Tag>
  );
};

export default RevealHeading;
