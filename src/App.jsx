import "./App.css";

function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <img src="https://placehold.co/600x400" alt="logo" />
            <a className="fab fa-facebook"></a>
            <a className="fab fa-linkedin"></a>
            <a className="fab fa-github"></a>
          </li>
          <li>
            {/* <img src="https://placehold.co/600x400" alt="logo" /> */}
            <a>About</a>
            <a>Projects</a>
            <a>Contact</a>
          </li>
        </ul>
      </nav>
      <section>
        <header>
          <img src="https://placehold.co/600x400" alt="logo" />
          <p>Hi, my name is</p>
          <h1>Pons Anthony Advento</h1>
          <h3>
            Computer Engineer | Web Developer | Product Designer |
            Tech-Enthusiast | Loves learning about computers
          </h3>
          <button>Have my CV</button>
          <span class="material-symbols-outlined">
            keyboard_double_arrow_down
          </span>
        </header>
      </section>
    </>
  );
}

export default App;
