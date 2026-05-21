import { useEffect, useState } from "react";
import logo from "@/assets/logo.png";

export function Loader() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setDone(true), 2300);
    return () => clearTimeout(t);
  }, []);

  if (done) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black overflow-hidden"
      style={{ animation: "loader-fade 2.3s ease-in forwards" }}
      aria-hidden="true"
    >
      {/* Dirty surface overlay (concrete texture) */}
      <div
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 30%, #1a1a1a 0%, transparent 40%), radial-gradient(circle at 80% 70%, #0a0a0a 0%, transparent 50%), repeating-linear-gradient(45deg, rgba(255,255,255,0.02) 0 2px, transparent 2px 6px)",
        }}
      />

      {/* Spray wipe */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(5,136,198,0.3) 40%, rgba(255,255,255,0.85) 50%, rgba(5,136,198,0.3) 60%, transparent 100%)",
          animation: "spray-wipe 2s cubic-bezier(0.6, 0, 0.4, 1) forwards",
          mixBlendMode: "screen",
        }}
      />

      {/* Droplets */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 18 }).map((_, i) => {
          const dx = (Math.random() - 0.5) * 400;
          const dy = Math.random() * 300 + 100;
          const left = `${Math.random() * 100}%`;
          const top = `${30 + Math.random() * 40}%`;
          const delay = `${0.4 + Math.random() * 1.2}s`;
          return (
            <span
              key={i}
              className="absolute h-2 w-2 rounded-full bg-[#7ed3ff]"
              style={{
                left,
                top,
                opacity: 0,
                animation: `droplet 1.2s ease-out forwards`,
                animationDelay: delay,
                ["--dx" as string]: `${dx}px`,
                ["--dy" as string]: `${dy}px`,
                boxShadow: "0 0 8px rgba(126,211,255,0.9)",
              }}
            />
          );
        })}
      </div>

      {/* Logo reveal */}
      <div
        className="relative z-10 px-6"
        style={{ animation: "logo-rise 2s ease-out both" }}
      >
        <img
          src={logo}
          alt="A&J Power Washing Services"
          className="w-[min(560px,80vw)] drop-shadow-[0_0_40px_rgba(5,136,198,0.5)]"
        />
        <div className="mt-4 text-center text-xs tracking-[0.4em] text-[#7ed3ff]/80">
          POWER · CLEAN · REVEAL
        </div>
      </div>
    </div>
  );
}
