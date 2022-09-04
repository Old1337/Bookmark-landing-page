import React from "react";

const Tab = ({ image, title, desc }) => {
  return (
    <>
      <img className="md:w-96 animate-fadeIn xl:basis-1/2" src={image} alt="" />
      <div className="text-center animate-fadeLeft md:text-left grid gap-5 xl:basis-1/2">
        <h2 className="text-heading text-3xl font-medium">{title}</h2>
        <p className="text-gray-400 xl:w-1/2 ">{desc}</p>
        <button className="bg-primary rounded p-3 hidden md:block w-28 mr-auto text-white">
          More Info
        </button>
      </div>
    </>
  );
};

export default Tab;
