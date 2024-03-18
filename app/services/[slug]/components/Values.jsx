'use client';
import React, { useEffect, useState } from "react";
import { arrowDown, arrowRight } from "@/app/Base/SVG";
import Link from "next/link";
import Slider from "react-slick/lib/slider";

export default function Values({ title, services, slug }) {
  const [valuesArr, setValuesArr] = useState([...services.slice(0, 3)]);
  const [loadMore, setLoadMore] = useState(false);
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    if (window.innerWidth < 651) {
      setMobile(true);
    } else {
      setMobile(false);
    }
    window.addEventListener("resize", () => {
      if (window.innerWidth < 651) {
        setMobile(true);
      } else {
        setMobile(false);
      }
    });
  }, []);

  const settings = {
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
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
          dots: false,
        },
      },
    ],
  };
  return (
    <section className="values slid">
      <div className="auto__container">
        <div className="values__inner">
          <div className="values__inner-title">
            <h4>{title}</h4>
          </div>
          {mobile ? (
            <div className="values__inner-row">
              {valuesArr.map((item, index) => {
                return <ValuesItem item={item.attributes} key={index} slug={slug} />;
              })}
            </div>
          ) : (
            <Slider className="values__inner-slider" {...settings}>
              {services.map((item, index) => {
                return <ValuesItem item={item.attributes} key={index} slug={slug} />;
              })}
            </Slider>
          )}

          <div className="values__inner-foot">
            <div
              className={"loadMore " + (loadMore ? "up" : "down")}
              onClick={() => {
                if (loadMore) {
                  setLoadMore(false);
                  setValuesArr(services.slice(0, 3));
                } else {
                  setLoadMore(true);
                  setValuesArr(services);
                }
              }}
            >
              <b>{!loadMore ? "Load More" : "Show less"}</b>
              <div className={"loadMore__arrow " + (loadMore ? "active" : "")}>
                {arrowDown}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
const ValuesItem = ({ item, slug }) => {
  return (
    <Link href={`/services/${slug}/${item.slug}`} className="valuesItem">
      <div className="valuesItem__inner">
        <div className="valuesItem__content">
          <h3>{item.title}</h3>
          <p>{item.excerpt}</p>
          <div className="loadMore">
            <b>Learn More</b>
            <div className="loadMore__arrow right">{arrowRight}</div>
          </div>
        </div>
      </div>
    </Link>
  );
};
