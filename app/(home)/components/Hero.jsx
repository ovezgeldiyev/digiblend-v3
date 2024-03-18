"use client";
import { arrowRight, pauseIcon, playIcon } from "@/app/Base/SVG";
import FormattedTitle from "@/app/components/FormattedTitle";
import Link from "next/link";
import React, { useState, useRef } from "react";
import Slider from "react-slick";

export default function Hero({ item }) {
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
    <div className="hero">

      {item?.length > 1 && <RenderArrows sliderRef={slideRef} />}
      <Slider ref={slideRef} className="hero__inner-slider" {...settings}>
        {item.map((el, index) => {
          return <div key={index}>
            <div className="hero__bg">
              <video
                ref={video}
                onEnded={() => setVideoState(false)}
                muted
                loop
                autoPlay
                playsInline
                disablePictureInPicture
                src={el.video?.data?.attributes?.url}
              ></video>
            </div>
            <div className="auto__container">
              <div className="hero__inner">
                <div className="heroSlide">
                  <div className="heroSlide__title">
                    <h1 className="big">
                      <FormattedTitle rawTitle={el.title} />
                    </h1>
                    <p>{el.content}</p>
                  </div>
                  <Link href={el.link.url} className="loadMore">
                    <b>{el.link.label}</b>
                    <div className="loadMore__arrow right">{arrowRight}</div>
                  </Link>
                </div>
              </div>
            </div></div>
        })}
      </Slider>
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
    </div>
  );
}

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
