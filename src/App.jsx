import Capstone from "./components/Capstone";
import Contact from "./components/Contact";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Projects from "./components/Projects";
import Stack from "./components/Stack";
import LandingPages from "./components/LandingPages";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <Stack />
      <Projects />
      <LandingPages />
      <Capstone />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
