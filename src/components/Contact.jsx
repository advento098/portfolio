import Heading from "../ui/Heading";
import Section from "../ui/Section";
import Input from "../ui/Input";
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
    // error,
    // name,
    // (type = "text"),
    // value,
    // onChange,
    // placeholder,
    <Section id="Contact">
      <Heading>Work with me</Heading>
      <div className="">
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
        <div className="mt-5">
          <Input
            name={"subject"}
            value={value.subject}
            onChange={handleOnChange}
            placeholder={"Subject"}
          />
        </div>
      </div>
    </Section>
  );
}
