import React from "react";

const Intro = () => {
  return (
    <section className="pt-16 md:pt-44 md:before:top-64 xl:before:w-2/5 xl:before:h-80 relative before:top-44 before:right-0 before:w-80   before:h-48 before:rounded-bl-[170px] before:rounded-tl-[170px]  before:z-[-1]  before:absolute before: before:bg-primary ">
      <div className="container md:flex md:flex-row-reverse  md:justify-between md:gap-5  mx-auto p-6">
        <img
          className="md:w-6/12 mb-20 md:relative lg:bottom-32"
          src="images/illustration-hero.svg"
          alt=""
        />

        <div className="flex xl:basis-1/3 md:basis-1/2 flex-col gap-7 items-center md:items-start md:text-left text-center">
          <h1 className="capitalize text-heading xl:text-5xl text-3xl font-medium">
            a simple bookmark manager
          </h1>
          <p className="text-gray-400 leading-7">
            A clean and simple interface to organize your favourite websites.
            Open a new browser tab and see your sites load instantly. Try it for
            free.
          </p>
          <div className="flex gap-4">
            <button className="bg-primary rounded p-3 text-white duration-150 hover:bg-white hover:border-primary hover:border-2 hover:text-primary">
              Get in on Chrome
            </button>
            <button className="rounded p-3 shadow-md bg-white font-medium duration-150 hover:bg-white hover:border-black hover:border-2 hover:text-black">
              Get in on Firefox
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
