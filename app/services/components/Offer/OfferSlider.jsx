"use client";
import OfferItem from "./OfferItem";
import Slider from "react-slick/lib/slider";
import React, { useState, useEffect } from "react";

export default function OfferSlider({ modul }) {
  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: false,
    arrows: false,
    dots: true,
  };
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    if (window.innerWidth < 540) {
      setMobile(true);
    } else {
      setMobile(false);
    }
    window.addEventListener("resize", () => {
      if (window.innerWidth < 540) {
        setMobile(true);
      } else {
        setMobile(false);
      }
    });
  }, []);
  return (
    <section className={"offer sm " + (modul.status ? "" : "uniq")}>
      <div className="auto__container">
        <div className="offer__inner">
          <div className="offer__inner-content">
            <h6 className="sup">
              {mobile ? modul?.uptitleMob : modul?.uptitle}
            </h6>
            <h2>{modul?.title}</h2>
            <p>{modul?.text}</p>
            <a href={modul?.link} className="button primary">
              <span>{mobile ? modul?.btnMob : modul?.uptitle}</span>
            </a>
          </div>
          <div className="offer__inner-row">
            <Slider {...settings}>
              {modul?.categories?.map((item, index) => {
                return <OfferItem {...item} key={index} />;
              })}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
}
