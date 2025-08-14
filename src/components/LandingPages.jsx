import { landingPages } from "../data/projects";

import Section from "../ui/Section";
import Heading from "../ui/Heading";
import { Card } from "../ui/Card";
import StackCoin from "../ui/StackCoin";

export default function LandingPages() {
  return (
    <Section className="pt-0">
      <Heading>Landing pages I created</Heading>
      <div className="cards flex flex-wrap items-start justify-center gap-5">
        {landingPages.map((val, i) => (
          <Card
            key={val + i}
            title={val.title}
            description={val.description}
            eyebrow={val.eyebrow}
            img={val.img}
            className="w-[240px]"
            imageClass={val.customImageDivClass}
          >
            {" "}
            <StackCoin techs={val.coinName} />
            <a
              onClick={(e) => e.preventDefault()}
              href={val.href}
              className="text-xs text-center my-auto px-3 py-1 rounded-full bg-[#00c4cc] text-black font-semibold"
            >
              {val.buttonName}
            </a>{" "}
          </Card>
        ))}
      </div>
    </Section>
  );
}
