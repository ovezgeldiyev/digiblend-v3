import React, { useEffect, useState } from "react";
import Slider from "react-slick/lib/slider";
const placesList = [
  {
    id: "1",
    number: "2",
    title: "Plekken",
    text: "Wij ondersteunen een maximaal aantal klanten per sector en regio.",
  },
  {
    id: "2",
    number: "50K",
    title: "Leads",
    text: "Bewijs van ons succes bij het verbinden van bedrijven met hun potentiële klanten.",
  },
];

export default function Places() {
  const settings = {
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    speed: 600,

  };
  return (
    <section className="places">
      <div className="auto__container">
        <div className="places__inner">
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
      <div className="placesItem__title">
        <h4>{props.number}</h4>
        <h6>{props.title}</h6>
      </div>
      <p>{props.text}</p>
    </div>
  );
};
