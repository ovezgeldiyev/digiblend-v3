"use client";
import { useRef, useState } from "react";
import Link from "next/link";
import Slider from "react-slick/lib/slider";

export default function Cloud({ item }) {
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
        breakpoint: 750,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  };
  const whyUs = item.why_us
  return (
    <>
      <div className="anchor aNav" id={whyUs.subtitle.toLowerCase()}></div>
      <section className="cloud uniq last">
        <div className="auto__container">
          <div className="cloud__inner">
            <div className="cloud__inner-title">
              <h4>{whyUs.title}</h4>
            </div>
            <Slider
              className="cloud__inner-slider"
              {...settings}
              asNavFor={nav2}
              ref={(slider1) => setNav1(slider1)}
            >
              <CloudItem item={whyUs} />
            </Slider>
            <div className="cloud__inner-nav">
              <Slider
                className="cloud__inner-swiper"
                {...settings2}
                asNavFor={nav1}
                ref={(slider2) => setNav2(slider2)}
              >
                {item.why_us_cards?.length > 0 && item.why_us_cards.map((item, index) => {
                  return <CloudCard item={item} key={index} />;
                })}
              </Slider>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
const CloudItem = ({ item }) => {
  const img = item.image?.data?.attributes
  return (
    <div className="cloudItem">
      <div className="cloudItem__inner">
        <div className="cloudItem__bg">
          <img src={img.url} alt={img.name} />
        </div>
        <div className="cloudItem__content">
          <h4 className="uniq">{item.content}</h4>
          <Link href={item.link.url} className="button secondary">
            {item.link.label}
          </Link>
        </div>
      </div>
    </div>
  );
};

const CloudCard = ({ item }) => {
  return (
    <div className="cloudCard">
      <div className="cloudCard__inner">
        <div className="cloudCard__inner-content">
          <h6 className="sup">{item.title}</h6>
          <h4>{item.subtitle}</h4>
          <p>{item.content}</p>
        </div>
      </div>
    </div>
  );
};
