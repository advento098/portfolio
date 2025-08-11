import StackIcon from "tech-stack-icons";

export default function StackCoin({
  techs = [],
  size = 28,
  className = "",
  title,
}) {
  const list = techs;
  if (!list.length) return null;

  const baseCoin =
    "inline-flex items-center justify-center rounded-full shrink-0 transition-colors duration-200";
  const outline =
    "bg-black/60 border border-[#00c4cc] text-[#00c4cc] hover:bg-black";
  return (
    <span className={"flex items-center gap-1 " + className}>
      {list.map((val, i) => (
        <span
          key={val + i}
          className={`${baseCoin} ${outline}`}
          style={{ width: size, height: size }}
          title={title || val}
        >
          <StackIcon name={val} className="w-[60%] h-[60%]" />
        </span>
      ))}
    </span>
  );
}
