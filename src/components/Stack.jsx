import StackIcon from "tech-stack-icons";
import Section from "../ui/Section";

export default function Stack() {
  return (
    <Section>
      <h1 className="text-center text-2xl font-light">Tech and tools I use</h1>
      {/* Scrolling tech effect */}
      <div className="w-11/12 container whitespace-nowrap overflow-hidden py-5 relative">
        <div className="scroller inline-block">
          <StackIcon name="html5" className="size-13 ml-10" />
          <StackIcon name="css3" className="size-13 ml-10" />
          <StackIcon name="prettier" className="size-13 ml-10" />
          <StackIcon name="tailwindcss" className="size-13 ml-10" />
          <StackIcon name="js" className="size-13 ml-10" />
          <StackIcon name="react" className="size-13 ml-10" />
          <StackIcon name="flutter" className="size-13 ml-10" />
          <StackIcon name="mysql" className="size-13 ml-10" />
          <StackIcon name="postgresql" className="size-13 ml-10" />
          <StackIcon name="firebase" className="size-13 ml-10" />
          <StackIcon name="ps" className="size-13 ml-10" />
          <StackIcon name="ai" className="size-13 ml-10" />
          <StackIcon name="canva" className="size-13 ml-10" />
          <StackIcon name="git" className="size-13 ml-10" />
          <StackIcon name="github" className="size-13 ml-10" />
          <StackIcon name="linux" className="size-13 ml-10" />
        </div>
        <div className="scroller inline-block">
          <StackIcon name="html5" className="size-13 ml-10" />
          <StackIcon name="css3" className="size-13 ml-10" />
          <StackIcon name="prettier" className="size-13 ml-10" />
          <StackIcon name="tailwindcss" className="size-13 ml-10" />
          <StackIcon name="js" className="size-13 ml-10" />
          <StackIcon name="react" className="size-13 ml-10" />
          <StackIcon name="flutter" className="size-13 ml-10" />
          <StackIcon name="mysql" className="size-13 ml-10" />
          <StackIcon name="postgresql" className="size-13 ml-10" />
          <StackIcon name="firebase" className="size-13 ml-10" />
          <StackIcon name="ps" className="size-13 ml-10" />
          <StackIcon name="ai" className="size-13 ml-10" />
          <StackIcon name="canva" className="size-13 ml-10" />
          <StackIcon name="git" className="size-13 ml-10" />
          <StackIcon name="github" className="size-13 ml-10" />
          <StackIcon name="linux" className="size-13 ml-10" />
        </div>
      </div>
    </Section>
  );
}
