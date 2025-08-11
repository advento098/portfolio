import { projects } from "../data/projects";

import Card from "../ui/Card";
import Heading from "../ui/Heading";
import Section from "../ui/Section";
import StackCoin from "../ui/StackCoin";

export default function Projects() {
  return (
    <Section id="MyWorks" className="pt-0">
      <Heading>My recent projects</Heading>
      <div className="cards flex flex-wrap items-center justify-center gap-5">
        {projects.map((val, i) => (
          <Card
            key={val + i}
            title={val.title}
            description={val.description}
            eyebrow={val.eyebrow}
            img={val.img}
          >
            {" "}
            <StackCoin techs={val.coinName} />
            <button className="text-xs px-3 py-1 rounded-full bg-[#00c4cc] text-black font-semibold">
              {val.buttonName}
            </button>{" "}
          </Card>
        ))}
      </div>
    </Section>
  );
}
