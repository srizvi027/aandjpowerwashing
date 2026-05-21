import { useRef, useState, useCallback, useEffect } from "react";

interface Props {
  before: string;
  after: string;
  label?: string;
}

export function BeforeAfterSlider({ before, after, label }: Props) {
  const [pos, setPos] = useState(50);
  const ref = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const move = useCallback((clientX: number) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(0, Math.min(100, x)));
  }, []);

  useEffect(() => {
    const up = () => (dragging.current = false);
    const mv = (e: MouseEvent) => dragging.current && move(e.clientX);
    const tm = (e: TouchEvent) =>
      dragging.current && e.touches[0] && move(e.touches[0].clientX);
    window.addEventListener("mouseup", up);
    window.addEventListener("touchend", up);
    window.addEventListener("mousemove", mv);
    window.addEventListener("touchmove", tm);
    return () => {
      window.removeEventListener("mouseup", up);
      window.removeEventListener("touchend", up);
      window.removeEventListener("mousemove", mv);
      window.removeEventListener("touchmove", tm);
    };
  }, [move]);

  return (
    <div
      ref={ref}
      className="relative w-full aspect-[4/3] overflow-hidden rounded-2xl border border-[#0588C6]/30 select-none group cursor-ew-resize"
      onMouseDown={(e) => {
        dragging.current = true;
        move(e.clientX);
      }}
      onTouchStart={(e) => {
        dragging.current = true;
        if (e.touches[0]) move(e.touches[0].clientX);
      }}
    >
      <img
        src={after}
        alt="After power washing"
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ width: `${pos}%` }}
      >
        <img
          src={before}
          alt="Before power washing"
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
          style={{ width: `${(100 / pos) * 100}%`, maxWidth: "none" }}
        />
      </div>

      {/* Labels */}
      <span className="absolute top-3 left-3 px-2.5 py-1 text-[10px] font-bold tracking-widest bg-black/70 text-white rounded">
        BEFORE
      </span>
      <span className="absolute top-3 right-3 px-2.5 py-1 text-[10px] font-bold tracking-widest bg-[#0588C6] text-white rounded">
        AFTER
      </span>
      {label && (
        <span className="absolute bottom-3 left-3 px-3 py-1.5 text-xs font-semibold bg-black/70 text-white rounded-md backdrop-blur">
          {label}
        </span>
      )}

      {/* Divider */}
      <div
        className="absolute top-0 bottom-0 w-[2px] bg-[#0588C6] shadow-[0_0_18px_rgba(5,136,198,0.9)]"
        style={{ left: `${pos}%` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-11 w-11 rounded-full bg-[#0588C6] grid place-items-center text-white shadow-[0_0_24px_rgba(5,136,198,0.9)] ring-4 ring-black/50">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/><polyline points="9 18 3 12 9 6" style={{ opacity: 0 }}/></svg>
        </div>
      </div>
    </div>
  );
}
