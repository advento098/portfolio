import HeroImage from "../assets/portfolio_hero_image.svg";
import Section from "../ui/Section";

export default function HeroSection() {
  // Place holder for height difference
  const windowHeight = window.innerHeight;
  const middlePart = windowHeight / 2;
  return (
    <Section
      id="Home"
      className="relative overflow-hidden bg-black -z-10 pt-15 px-0"
    >
      <div className="z-10 mt-5 mb-2 w-60">
        <img src={HeroImage} alt="logo" />
      </div>
      {/* Hero Details */}
      <div className="text-center flex flex-col items-center">
        <h1 className="text-7xl font-bold text-[#00c4cc]">
          Pons Anthony Advento
        </h1>
        <h3>Web Developer | Computer Engineer | Tech Enthusiast</h3>
        <p className="mt-5 px-7 text-sm/8">
          I am a computer engineering graduate passionate about web development
          as it combines creativity and critical thinking while solving
          practical solutions.
        </p>
        <button className="mt-7 text-xl font-bold max-w-4/12 bg-[#00c4cc] rounded-2xl px-5 py-2">
          Get my CV
        </button>
        <div className="flex mt-3 gap-3">
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
        <span className="material-symbols-outlined mt-7 size-10 text-center">
          swipe_down
        </span>
      </div>

      {/* Background */}
      <div className="absolute -z-10 inset-0 w-full h-full opacity-50">
        {/* blurred circles */}
        <div
          className={`absolute size-200 -left-170 top-1/2 -translate-y-1/2 blur-3xl rounded-full bg-radial from-[#00c4cc] to-transparent`}
        />
        <div className="absolute size-200 -right-170 top-1/2 -translate-y-1/2 blur-3xl rounded-full bg-radial from-[#00c4cc] to-transparent" />
        <div className="absolute size-30 top-30 left-40 blur-3xl rounded-full bg-radial from-[#00c4cc] to-transparent" />
        <div className="absolute size-30 top-50 left-70 blur-3xl rounded-full bg-radial from-[#00c4cc] to-transparent" />
        <div className="absolute size-30 bottom-20 left-40 blur-3xl rounded-full bg-radial from-[#00c4cc] to-transparent" />
        <div className="absolute size-30 bottom-40 left-70 blur-3xl rounded-full bg-radial from-[#00c4cc] to-transparent" />
      </div>
    </Section>
  );
}
