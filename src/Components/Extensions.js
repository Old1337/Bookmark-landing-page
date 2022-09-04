import React from "react";

import SectionIntro from "./SectionIntro";

import Extension from "./Extension";
import { extensionData } from "../data/extensionData";

const Extensions = () => {
  return (
    <section className="container mx-auto py-20 px-12 flex flex-col gap-10">
      <SectionIntro
        title="Download the extension
"
        desc="We’ve got more browsers in the pipeline. Please do let us know if you’ve got a favourite you’d like us to prioritize.        "
      />
      <div className="grid lg:grid-cols-[repeat(3,300px)] md:grid-cols-[repeat(2,300px)]  md:justify-center   gap-5 ">
        {extensionData.map((ext) => {
          return (
            <Extension
              key={ext.id}
              image={ext.image}
              title={ext.title}
              version={ext.version}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Extensions;
