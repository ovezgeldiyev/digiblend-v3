import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
const faqList = [
  {
    id: "1",
    title: "Waarom digiblend?",
    text: "Ter waarborging van de kwaliteit en behoud van een evenwichtige concurrentiebalans, helpt Digiblend een maximaal aantal klanten per regio en branche.",
  },
  {
    id: "2",
    title: "Werkt digiblend samen met alle bedrijven?",
    text: "Ter waarborging van de kwaliteit en behoud van een evenwichtige concurrentiebalans, helpt Digiblend een maximaal aantal klanten per regio en branche.",
  },
  {
    id: "3",
    title: "Hoe verloopt de klant onboarding bij digiblend?",
    text: "Ter waarborging van de kwaliteit en behoud van een evenwichtige concurrentiebalans, helpt Digiblend een maximaal aantal klanten per regio en branche.",
  },
  {
    id: "4",
    title: "Hoeveel kost een website?",
    text: "Ter waarborging van de kwaliteit en behoud van een evenwichtige concurrentiebalans, helpt Digiblend een maximaal aantal klanten per regio en branche.",
  },
  {
    id: "5",
    title: "Wat houdt data-gedreven besluitvorming in?",
    text: "Ter waarborging van de kwaliteit en behoud van een evenwichtige concurrentiebalans, helpt Digiblend een maximaal aantal klanten per regio en branche.",
  },
  {
    id: "6",
    title: "Waarom beperkt digiblend het aantal klanten per branche & regio?",
    text: "Ter waarborging van de kwaliteit en behoud van een evenwichtige concurrentiebalans, helpt Digiblend een maximaal aantal klanten per regio en branche.",
  },
];
export default function Faq() {
  const [faq, setFaq] = useState(false);

  return (
    <section className="faq">
      <div className="auto__container">
        <div className="faq__inner">
          <div className="faq__inner-content">
            <h6 className="sup">FAQ</h6>
            <h2>
              Veelgestelde <br /> vragen
            </h2>
            <p>
              Bekijk onze veelgestelde vragen voor informatie over digiblend en
              onze diensten. Niet gevonden wat u zocht? Neem contact met ons op
              voor verdere assistentie. Ons team staat klaar om u te helpen.
            </p>
            <a href="#" className="button primary">
              <span>Plan Adviesgesprek</span>
            </a>
          </div>
          <div className="faq__inner-col">
            {faqList.map((item, index) => {
              return (
                <FaqItem setFaq={setFaq} faq={faq} {...item} key={index} />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
const FaqItem = (props) => {
  return (
    <div className="faqItem">
      <div
        className={"faqItem__head " + (props.faq === props.id ? "active" : "")}
        onClick={() => {
          if (props.faq !== props.id) {
            props.setFaq(props.id);
          } else {
            props.setFaq(null);
          }
        }}
      >
        <h6>{props.title}</h6>
        <span></span>
      </div>
      <AnimatePresence>
        {props.faq === props.id && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            transition={{ duration: 0.2 }}
            exit={{ opacity: 0, height: 0 }}
            className="faqItem__body"
          >
            <p>{props.text}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
