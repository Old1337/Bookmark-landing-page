import React, { useState } from "react";

const Faq = ({ id, question, answer }) => {
  const [selectedId, setSelectedId] = useState();

  const showFaq = (id) => {
    setSelectedId(selectedId === id ? null : id);
  };
  return (
    <li
      onClick={() => showFaq(id)}
      className={`flex group flex-col gap-5 cursor-pointer ${
        selectedId === id ? "h-full" : "h-10"
      } py-10 border-gray-200 border-b-2 duration-200 overflow-hidden`}
    >
      <div className="flex items-center justify-between">
        <p className="duration-200 group-hover:text-red-400">{question}</p>
        <img
          className={`${
            selectedId === id && "rotate-180 hue-rotate-[120deg]"
          } duration-200`}
          src="images/icon-arrow.svg"
          alt=""
        />
      </div>
      <p className="text-gray-500 max-w-lg">{answer}</p>
    </li>
  );
};

export default Faq;
