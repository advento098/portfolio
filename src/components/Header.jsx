export default function Header() {
  return (
    <header className="fixed inset-0 z-100 flex items-center justify-center h-20 px-5 backdrop-blur-xl">
      <nav className="[font-size:_clamp(1rem,_4vw,_1.5rem)] flex gap-[10vw]">
        <a href="#Home">Home</a>
        <a href="#MyWorks">My Works</a>
        <a href="#Contact">Contact</a>
      </nav>
    </header>
  );
}
