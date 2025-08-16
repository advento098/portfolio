import { useState, useEffect, useRef } from "react";

import Heading from "../ui/Heading";
import Section from "../ui/Section";
import Input from "../ui/Input";
import TextArea from "../ui/TextArea";

import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const [value, setValue] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const resetFormData = () =>
    setValue({
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
    setLoading(true);

    emailjs
      .send(
        "service_n9xrqoi", // from EmailJS
        "template_rrwqfcp", // from EmailJS
        {
          from_name: value.name,
          from_email: value.email,
          subject: value.subject,
          message: value.message,
        },
        "70zcNCIby157J202Z" // from EmailJS
      )
      .then(
        () => {
          setIsSent(true);
          setLoading(false);
          form.current.reset();
          resetFormData();
          setTimeout(() => {
            setIsSent(false);
          }, 5000);
        },
        (error) => {
          console.log(error);
          setLoading(false);
        }
      );
  };
  return (
    <Section id="Contact">
      <Heading>Work with me</Heading>
      <form
        ref={form}
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
        {isSent && (
          <p className="text-green-600 mt-2">Message sent successfully!</p>
        )}
        <button
          type="submit"
          className="bg-[#00c4cc] py-2 px-4 mt-5 mx-1/2 rounded-3xl"
          disabled={loading}
        >
          {loading ? "Sending..." : "Start Conversation"}
        </button>
      </form>
    </Section>
  );
}
