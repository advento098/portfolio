export default function Header() {
  return (
    <header className="fixed inset-0 z-10 flex items-center border-2 justify-center h-15">
      <nav className="text-xl flex gap-15">
        <a href="#Home">Home</a>
        <a href="#My Works">My Works</a>
        <a href="#Contact">Contact</a>
      </nav>
    </header>
  );
}
