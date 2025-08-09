import { useEffect, useState } from "react";
import HeroImage from "../assets/portfolio_hero_image.svg";

export default function HeroSection() {
  // Place holder for height difference
  const windowHeight = window.innerHeight;
  const middlePart = windowHeight / 2;
  return (
    // <section
    //   id="Home"
    //   className="flex flex-col items-center h-screen border-2 pt-15"
    // >
    //   <div className="mt-20 text-center">
    //     <h1 className="text-5xl">Pons Anthony Advento</h1>
    //     <h3>Web Developer | Computer Engineer | Tech Enthusiast</h3>
    //     <button>Have my CV</button>
    //     {/* <span className="material-symbols-outlined">
    //       keyboard_double_arrow_down
    //     </span> */}
    //   </div>
    //   <div className="w-80">
    //     <img src={HeroImage} alt="logo" />
    //   </div>
    // </section>
    <section
      id="Home"
      className="relative flex flex-col overflow-hidden bg-black -z-10 items-center h-screen pt-15"
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
        <p className="mt-10 px-7 text-sm/8">
          I am a computer engineering graduate passionate about web development
          as it combines creativity and critical thinking while solving
          practical solutions.
        </p>
        <button className="mt-10 text-xl font-bold max-w-4/12 bg-[#00c4cc] rounded-2xl px-5 py-2">
          Get my CV
        </button>
        <div className="flex mt-3 gap-3">
          <a className="fab fa-facebook text-2xl text-[#00c4cc]"></a>
          <a className="fab fa-linkedin text-2xl text-[#00c4cc]"></a>
          <a className="fab fa-github text-2xl text-[#00c4cc]"></a>
        </div>
        <span className="material-symbols-outlined mt-10 size-10 text-center">
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
    </section>
  );
}
