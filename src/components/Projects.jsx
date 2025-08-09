import Heading from "../ui/Heading";
import Section from "../ui/Section";

export default function Projects() {
  return (
    <Section className="pt-0">
      <Heading>My recent projects</Heading>
      <div className="cards flex gap-5">
        <div className="card bg-white h-58 w-40"></div>
        <div className="card bg-white h-58 w-40"></div>
        <div className="card bg-white h-58 w-40"></div>
      </div>
    </Section>
  );
}
