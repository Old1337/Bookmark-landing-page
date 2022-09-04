import React, { useState } from "react";

const ContactUs = () => {
  const [textValue, setTextValue] = useState("");
  const [isValid, setisValid] = useState(true);

  const handleEmailMatch = (e) => {
    const reg = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;

    const { value } = e.target;

    setisValid(value.match(reg) ? true : false);

    setTextValue(value);
  };
  return (
    <section
      id="contact"
      className="py-16 bg-primary text-center flex flex-col gap-10"
    >
      <div className="text-white grid gap-8">
        <span className="tracking-[0.3rem] uppercase text-xs font-medium">
          35,000+ already joined
        </span>
        <h2 className="text-3xl md:max-w-md md:m-auto font-medium">
          Stay up-to-date with what we're doing
        </h2>
      </div>
      <div className="flex flex-col relative gap-3 px-10 md:flex-row md:justify-center">
        <input
          className={`rounded p-3  md:w-72 placeholder:text-gray-300 ${
            isValid ? "" : " bg-error-img border-2"
          } bg-no-repeat bg-[center_right_1rem] outline-none border-red-400 overflow-hidden`}
          type="text"
          placeholder="Enter your email address"
          onChange={(e) => handleEmailMatch(e)}
          value={textValue}
        />
        {!isValid && (
          <span className="bg-red-400 animate-fadeIn text-sm rounded-tl-none rounded-tr-none overflow-hidden md:absolute md:-bottom-8 md:w-72 md:left-[calc(50%-13.37rem)]   text-white italic rounded relative bottom-4 text-left p-2">
            Whoops, make sure it's an email
          </span>
        )}
        <button className="bg-red-400 md:w-32 rounded p-3 font-medium duration-200 hover:border-red-400 hover:border-2 hover:bg-white hover:text-red-400 text-white">
          Contact Us
        </button>
      </div>
    </section>
  );
};

export default ContactUs;
