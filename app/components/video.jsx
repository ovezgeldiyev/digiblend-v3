"use client";
import React, { useRef, useState } from "react";
import { playIcon } from "@/app/Components/Base/SVG";

export default function AssetVideo(props) {
  const video = useRef(null);
  const [videoState, setVideoState] = useState(false);
  const playBtnClick = () => {
    video?.current?.play();
    setVideoState(true);
  };
  const pauseBtnClick = () => {
    video?.current?.pause();
    setVideoState(false);
  };
  return (
    <div className={"assets__media vid " + (videoState ? "active" : "")}>
      <video
        ref={video}
        src={process.env.PUBLIC_URL + props.asset}
        muted
        loop
        autoPlay
        playsInline
        disablePictureInPicture
        onEnded={() => setVideoState(false)}
      ></video>
      <button className="button play" onClick={playBtnClick}>
        {playIcon}
      </button>
      <button className="button pause" onClick={pauseBtnClick}></button>
    </div>
  );
}
