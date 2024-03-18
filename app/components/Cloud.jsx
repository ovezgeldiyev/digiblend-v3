"use client";
import { useRef, useState } from "react";
import Link from "next/link";
import Slider from "react-slick/lib/slider";
const cloudItems = [
  {
    id: "1",
    bg: "/images/cloud/7.jpg",
    slogan:
      "Cloud and AI take center stage: global study reveals unwavering priority amid challenges",
    link: "insights/articles/cloud-ai",
    btn: "Learn More",
  },
  {
    id: "2",
    bg: "/images/cloud/2.jpg",
    slogan:
      "We listen, analyze, and strategize to understand your unique needs and goals.",
    link: "insights/articles/cloud-ai",
    btn: "Learn More",
  },
  {
    id: "3",
    bg: "/images/cloud/3.jpg",
    slogan:
      "Cloud and AI take center stage: global study reveals unwavering priority amid challenges",
    link: "insights/articles/cloud-ai",
    btn: "Learn More",
  },
  {
    id: "4",
    bg: "/images/cloud/4.jpg",
    slogan:
      "Cloud and AI take center stage: global study reveals unwavering priority amid challenges",
    link: "insights/articles/cloud-ai",
    btn: "Learn More",
  },
];
const cloudCards = [
  {
    id: "1",
    title: "AI & CLOUD",
    text: "Global study: cloud & AI thrive amid challenges",
  },
  {
    id: "2",
    title: "GOOGLE ANALYTICS",
    text: "Mastering insights: Dive deeper with Google Analytics",
  },
  {
    id: "3",
    title: "HEADLESS CMS",
    text: "Revolutionizing the Management and Creation of content",
  },
  {
    id: "4",
    title: "USABILITY TESTING",
    text: "Improving UX Through User Feedback",
  },
];
export default function Cloud({ title, articles }) {
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
    <section className="cloud">
      <div className="auto__container">
        <div className="cloud__inner">
          <div className="cloud__inner-title">
            <h4>{title}</h4>
          </div>
          <Slider
            className="cloud__inner-slider"
            {...settings}
            asNavFor={nav2}
            ref={(slider1) => setNav1(slider1)}
          >
            {articles?.length > 0 && articles.map((item, index) => {
              return <CloudItem item={item} key={index} />
            })}
          </Slider>
          <div className="cloud__inner-nav">
            <Slider
              className="cloud__inner-swiper"
              {...settings2}
              asNavFor={nav1}
              ref={(slider2) => setNav2(slider2)}
            >
              {articles?.length > 0 && articles.map((item, index) => {
                return <CloudCard item={item} key={index} />
              })}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
}
const CloudItem = ({ item }) => {
  const el = item.attributes
  const img = el.article.image.data.attributes

  return (
    <div className="cloudItem">
      <div className="cloudItem__inner">
        <div className="cloudItem__bg">
          <img src={img.url} alt={img.name} />
        </div>
        <div className="cloudItem__content">
          <h4>{el.excerpt}</h4>
          <Link href={el.article.link.url} className="button secondary">
            {el.article.link.label}
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
          <h6>{item.attributes.title}</h6>
          <p>{item.attributes.subtitle}</p>
        </div>
      </div>
    </div>
  );
};
