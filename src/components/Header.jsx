export default function Header() {
  return (
    <header className="fixed inset-0 z-50 flex items-center justify-center h-20 backdrop-blur-xl">
      <nav className="[font-size:_clamp(1rem,_2vw,_1.5rem)] flex gap-15">
        <a href="#Home">Home</a>
        <a href="#MyWorks">My Works</a>
        <a href="#Contact">Contact</a>
      </nav>
    </header>
  );
}
