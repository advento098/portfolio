import { useEffect, useRef, useState } from "react";

export default function Footer() {
  const [orbs, setOrbs] = useState([]);
  const [fading, setFading] = useState(false);
  const [existing, setExisting] = useState(true);

  // Generate random orb data
  const generateOrbs = () => {
    return Array.from({ length: 8 }, (_, i) => ({
      id: i,
      size: Math.floor(Math.random() * 40) + 10,
      top: Math.random() * 120 - 20,
      left: Math.random() * 100,
      delay: Math.random() * 5,
    }));
  };

  // Regenerate orbs every few seconds
  useEffect(() => {
    setOrbs(generateOrbs());

    const interval = setInterval(() => {
      setFading(true);
      setTimeout(() => {
        setOrbs(generateOrbs());
        setFading(false);
      }, 1000);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="relative overflow-hidden bg-black text-white py-6 px-4">
      {/* Glowing orbs */}
      {existing && (
        <div
          className={`absolute z-10 inset-0 w-full h-full pointer-events-none transition-opacity duration-1000 ${
            fading ? "opacity-0" : "opacity-100"
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
      )}

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
