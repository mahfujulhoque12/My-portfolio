import { ReactLenis } from "lenis/react";
import { useEffect, useRef } from "react";

function LenisWrapper({ children }) {
  const lenisRef = useRef(null);

  useEffect(() => {
    let rafId;

    const raf = (time) => {
      lenisRef.current?.lenis?.raf(time);
      rafId = requestAnimationFrame(raf);
    };

    rafId = requestAnimationFrame(raf);

    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <ReactLenis
      ref={lenisRef}
      root
      options={{
        autoRaf: false,
        duration: 3,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // snappy
        smoothWheel: true,
        smoothTouch: false,
      }}
    >
      {children}
    </ReactLenis>
  );
}

export default LenisWrapper;
