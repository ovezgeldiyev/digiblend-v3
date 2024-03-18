"use client";
import React, { useState, useEffect } from "react";
import { arrowDown } from "@/app/Base/SVG";
import OfferItem from "./OfferItem";

export default function Offer({ modul}) {
  const [modCat, setModCat] = useState([...modul.categories.slice(0, 4)]);
  const [loadMore, setLoadMore] = useState(false);

  return (
    <section className={"offer " + (modul.status ? "" : "uniq")}>
      <div className="auto__container">
        <div className="offer__inner">
          <div className="offer__inner-content">
            <h6 className="sup">{modul?.uptitle}</h6>
            <h2>{modul?.title}</h2>
            <p>{modul?.text}</p>
            <a href={modul?.link} className="button primary stat">
              <span>Discover Solutions</span>
            </a>
          </div>
          <div className="offer__inner-row">
            {modCat.map((item, index) => {
              return <OfferItem {...item} key={index} />;
            })}
          </div>
          <div
            className={"loadMore " + (loadMore ? "up" : "down")}
            onClick={() => {
              if (loadMore) {
                setLoadMore(false);
                setModCat(modul.categories.slice(0, 4));
              } else {
                setLoadMore(true);
                setModCat(modul.categories);
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
    </section>
  );
}
