import { useState, useId } from "react";

function cx(...classnames) {
  return classnames.join(" ");
}

export default function Input({
  error,
  name,
  type = "text",
  value,
  onChange,
  placeholder,
  className = "",
  inputClass = "",
}) {
  const id = useId();
  const inputBaseClass =
    "w-full peer focus:outline-none focus:ring-0 mb-3 px-2";

  return (
    <div className={"relative " + className}>
      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        className={cx(inputBaseClass, inputClass)}
        required
      />
      <span className="absolute bottom-0 left-0 w-full h-0.5 z-20 bg-cyan-950" />
      <span className="absolute bottom-0 left-0 w-0 h-0.5 z-50 peer-focus:w-full transition-all ease-in-out bg-linear-to-r from-[#00c4cc] via-white to-[#00c4cc] " />
    </div>
  );
}
