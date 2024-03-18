"use client";
import { useRef, useState } from "react";
import Link from "next/link";
import Slider from "react-slick/lib/slider";
const cloudItems = [
  {
    id: "1",
    step: "STAP 1",
    uptitle: "1. INTAKE",
    bg: "/images/cloud/3.jpg",
    slogan:
      "We luisteren, evalueren en stellen strategieën vast om uw specifieke doelstellingen te verwezenlijken.",
    link: "/contact",
    btn: "Plan gesprek",
  },
  {
    id: "2",
    step: "STAP 2",
    uptitle: "2. ACTION",

    bg: "/images/cloud/1.jpg",
    slogan:
      "We luisteren, evalueren en stellen strategieën vast om uw specifieke doelstellingen te verwezenlijken.",
    link: "/services",
    btn: "Our Services",
  },
  {
    id: "3",
    step: "STAP 3",
    uptitle: "3. DELIVER",

    bg: "/images/cloud/2.jpg",
    slogan:
      "Cloud and AI take center stage: global study reveals unwavering priority amid challenges",
    link: "",
    btn: "",
  },
  {
    id: "4",
    step: "STAP 4",
    uptitle: "4. INNOVATE",

    bg: "/images/cloud/4.jpg",
    slogan:
      "Cloud and AI take center stage: global study reveals unwavering priority amid challenges",
    link: "/insights",
    btn: "Insights",
  },
];
const cloudCards = [
  {
    id: "1",
    step: "STAP 1",
    title: "INTAKE",
    text: "We luisteren om uw behoeften en doelen te begrijpen.",
  },
  {
    id: "2",
    step: "STAP 2",
    title: "ACTIE",
    text: "We nemen concrete stappen om uw doelen te bereiken.",
  },
  {
    id: "3",
    step: "STAP 3",
    title: "OPLEVERING",
    text: "We leveren oplossingen die in lijn zijn met uw behoeften.",
  },
  {
    id: "4",
    step: "STAP 4",
    title: "INNOVATIE",
    text: "We blijven continu leren en aanpassen om verdere groei te stimuleren.",
  },
];
export default function Cloud() {
  const slider1 = useRef(null);
  const slider2 = useRef(null);
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();
  const settings = {
    dots: false,
    infinite: false,
    loop: false,
    arrows: false,
    speed: 400,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: slider1.current,
    responsive: [
      {
        breakpoint: 750,
        settings: {
          dots: true,
        },
      },
    ],
  };

  const settings2 = {
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: false,
    dots: false,
    arrows: false,
    loop: false,
    speed: 400,
    centerMode: false,
    focusOnSelect: true,
    asNavFor: slider2.current,
    responsive: [
      {
        breakpoint: 240,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };
  return (
    <section className="cloud ex mobRem">
      <div className="auto__container">
        <div className="cloud__inner">
          <div className="cloud__inner-title">
            <h4>Het draait niet om ons</h4>
          </div>
          <Slider
            className="cloud__inner-slider"
            {...settings}
            asNavFor={nav2}
            ref={(slider1) => setNav1(slider1)}
          >
            {cloudItems.map((item, index) => {
              return <CloudItem {...item} key={index} />;
            })}
          </Slider>
          <div className="cloud__inner-nav">
            <Slider
              className="cloud__inner-swiper"
              {...settings2}
              asNavFor={nav1}
              ref={(slider2) => setNav2(slider2)}
            >
              {cloudCards.map((item, index) => {
                return <CloudCard {...item} key={index} />;
              })}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
}
const CloudItem = (props) => {
  return (
    <div className="cloudItem sm">
      <div className="cloudItem__inner">
        <div className="cloudItem__bg">
          <img src={props.bg} alt="" />
        </div>
        <div className="cloudItem__content">
          <div className="cloudItem__title">
            <div className="cloudItem__step">
              <b>{props.step}</b>
            </div>
            <h4>{props.uptitle}</h4>
          </div>
          <h4 className="sm">{props.slogan}</h4>
          {props.btn !== "" && (
            <Link href={props.link} className="button secondary">
              {props.btn}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

const CloudCard = (props) => {
  return (
    <div className="cloudCard">
      <div className="cloudCard__step">
        <b>{props.step}</b>
      </div>
      <div className="cloudCard__inner">
        <div className="cloudCard__inner-content">
          <h6>{props.title}</h6>
          <p>{props.text}</p>
        </div>
      </div>
    </div>
  );
};
