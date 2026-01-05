import { useEffect, useState, useRef } from "react";

export default function AnimatedNumber({ value, duration = 2000 }) {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  const [hasStarted, setHasStarted] = useState(false);

  // Extract number from string (e.g., "$498B" -> 498)
  const numericValue = parseInt(value.replace(/\D/g, ""));
  const prefix = value.startsWith("$") ? "$" : "";
  const suffix = value.replace(/[0-9$]/g, "");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setHasStarted(true);
      },
      { threshold: 0.5 }
    );

    if (countRef.current) observer.observe(countRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasStarted) return;

    let start = 0;
    const end = numericValue;
    const totalFrames = Math.floor(duration / 16);
    const increment = end / totalFrames;

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [hasStarted, numericValue, duration]);

  return (
    <span ref={countRef}>
      {prefix}{count}{suffix}
    </span>
  );
}