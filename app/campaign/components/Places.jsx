import React, { useEffect, useState } from "react";
import Slider from "react-slick/lib/slider";
const placesList = [
  {
    id: "1",
    icon: "/images/places/1.svg",
    title: "Meer Cliënten",
    text: "Met onze gerichte strategieën vergroten we de klantacquisitie, verbeteren we uw klantenbasis en stimuleren we uw omzet.",
  },
  {
    id: "2",
    icon: "/images/places/2.svg",
    title: "Online Zichtbaarheid",
    text: "Uw merk zal opvallen in het digitale landschap dankzij onze zorgvuldig uitgevoerde, opvallende campagnes.",
  },
  {
    id: "3",
    icon: "/images/places/3.svg",
    title: "Meetbaar resultaat",
    text: "Met onze geavanceerde tools, maken we de impact en groei van onze strategieën meetbaar en traceerbaar.",
  },
  {
    id: "4",
    icon: "/images/places/4.svg",
    title: "Innovatie",
    text: "Ons streven naar innovatie verzekert uw bedrijf van de nieuwste digitale trends, zodat u voorop blijft lopen in uw branche.",
  },
];

export default function Places() {
  const settings = {
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    speed: 600,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 840,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 540,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className="places">
      <div className="auto__container">
        <div className="places__inner">
          <div className="places__inner-title">
            <h4>Uw partner in tech-enabled bedrijfsgroei</h4>
          </div>
          <Slider className="places__inner-slider" {...settings}>
            {placesList.map((item, index) => {
              return <PlacesItem {...item} key={index} />;
            })}
          </Slider>
        </div>
      </div>
    </section>
  );
}
const PlacesItem = (props) => {
  return (
    <div className="placesItem">
      <div className="placesItem__icon">
        <img src={props.icon} alt="" />
      </div>
      <h6>{props.title}</h6>
      <p>{props.text}</p>
    </div>
  );
};
