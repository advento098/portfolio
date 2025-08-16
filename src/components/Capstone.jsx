import { capstoneImages } from "../data/projects";

import Section from "../ui/Section";
import Heading from "../ui/Heading";
import { CardCarousel } from "../ui/Card";

export default function Capstone() {
  return (
    <Section>
      <Heading>Our capstone</Heading>
      <p className="text-center">
        It is a <span className="font-bold">Reverse Vending Machine</span> that
        converts 1.5-liter and single-use plastics to an{" "}
        <span className="font-bold">Ecobrick</span> that can be used for small
        scale constructions such as public furnitures, decorative walls, garden
        pots, and many more!
      </p>
      <div className="capstone-container overflow-hidden w-full whitespace-nowrap relative">
        <div className="capstone-scroller inline-block">
          {capstoneImages.map((val, i) => (
            <CardCarousel
              key={val + i}
              title={val.title}
              src={val.src}
              alt={val.alt}
            />
          ))}
        </div>
        <div className="capstone-scroller inline-block">
          {capstoneImages.map((val, i) => (
            <CardCarousel
              key={val + i}
              title={val.title}
              src={val.src}
              alt={val.alt}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}
