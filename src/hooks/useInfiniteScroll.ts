import { useRef, useEffect, useCallback } from 'react';

/**
 * useInfiniteScroll — smooth looping carousel with user drag control
 *
 * @param autoScrollSpeed - pixels per frame (default 0.2 — ultra slow & readable)
 * @param pauseOnHover    - halt auto-scroll when mouse is inside (default true)
 */
export const useInfiniteScroll = (autoScrollSpeed = 0.2, pauseOnHover = true) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const isHovered = useRef(false);
  const startX = useRef(0);
  const scrollStart = useRef(0);
  const requestRef = useRef<number | null>(null);
  const exactScrollLeft = useRef(0);

  const getThirdWidth = useCallback(() => {
    const c = containerRef.current;
    if (!c) return 0;
    return c.scrollWidth / 3;
  }, []);

  const handleLoop = useCallback(() => {
    const c = containerRef.current;
    if (!c) return;
    const third = getThirdWidth();
    // Seamlessly jump when crossing 2/3 or 0 boundary
    if (exactScrollLeft.current >= third * 2) {
      exactScrollLeft.current -= third;
      c.scrollLeft = exactScrollLeft.current;
    } else if (exactScrollLeft.current <= 0) {
      exactScrollLeft.current += third;
      c.scrollLeft = exactScrollLeft.current;
    }
  }, [getThirdWidth]);

  const tick = useCallback(() => {
    const c = containerRef.current;
    if (c && !isDragging.current && !(pauseOnHover && isHovered.current)) {
      // If user scrolled manually, sync exactScrollLeft
      if (Math.abs(c.scrollLeft - exactScrollLeft.current) > 2) {
        exactScrollLeft.current = c.scrollLeft;
      }
      exactScrollLeft.current += autoScrollSpeed;
      c.scrollLeft = exactScrollLeft.current;
      handleLoop();
    }
    requestRef.current = requestAnimationFrame(tick);
  }, [autoScrollSpeed, pauseOnHover, handleLoop]);

  useEffect(() => {
    const c = containerRef.current;
    if (c) {
      // Start at the middle copy so both directions have room
      exactScrollLeft.current = c.scrollWidth / 3;
      c.scrollLeft = exactScrollLeft.current;
    }
    requestRef.current = requestAnimationFrame(tick);
    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [tick]);

  // ── Mouse drag ──────────────────────────────────────────────
  const onMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    startX.current = e.pageX - (containerRef.current?.offsetLeft ?? 0);
    scrollStart.current = containerRef.current?.scrollLeft ?? 0;
    if (containerRef.current) containerRef.current.style.cursor = 'grabbing';
  };

  const onMouseUp = () => {
    isDragging.current = false;
    if (containerRef.current) containerRef.current.style.cursor = 'grab';
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !containerRef.current) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    exactScrollLeft.current = scrollStart.current - walk;
    containerRef.current.scrollLeft = exactScrollLeft.current;
    handleLoop();
  };

  const onMouseEnter = () => { isHovered.current = true; };
  const onMouseLeave = () => {
    isHovered.current = false;
    isDragging.current = false;
    if (containerRef.current) containerRef.current.style.cursor = 'grab';
  };

  // ── Touch drag ──────────────────────────────────────────────
  const onTouchStart = (e: React.TouchEvent) => {
    isDragging.current = true;
    startX.current = e.touches[0].pageX - (containerRef.current?.offsetLeft ?? 0);
    scrollStart.current = containerRef.current?.scrollLeft ?? 0;
  };

  const onTouchMove = (e: React.TouchEvent) => {
    if (!isDragging.current || !containerRef.current) return;
    const x = e.touches[0].pageX - containerRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    exactScrollLeft.current = scrollStart.current - walk;
    containerRef.current.scrollLeft = exactScrollLeft.current;
    handleLoop();
  };

  const onTouchEnd = () => { isDragging.current = false; };

  return {
    containerRef,
    onMouseDown,
    onMouseUp,
    onMouseMove,
    onMouseEnter,
    onMouseLeave,
    onTouchStart,
    onTouchMove,
    onTouchEnd,
  };
};
