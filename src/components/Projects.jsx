import Heading from "../ui/Heading";
import Section from "../ui/Section";

export default function Projects() {
  return (
    <Section className="pt-0">
      <Heading>My works</Heading>
      <div className="cards">
        <div className="card inline-block bg-white h-58 w-40"></div>
        <div className="card inline-block bg-white h-58 w-40"></div>
        <div className="card inline-block bg-white h-58 w-40"></div>
      </div>
    </Section>
  );
}
