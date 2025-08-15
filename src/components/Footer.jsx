import { useEffect, useState } from "react";

export default function Footer() {
  const [orbs, setOrbs] = useState([]);
  const [fading, setFading] = useState(false);

  // Generate random orb data
  const generateOrbs = () => {
    return Array.from({ length: 8 }, (_, i) => ({
      id: i,
      size: Math.floor(Math.random() * 40) + 10, // 10–50px
      top: Math.random() * 120 - 20, // can go above footer (-20%)
      left: Math.random() * 100, // percentage
      delay: Math.random() * 5, // stagger animations
    }));
  };

  // Regenerate orbs every few seconds
  useEffect(() => {
    setOrbs(generateOrbs());

    const interval = setInterval(() => {
      setFading(true); // trigger fade out
      setTimeout(() => {
        setOrbs(generateOrbs()); // after fade out, reposition
        setFading(false); // fade back in
      }, 1000); // fade duration matches CSS
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="relative overflow-hidden bg-black text-white py-6 px-4">
      {/* Glowing orbs */}
      <div
        className={`absolute z-10 inset-0 w-full h-full pointer-events-none ${
          fading && "transition"
        }`}
      >
        {orbs.map((orb) => (
          <div
            key={orb.id}
            style={{
              width: orb.size,
              height: orb.size,
              top: `${orb.top}%`,
              left: `${orb.left}%`,
              animationDelay: `${orb.delay}s`,
            }}
            className={`absolute rounded-full blur-xl bg-cyan-400 animate-orbGlow`}
          />
        ))}
      </div>

      {/* Footer content */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 relative z-20">
        <div>
          <p className="text-sm">&copy; 2025 Pons Anthony Advento</p>
          <p className="text-xs text-gray-400">
            Turning ideas into interactive experiences.
          </p>
        </div>

        <div className="flex gap-3">
          <a
            href="https://github.com/advento098"
            target="_blank"
            className="text-2xl hover:text-[#00c4cc]"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://linkedin.com/in/ponsanthonyadvento"
            target="_blank"
            className="text-2xl hover:text-[#00c4cc]"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="mailto:ponsadvento08@gmail.com"
            className="text-2xl hover:text-[#00c4cc]"
          >
            <i className="fas fa-envelope"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}
