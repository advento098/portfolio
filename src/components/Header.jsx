export default function Header() {
  const afterClass =
    "after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-[#00c4cc] after:w-0 after:transition-all after:duration-100 after:ease-in-out";
  const afterHoverClass = "hover:after:w-full";

  return (
    <header className="fixed inset-0 z-100 flex items-center justify-center h-20 px-5 backdrop-blur-xl">
      <nav className="[font-size:_clamp(1rem,_4vw,_1.5rem)] flex gap-[10vw]">
        <a
          href="#Home"
          className={`relative text-center py-2 ${afterClass} ${afterHoverClass}`}
        >
          Home
        </a>
        <a
          href="#MyWorks"
          className={`relative text-center py-2 ${afterClass} ${afterHoverClass}`}
        >
          My Works
        </a>
        <a
          href="#Contact"
          className={`relative text-center py-2 ${afterClass} ${afterHoverClass}`}
        >
          Contact
        </a>
      </nav>
    </header>
  );
}
