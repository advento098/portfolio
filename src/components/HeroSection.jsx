import { useEffect, useState } from "react";
import HeroImage from "../assets/portfolio_hero_image.svg";

export default function HeroSection() {
  // Place holder for height difference
  const windowHeight = window.innerHeight;

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
      className="relative flex flex-col overflow-hidden bg-black -z-10 items-center h-screen border-2 pt-15"
    >
      <div className="z-10 mt-5 mb-2 w-60">
        <img src={HeroImage} alt="logo" />
      </div>
      <div className="text-center">
        <h1 className="text-5xl font-bold text-[#00c4cc]">
          Pons Anthony Advento
        </h1>
        <h3>Web Developer | Computer Engineer | Tech Enthusiast</h3>
        <p className="mt-5 px-7">
          I am a computer engineering graduate passionate about web development
          as it combines creativity and critical thinking while solving
          practical solutions.
        </p>
        <button className="mt-5 text-xl bg-[#00c4cc] rounded-2xl px-5 py-2">
          Get my CV
        </button>
        {/* <span className="material-symbols-outlined">
          keyboard_double_arrow_down
        </span> */}
      </div>

      {/* Background */}
      <div className="absolute -z-10 inset-0 w-full h-full border-2 opacity-50">
        {/* blurred circles */}
        <div className="absolute inset-0 border-2" />
        <div className="absolute size-150 -left-130 blur-3xl rounded-full bg-radial from-[#00c4cc] to-transparent" />
        <div className="absolute size-150 -right-130 blur-3xl rounded-full bg-radial from-[#00c4cc] to-transparent" />
        <div className="absolute size-30 top-30 left-40 blur-3xl rounded-full bg-radial from-[#00c4cc] to-transparent" />
        <div className="absolute size-30 top-30 left-40 blur-3xl rounded-full bg-radial from-[#00c4cc] to-transparent" />
      </div>
    </section>
  );
}
