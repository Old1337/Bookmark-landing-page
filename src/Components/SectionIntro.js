import React from "react";

const SectionIntro = ({ title, desc }) => {
  return (
    <div className="text-center grid gap-4 md:max-w-md m-auto">
      <h2 className="text-heading font-medium text-3xl">{title}</h2>
      <p className="text-gray-400 leading-7">{desc}</p>
    </div>
  );
};

export default SectionIntro;
