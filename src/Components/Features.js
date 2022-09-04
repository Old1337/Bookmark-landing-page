import React, { useState } from "react";
import SectionIntro from "./SectionIntro";

import Tab from "./Tab";

import { tabsData } from "../data/tabsData";

const Features = () => {
  const [currentTab, setcurrentTab] = useState(1);

  const setTab = (tabId) => {
    setcurrentTab(tabId);
  };
  return (
    <section
      id="features"
      className=" relative container flex flex-col gap-14 mx-auto px-6 py-20 md:before:top-[40rem] xl:before:w-2/5 xl:before:h-80  before:top-[50rem] before:left-[-190px] before:w-[30rem]   before:h-44 before:rounded-tr-[170px] before:rounded-br-[170px]  before:z-[-1]  before:absolute before: before:bg-primary"
    >
      <SectionIntro
        title="Features"
        desc="Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between your devices so you can access them on the go."
      />
      <div className="flex flex-col md:flex-row md:justify-center ">
        {tabsData.map((tab) => {
          return (
            <button
              onClick={() => setTab(tab.id)}
              key={tab.id}
              className={`text-gray-600 ${
                currentTab === tab.id
                  ? "border-red-400 border-b-4"
                  : "border-gray-200 border-b-2"
              }    p-10 duration-200 hover:text-red-400`}
            >
              {tab.tabName}
            </button>
          );
        })}
      </div>
      <div className="flex flex-col md:flex-row items-center gap-20 xl:gap-24 justify-between">
        {tabsData.map((tab) => {
          return (
            currentTab === tab.id && (
              <Tab
                key={tab.id}
                image={tab.image}
                title={tab.title}
                desc={tab.desc}
              />
            )
          );
        })}
      </div>
    </section>
  );
};

export default Features;
