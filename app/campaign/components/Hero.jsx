"use client";
import { arrowRight, checkIcon, pauseIcon, playIcon } from "@/app/Base/SVG";
import Link from "next/link";
import React, { useState, useRef } from "react";
import Slider from "react-slick";
const sliderList = [
  {
    id: "1",
    bg: "/images/hero/4.mp4",
    title: (
      <>
        Meer cliënten, voor <br /> uw advocaten <br /> kantoor
      </>
    ),
    text: "Wij helpen ambitieuze advocatenkantoren aan meer cliënten. Onze expertise ligt in het genereren van leads en het verbeteren van de online zichtbaarheid van uw advocaten praktijk.",
  },
];
export default function Hero() {
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
    <div className="hero nonSlide new">
      <RenderArrows sliderRef={slideRef} />
      <Slider ref={slideRef} className="hero__inner-slider" {...settings}>
        {sliderList.map((item, index) => {
          return <SliderItem {...item} key={index} />;
        })}
      </Slider>
    </div>
    
  );
}
const SliderItem = (props) => {
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
          src={props.bg}
        ></video>
      </div>
      <div className="auto__container">
        <div className="hero__inner">
          <div className="heroSlide">
            <div className="heroSlide__row">
              <div className="heroSlide__side">
                <div className="heroSlide__title">
                  <h1>{props.title}</h1>
                  <p>{props.text}</p>
                </div>
                <div className="heroContact">
                  <div className="input">
                    <input type="tel" placeholder="Telefoon*" />
                    <button type="submit">Meer info</button>
                  </div>
                </div>
                <ul>
                  <li>
                    <span>
                      <img src="./images/icons/check.svg" alt="" />
                    </span>
                    Direct meer leads
                  </li>
                  <li>
                    <span>
                      <img src="./images/icons/check.svg" alt="" />
                    </span>
                    Betere online zichtbaarheid
                  </li>
                  <li>
                    <span>
                      <img src="./images/icons/check.svg" alt="" />
                    </span>
                    Meetbaar resultaat
                  </li>
                  <li>
                    <span>
                      <img src="./images/icons/check.svg" alt="" />
                    </span>
                    Beperkt aantal klantplekken
                  </li>
                </ul>
              </div>
              <div className="heroForm">
                <div className="heroForm__title">
                  <h5>
                    Wij ondersteunen een maximaal aantal klanten per sector &
                    regio. Er zijn nog <span>2 plekken </span> beschikbaar.
                  </h5>
                </div>
                <div className="heroForm__row">
                  <label className="input__outer sm">
                    <h6>Voornaam*</h6>
                    <div className="input">
                      <input type="text" placeholder="Hidde" />
                    </div>
                  </label>
                  <label className="input__outer sm">
                    <h6>Achternaam*</h6>
                    <div className="input">
                      <input type="text" placeholder="Basten" />
                    </div>
                  </label>
                  <label className="input__outer">
                    <h6>Emailadres*</h6>
                    <div className="input">
                      <input
                        type="email"
                        placeholder="hidde@vanbruggenadvocaten.nl"
                      />
                    </div>
                  </label>
                  <label className="input__outer">
                    <h6>Telefoon*</h6>
                    <div className="input">
                      <input type="tel" placeholder="+31 123 456 7894" />
                    </div>
                  </label>
                  <label className="input__outer">
                    <h6>Naam Advocatenkantoor*</h6>
                    <div className="input">
                      <input type="text" placeholder="Van Bruggen Advocaten" />
                    </div>
                  </label>
                </div>
                <div className="heroForm__foot">
                  <label className="check">
                    <div className="check__box">
                      <input type="checkbox" />
                      <span>{checkIcon}</span>
                    </div>
                    <p>
                      Ik ga ermee akkoord dat Digiblend mijn verstrekte
                      persoonlijke informatie gebruikt om contact met mij op te
                      nemen.
                    </p>
                  </label>
                  <button type="button" className="button primary">
                    <span>Ik ontvang graag meer informatie</span>
                    {arrowRight}
                  </button>
                </div>
              </div>
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
