"use client";
import { pauseIcon, playIcon } from "@/app/Base/SVG";
import Breadcrumb from "@/app/components/Breadcrumb";
import Link from "next/link";
import React, { useState, useRef } from "react";
import Slider from "react-slick";

export default function Hero({ item }) {
  const slideRef = useRef(null);
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    speed: 600,
    fade: true,
  };
  return (
    <div className="hero nonSlide">
      <RenderArrows sliderRef={slideRef} />
      <Slider ref={slideRef} className="hero__inner-slider" {...settings}>
        <SliderItem item={item} />
      </Slider>
    </div>
  );
}
const SliderItem = ({ item }) => {
  const video = useRef(null);
  const [videoState, setVideoState] = useState(true);
  const playBtnClick = () => {
    video?.current?.play();
    setVideoState(true);
  };
  const pauseBtnClick = () => {
    video?.current?.pause();
    setVideoState(false);
  };
  const media = item.article?.video?.data?.attributes
  return (
    <>
      <div className="hero__bg second">
        <video
          ref={video}
          onEnded={() => setVideoState(false)}
          muted
          loop
          autoPlay
          playsInline
          disablePictureInPicture
          src={media.url}
        ></video>
      </div>
      <div className="auto__container">
        <div className="hero__inner">
          <div className="hero__inner-nav">
            <Breadcrumb array={item.article.breadcrumb} />
          </div>
          <div className="heroSlide">
            <div className="heroSlide__title">
              <h1 className="big">
                <Link href={item.article.link.url}>
                  {item.excerpt}
                </Link>
              </h1>
            </div>
          </div>
        </div>
      </div>
      {videoState ? (
        <div className="player" onClick={pauseBtnClick}>
          <div className="player__icon">{pauseIcon}</div>
          <b>Pause</b>
        </div>
      ) : (
        <div className="player" onClick={playBtnClick}>
          <div className="player__icon">{playIcon}</div>
          <b>Play</b>
        </div>
      )}
    </>
  );
};
const RenderArrows = ({ sliderRef }) => {
  return (
    <div className="slider-arrow">
      <div className="slider-arrow-before"></div>
      <button
        className="arrow-btn prev"
        onClick={() => sliderRef?.current?.slickPrev()}
      ></button>
      <button
        className="arrow-btn next"
        onClick={() => sliderRef?.current?.slickNext()}
      ></button>
    </div>
  );
};
