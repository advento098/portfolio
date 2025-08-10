import StackIcon from "tech-stack-icons";

export default function StackCoin({ techs }) {
  return (
    techs &&
    techs.map((val, idx) => {
      return (
        <div key={idx} className="rounded-full">
          <StackIcon name={val} />
        </div>
      );
    })
  );
}
