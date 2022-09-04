import React from "react";
import SectionIntro from "./SectionIntro";

import { faqData } from "../data/faqData";
import Faq from "./Faq";

const Faqs = () => {
  return (
    <section className="container mx-auto py-20 px-12 flex flex-col gap-6">
      <SectionIntro
        title="Frequently Asked Questions"
        desc="Here are some of our FAQs. If you have any other questions you’d like answered please feel free to email us."
      />

      <ul className="grid m-auto">
        {faqData.map((q) => {
          return (
            <Faq key={q.id} id={q.id} question={q.question} answer={q.answer} />
          );
        })}
      </ul>
      <button className="bg-primary rounded font-medium p-3 w-28 m-auto text-white">
        More info
      </button>
    </section>
  );
};

export default Faqs;
