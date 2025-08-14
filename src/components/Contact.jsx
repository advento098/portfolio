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

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted");
  };

  return (
    <Section id="Contact">
      <Heading>Work with me</Heading>
      <form
        onSubmit={handleOnSubmit}
        className="w-10/12 max-w-2xl flex flex-col gap-5 items-center justify-center"
      >
        {/* Subject */}
        <div className="mt-5 w-full flex flex-col items-center justify-center gap-8">
          <Input
            name={"name"}
            value={value.name}
            onChange={handleOnChange}
            placeholder={"Name/Company"}
            className="w-full"
          />

          <Input
            name={"email"}
            value={value.email}
            type="email"
            onChange={handleOnChange}
            placeholder={"Your email"}
            className="w-full"
          />

          <Input
            name={"subject"}
            value={value.subject}
            onChange={handleOnChange}
            placeholder={"Subject"}
            className="w-full"
          />
          <TextArea onChange={handleOnChange} value={value.message} />
        </div>
        <button
          type="submit"
          className="bg-[#00c4cc] py-2 px-4 mt-5 mx-1/2 rounded-3xl"
        >
          Start conversation
        </button>
      </form>
    </Section>
  );
}
