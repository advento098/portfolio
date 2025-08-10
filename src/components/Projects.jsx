// Project picture imports here
// import

import Card from "../ui/Card";
import Heading from "../ui/Heading";
import Section from "../ui/Section";
import StackCoin from "../ui/StackCoin";

export default function Projects() {
  return (
    <Section className="pt-0">
      <Heading>My recent projects</Heading>
      <div className="cards flex flex-wrap items-center justify-center gap-5">
        <Card img="" title="Yt Clone" description="Coming soon...">
          <StackCoin techs={["html5", "css3"]} />
        </Card>
        <Card img="" title="BAFE Dashboard" description=""></Card>
        <Card img="" title="Payroll Management" description=""></Card>
        <Card
          img=""
          title="Chatmate"
          description="Upgrades are underway"
        ></Card>
      </div>
    </Section>
  );
}
