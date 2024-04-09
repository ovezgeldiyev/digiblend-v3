import React from "react";
import Slider from "react-slick";
import { bookIcon, flashIcon } from "../Base/SVG";
import Link from "next/link";

const beliefList = [
  {
    id: "1",
    link: "insights/cases/our-law-firms-success-story",
    title: "A 240% Lead Surge: Our Law Firm's Success Story",
    text: "How our marketing campaigns boosted a Law Firm's leads by 240%",
    bg: "/images/belief/1.jpg",
    cards: [
      {
        title: "KWALITATIEVE LEADS",
        number: "+320%",
        text: "Aanzienlijke toename in kwalitatieve leads.",
      },
      {
        title: "CONVERSIE RATIO",
        number: "+25%",
        text: "Relevantie voor de doelgroep leidt tot een verhoogde conversieratio.",
      },
      {
        title: "ONLINE OMZET",
        number: "+42%",
        text: "Toename in omzet via online kanalen.",
      },
    ],
  },
  {
    id: "2",
    link: "insights/cases/our-law-firms-success-story",
    title: "€280K Prospects: Garment Industry Disruption",
    text: "Prospecting high quality leads with our Marketing Automation strategy.",
    bg: "/images/belief/2.jpg",
    cards: [
      {
        title: "KWALITATIEVE LEADS",
        number: "+320%",
        text: "Aanzienlijke toename in kwalitatieve leads.",
      },
      {
        title: "CONVERSIE RATIO",
        number: "+25%",
        text: "Relevantie voor de doelgroep leidt tot een verhoogde conversieratio.",
      },
      {
        title: "ONLINE OMZET",
        number: "+42%",
        text: "Toename in omzet via online kanalen.",
      },
    ],
  },
  {
    id: "3",
    link: "insights/cases/our-law-firms-success-story",
    title: "A 240% Lead Surge: Our Law Firm's Success Story",
    text: "How our marketing campaigns boosted a Law Firm's leads by 240%",
    bg: "/images/belief/3.jpg",
    cards: [
      {
        title: "KWALITATIEVE LEADS",
        number: "+320%",
        text: "Aanzienlijke toename in kwalitatieve leads.",
      },
      {
        title: "CONVERSIE RATIO",
        number: "+25%",
        text: "Relevantie voor de doelgroep leidt tot een verhoogde conversieratio.",
      },
      {
        title: "ONLINE OMZET",
        number: "+42%",
        text: "Toename in omzet via online kanalen.",
      },
    ],
  },
  {
    id: "4",
    link: "insights/cases/our-law-firms-success-story",
    title: "A 240% Lead Surge: Our Law Firm's Success Story",
    text: "How our marketing campaigns boosted a Law Firm's leads by 240%",
    bg: "/images/belief/4.jpg",
    cards: [
      {
        title: "KWALITATIEVE LEADS",
        number: "+320%",
        text: "Aanzienlijke toename in kwalitatieve leads.",
      },
      {
        title: "CONVERSIE RATIO",
        number: "+25%",
        text: "Relevantie voor de doelgroep leidt tot een verhoogde conversieratio.",
      },
      {
        title: "ONLINE OMZET",
        number: "+42%",
        text: "Toename in omzet via online kanalen.",
      },
    ],
  },
];
export default function Belief() {
  const settings = {
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    speed: 600,
    responsive: [
      {
        breakpoint: 930,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
        },
      },
    ],
  };
  return (
    <section className="belief new">
      <div className="auto__container">
        <div className="belief__inner">
          <div className="belief__inner-title">
            <h4>Belief in action</h4>
          </div>
          <Slider className="belief__inner-slider" {...settings}>
            {beliefList.map((item, index) => {
              return <BeliefItem {...item} key={index} />;
            })}
          </Slider>
        </div>
      </div>
    </section>
  );
}
const BeliefItem = (props) => {
  return (
    <Link href={props.link} className="beliefItem new">
      <div className="beliefItem__overlay">
        {props?.cards.map((item, index) => {
          return (
            <div className="beliefItem__card" key={index}>
              <h6 className="sup">{item?.title}</h6>
              <h4>{item?.number}</h4>
              <p>{item?.text}</p>
            </div>
          );
        })}
      </div>
      <div className="beliefItem__bg">
        <img src={props.bg} alt="" />
      </div>
      <div className="beliefItem__inner">
        <div className="beliefItem__content">
          <h4>{props.title}</h4>
          <p>{props.text}</p>
          <div className="beliefItem__link">
            <b>READ MORE</b>
            {flashIcon}
          </div>
        </div>
      </div>
    </Link>
  );
};
