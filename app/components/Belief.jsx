'use client';
import React from "react";
import Slider from "react-slick";
import { bookIcon } from "@/app/Base/SVG";
import Link from "next/link";

const beliefList = [
  {
    id: "1",
    link: "insights/cases/our-law-firms-success-story",
    title: "A 240% Lead Surge: Our Law Firm's Success Story",
    text: "How our marketing campaigns boosted a Law Firm's leads by 240%",
    bg: "/images/belief/1.jpg",
  },
  {
    id: "2",
    link: "insights/cases/our-law-firms-success-story",
    title: "€280K Prospects: Garment Industry Disruption",
    text: "Prospecting high quality leads with our Marketing Automation strategy.",
    bg: "/images/belief/2.jpg",
  },
  {
    id: "3",
    link: "insights/cases/our-law-firms-success-story",
    title: "A 240% Lead Surge: Our Law Firm's Success Story",
    text: "How our marketing campaigns boosted a Law Firm's leads by 240%",
    bg: "/images/belief/3.jpg",
  },
  {
    id: "4",
    link: "insights/cases/our-law-firms-success-story",
    title: "A 240% Lead Surge: Our Law Firm's Success Story",
    text: "How our marketing campaigns boosted a Law Firm's leads by 240%",
    bg: "/images/belief/4.jpg",
  },
];
export default function Belief({ title, cases }) {
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
    <section className="belief">
      <div className="auto__container">
        <div className="belief__inner">
          <div className="belief__inner-title">
            <h4>{title}</h4>
          </div>
          <Slider className="belief__inner-slider" {...settings}>
            {cases?.length > 0 && cases.map((item, index) => {
              return <BeliefItem item={item} key={index} />;
            })}
          </Slider>
        </div>
      </div>
    </section>
  );
}
const BeliefItem = ({ item }) => {
  const el = item.attributes
  const img = el.case.image?.data?.attributes
  return (
    <Link href={el.case.link.url} className="beliefItem">
      <div className="beliefItem__bg">
        <img src={img.url} alt={img.name} />
      </div>
      <div className="beliefItem__inner">
        <div className="beliefItem__content">
          <h4>{el.title}</h4>
          <p>{el.excerpt}</p>
          <div className="beliefItem__link">
            <b>READ MORE</b>
            {bookIcon}
          </div>
        </div>
      </div>
    </Link>
  );
};
