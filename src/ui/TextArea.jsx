import { useEffect, useRef } from "react";

export default function TextArea({ value, onChange }) {
  const textBoxRef = useRef(null);
  const maxHeight = "240";

  useEffect(() => {
    if (textBoxRef.current) {
      textBoxRef.current.style.height = "auto";
      if (textBoxRef.current.scrollHeight < maxHeight) {
        textBoxRef.current.style.height =
          textBoxRef.current.scrollHeight + "px";
      } else {
        textBoxRef.current.style.height = maxHeight + "px";
      }
    }
  }, [value]);

  return (
    <div className={"relative w-full"}>
      <textarea
        name="message"
        ref={textBoxRef}
        placeholder="Please write your message here..."
        onChange={onChange}
        className="w-full text-wrap peer py-0 px-2 m-0 resize-none focus:outline-none focus:ring-0"
        required
      />
      <span className="absolute bottom-0 left-0 w-full h-0.5 z-20 bg-cyan-950" />
      <span className="absolute bottom-0 left-0 w-0 h-0.5 z-50 peer-focus:w-full transition-all ease-in-out bg-linear-to-r from-[#00c4cc] via-white to-[#00c4cc] " />
    </div>
  );
}
