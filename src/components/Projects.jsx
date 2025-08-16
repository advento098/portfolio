import { useEffect, useRef } from "react";
import { projects } from "../data/projects";

import { Card } from "../ui/Card";
import Heading from "../ui/Heading";
import Section from "../ui/Section";
import StackCoin from "../ui/StackCoin";

export default function Projects() {
  return (
    <Section id="MyWorks">
      <Heading>My recent projects</Heading>
      <div className="cards flex flex-wrap items-start justify-center gap-5">
        {projects.map((val, i) => (
          <Card
            key={val + i}
            title={val.title}
            description={val.description}
            eyebrow={val.eyebrow}
            img={val.img}
            alt={val.alt}
            className="w-[240px]"
          >
            {" "}
            <StackCoin techs={val.coinName} />
          </Card>
        ))}
      </div>
    </Section>
  );
}
