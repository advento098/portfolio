import { capstoneImages } from "../data/projects";

import Section from "../ui/Section";
import Heading from "../ui/Heading";
import { CardCarousel } from "../ui/Card";

export default function Capstone() {
  return (
    <Section>
      <Heading>Our capstone</Heading>
      <div className="container border-red-700 overflow-hidden whitespace-nowrap relative">
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
