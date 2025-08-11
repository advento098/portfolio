import { useState, useId } from "react";

export default function Input({
  error,
  name,
  type = "text",
  value,
  onChange,
  placeholder,
  className = "",
}) {
  const id = useId();
  return (
    <div className={"relative " + className}>
      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        className="peer focus:outline-none focus:ring-0 mb-3 px-2"
        required
      />
      <span className="absolute bottom-0 left-0 w-full h-0.5 z-20 bg-cyan-950" />
      <span className="absolute bottom-0 left-0 w-0 h-0.5 z-50 peer-focus:w-full transition-all ease-in-out bg-linear-to-r from-[#00c4cc] via-white to-[#00c4cc] " />
    </div>
  );
}

