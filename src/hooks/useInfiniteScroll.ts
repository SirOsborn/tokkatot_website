import { useRef, useEffect, useState, useCallback } from 'react';

export const useInfiniteScroll = (autoScrollSpeed = 0.5) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPressed, setIsPressed] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftState, setScrollLeftState] = useState(0);
  const requestRef = useRef<number | null>(null);

  const handleLoop = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;

    const scrollWidth = container.scrollWidth;
    const thirdWidth = scrollWidth / 3;

    if (container.scrollLeft >= thirdWidth * 2) {
      container.scrollLeft -= thirdWidth;
    } else if (container.scrollLeft <= 0) {
      container.scrollLeft += thirdWidth;
    }
  }, []);

  const animate = useCallback(() => {
    if (!isPressed && containerRef.current) {
      containerRef.current.scrollLeft += autoScrollSpeed;
      handleLoop();
    }
    requestRef.current = requestAnimationFrame(animate);
  }, [isPressed, autoScrollSpeed, handleLoop]);

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      // Start in the middle of the triple-duplicated list
      container.scrollLeft = container.scrollWidth / 3;
    }
    requestRef.current = requestAnimationFrame(animate);
    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [animate]);

  const onMouseDown = (e: React.MouseEvent) => {
    setIsPressed(true);
    setStartX(e.pageX - (containerRef.current?.offsetLeft || 0));
    setScrollLeftState(containerRef.current?.scrollLeft || 0);
  };

  const onMouseUp = () => {
    setIsPressed(false);
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isPressed || !containerRef.current) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Scroll speed multiplier
    containerRef.current.scrollLeft = scrollLeftState - walk;
    handleLoop();
  };

  const onTouchStart = (e: React.TouchEvent) => {
    setIsPressed(true);
    setStartX(e.touches[0].pageX - (containerRef.current?.offsetLeft || 0));
    setScrollLeftState(containerRef.current?.scrollLeft || 0);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    if (!isPressed || !containerRef.current) return;
    const x = e.touches[0].pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    containerRef.current.scrollLeft = scrollLeftState - walk;
    handleLoop();
  };

  return {
    containerRef,
    onMouseDown,
    onMouseUp,
    onMouseMove,
    onMouseLeave: onMouseUp,
    onTouchStart,
    onTouchMove,
    onTouchEnd: onMouseUp
  };
};
