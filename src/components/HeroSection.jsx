import HeroImage from "../assets/portfolio_hero_image.svg";
import Section from "../ui/Section";

import Resume from "../assets/Advento_CV.pdf";

export default function HeroSection() {
  // Place holder for height difference
  return (
    <Section id="Home" className="relative overflow-hidden pt-15 px-0">
      <div className="z-50 mt-5 mb-2 w-60">
        <img src={HeroImage} alt="logo" />
      </div>
      {/* Hero Details */}
      <div className="text-center flex flex-col z-50 items-center">
        <h1 className="[font-size:_clamp(3.5rem,12vw,4.5rem)] font-bold text-[#00c4cc]">
          Pons Anthony Advento
        </h1>
        <h3>Web Developer | Computer Engineer | Tech Enthusiast</h3>
        <p className="mt-5 px-7 max-w-6xl [font-size:_min(1.2rem,5vw)]">
          I am a computer engineering graduate passionate about web development
          as it combines creativity and critical thinking while solving
          practical solutions.
        </p>
        <button className="mt-5 cursor-pointer relative group text-slate-950 transition-all flex items-center justify-center whitespace-nowrap rounded-lg hover:rotate-[3deg] will-change-transform duration-300 shadow-lg hover:shadow-xl h-12 text-lg pl-[5rem] pr-6 bg-[#00c4cc] shadow-[#00c5cc46] hover:shadow-[#00c5cc46]">
          <div className="absolute left-0 top-0 mt-1 ml-1 bg-white text-slate-950 p-[0.35rem] bottom-1 group-hover:w-[calc(100%-0.5rem)] transition-all rounded-md duration-300 h-10 w-10">
            <a href={Resume} target="_blank" rel="noopener noreferrer">
              <i className="fas fa-download"></i>
            </a>
          </div>

          <div>Get my CV</div>

          <div className="bg-white absolute flex rounded-full animate-ping opacity-75 h-5 w-5 -top-2 -right-2"></div>
          <div className="bg-white absolute flex rounded-full scale-[90%] h-5 w-5 -top-2 -right-2"></div>
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
      <div className="absolute z-10 inset-0 w-full h-full opacity-50">
        {/* blurred circles */}
        <div className="absolute size-180 -left-140 top-1/4 blur-3xl rounded-full bg-radial from-[#00c4cc] to-transparent" />
        <div className="absolute size-160 -right-150 bottom-1/3 blur-3xl rounded-full bg-radial from-[#00c4cc] to-transparent" />
        <div className="absolute size-40 top-12 right-1/5 blur-3xl rounded-full bg-radial from-[#00c4cc] to-transparent" />
        <div className="absolute size-50 top-1/2 left-1/3 blur-3xl rounded-full bg-radial from-[#00c4cc] to-transparent" />
        <div className="absolute size-30 bottom-20 left-1/4 blur-3xl rounded-full bg-radial from-[#00c4cc] to-transparent" />
        <div className="absolute size-35 bottom-44 right-1/6 blur-3xl rounded-full bg-radial from-[#00c4cc] to-transparent" />
      </div>
    </Section>
  );
}
