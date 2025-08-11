import Heading from "../ui/Heading";
import Section from "../ui/Section";
import Input from "../ui/Input";
import TextArea from "../ui/TextArea";
import { useState } from "react";

export default function Contact() {
  const [value, setValue] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleOnChange = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    setValue((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <Section id="Contact">
      <Heading>Work with me</Heading>
      <form>
        <div className="text-center">
          {/* Name and email */}
          <div className="flex gap-4">
            <Input
              name={"name"}
              value={value.name}
              onChange={handleOnChange}
              placeholder={"Name/Company"}
            />
            <Input
              name={"email"}
              value={value.email}
              type="email"
              onChange={handleOnChange}
              placeholder={"Your email"}
            />
          </div>

          {/* Subject */}
          <div className="mt-5 flex flex-col items-center justify-center gap-5">
            <Input
              name={"subject"}
              value={value.subject}
              onChange={handleOnChange}
              placeholder={"Subject"}
              className="w-full text-left"
            />
            <TextArea onChange={handleOnChange} value={value.message} />
          </div>
          <button
            type="submit"
            className="bg-[#00c4cc] py-2 px-4 mt-5 rounded-3xl"
            onSubmit={() => console.log("Submitted")}
          >
            Start conversation
          </button>
        </div>
      </form>
    </Section>
  );
}
