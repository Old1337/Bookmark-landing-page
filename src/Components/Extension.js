import React from "react";

const Extension = ({ image, title, version }) => {
  return (
    <div className="text-center relative [&:nth-child(2)]:top-6 [&:nth-child(3)]:top-14 rounded-xl shadow-lg py-10  bg-white">
      <img className="m-auto mb-5" src={image} alt="" />
      <h2 className="text-heading font-medium text-xl mb-3">{title}</h2>
      <span className="text-gray-400 block mb-14">
        Minimum version {version}
      </span>
      <div className="bg-dot-pattern mb-4 h-1  bg-contain"></div>
      <button className="mt-5 bg-primary duration-200 font-medium hover:bg-white hover:text-primary hover:border-2 hover:border-primary text-white p-3 w-[calc(100%-20%)] rounded">
        Add & Install Extension
      </button>
    </div>
  );
};

export default Extension;
