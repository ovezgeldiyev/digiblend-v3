import { arrowRight, paperIcon } from "@/app/Base/SVG";
import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";
const servicesList = [
  {
    id: "1",
    type: "Design",
    bg: "/images/offer/1.jpg",
    suptitle: "WAAROM?",
    list: [
      {
        id: "1",
        title: "Doelgroep targeting",
        text: "Met onze gerichte strategieën vergroten we de klantacquisitie, verbeteren we uw klantenbasis en stimuleren we uw omzet.",
      },
      {
        id: "2",
        title: "Online zichtbaarheid",
        text: "Met onze gerichte strategieën vergroten we de klantacquisitie, verbeteren we uw klantenbasis en stimuleren we uw omzet.",
      },
      {
        id: "3",
        title: "Meetbaar resultaat",
        text: "Met onze gerichte strategieën vergroten we de klantacquisitie, verbeteren we uw klantenbasis en stimuleren we uw omzet.",
      },
      {
        id: "4",
        title: "Naamsbekendheid",
        text: "Met onze gerichte strategieën vergroten we de klantacquisitie, verbeteren we uw klantenbasis en stimuleren we uw omzet.",
      },
    ],
  },
  {
    id: "2",
    type: "Development",
    bg: "/images/offer/2.jpg",
    suptitle: "WAAROM?",
    list: [
      {
        id: "1",
        title: "Doelgroep targeting",
        text: "Met onze gerichte strategieën vergroten we de klantacquisitie, verbeteren we uw klantenbasis en stimuleren we uw omzet.",
      },
      {
        id: "2",
        title: "Online zichtbaarheid",
        text: "Met onze gerichte strategieën vergroten we de klantacquisitie, verbeteren we uw klantenbasis en stimuleren we uw omzet.",
      },
      {
        id: "3",
        title: "Meetbaar resultaat",
        text: "Met onze gerichte strategieën vergroten we de klantacquisitie, verbeteren we uw klantenbasis en stimuleren we uw omzet.",
      },
      {
        id: "4",
        title: "Naamsbekendheid",
        text: "Met onze gerichte strategieën vergroten we de klantacquisitie, verbeteren we uw klantenbasis en stimuleren we uw omzet.",
      },
    ],
  },
  {
    id: "3",
    type: "Data & Analytics",
    bg: "/images/offer/3.jpg",
    suptitle: "WAAROM?",
    list: [
      {
        id: "1",
        title: "Doelgroep targeting",
        text: "Met onze gerichte strategieën vergroten we de klantacquisitie, verbeteren we uw klantenbasis en stimuleren we uw omzet.",
      },
      {
        id: "2",
        title: "Online zichtbaarheid",
        text: "Met onze gerichte strategieën vergroten we de klantacquisitie, verbeteren we uw klantenbasis en stimuleren we uw omzet.",
      },
      {
        id: "3",
        title: "Meetbaar resultaat",
        text: "Met onze gerichte strategieën vergroten we de klantacquisitie, verbeteren we uw klantenbasis en stimuleren we uw omzet.",
      },
      {
        id: "4",
        title: "Naamsbekendheid",
        text: "Met onze gerichte strategieën vergroten we de klantacquisitie, verbeteren we uw klantenbasis en stimuleren we uw omzet.",
      },
    ],
  },
  {
    id: "4",
    type: "Marketing",
    bg: "/images/offer/4.jpg",
    suptitle: "WAAROM?",
    list: [
      {
        id: "1",
        title: "Doelgroep targeting",
        text: "Met onze gerichte strategieën vergroten we de klantacquisitie, verbeteren we uw klantenbasis en stimuleren we uw omzet.",
      },
      {
        id: "2",
        title: "Online zichtbaarheid",
        text: "Met onze gerichte strategieën vergroten we de klantacquisitie, verbeteren we uw klantenbasis en stimuleren we uw omzet.",
      },
      {
        id: "3",
        title: "Meetbaar resultaat",
        text: "Met onze gerichte strategieën vergroten we de klantacquisitie, verbeteren we uw klantenbasis en stimuleren we uw omzet.",
      },
      {
        id: "4",
        title: "Naamsbekendheid",
        text: "Met onze gerichte strategieën vergroten we de klantacquisitie, verbeteren we uw klantenbasis en stimuleren we uw omzet.",
      },
    ],
  },
];
export default function Services() {
  const [tab, setTab] = useState(null);

  return (
    <section className="services">
      <div className="services__bg">
        <div className="services__bg-shape">
          <img src="/images/blue-shape.svg" alt="" />
        </div>
      </div>
      <div className="auto__container">
        <div className="services__inner">
          <div className="services__inner-content">
            <h6 className="sup">ONZE DIENSTEN</h6>
            <h2>Onze diensten voor online bedrijfsgroei.</h2>
            <p>
              Ontdek onze diverse reeks oplossingen, van ontwerp en development
              tot data-analyse en marketing. Op maat gemaakt om het
              groeipotentieel van uw advocaten kantoor te ontsluiten.
            </p>
            <a href="#" className="button primary">
              <span>Download Whitepaper</span>
              {paperIcon}
            </a>
          </div>
          <div className="services__inner-col">
            {servicesList.map((item, index) => {
              return (
                <ServicesItem {...item} setTab={setTab} tab={tab} key={index} />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
const ServicesItem = (props) => {
  return (
    <div className="servicesItem">
      <div
        onClick={() => {
          if (props.tab !== props.id) {
            props.setTab(props.id);
          } else {
            props.setTab(null);
          }
        }}
        className={
          "servicesItem__head " + (props.tab === props.id ? "active" : "")
        }
      >
        <div className="servicesItem__head-bg">
          <img src={props.bg} alt="" />
        </div>
        <h3>{props.type}</h3>
        <div className="servicesItem__more">
          <b>Meer informatie</b>
          <span>{arrowRight}</span>
        </div>
      </div>
      <AnimatePresence>
        {props.tab === props.id && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            transition={{ duration: 0.2 }}
            exit={{ opacity: 0, height: 0 }}
            className="servicesItem__body"
          >
            <div
              className="servicesItem__close"
              onClick={() => {
                if (props.tab === props.id) {
                  props.setTab(null);
                }
              }}
            ></div>
            <h6 className="sup">{props.suptitle}</h6>
            <ul>
              {props?.list.map((item, index) => {
                return (
                  <li key={index}>
                    <h6>
                      <span>
                        <img src="/images/icons/check-white.svg" alt="" />
                      </span>
                      <b>{item?.title}</b>
                    </h6>
                    <p className="sm">{item?.text}</p>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
