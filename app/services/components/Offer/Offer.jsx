"use client";
import React, { useState, useEffect } from "react";
import { arrowDown } from "@/app/Base/SVG";
import OfferItem from "./OfferItem";
import Link from "next/link";

export default function Offer({ modul, item, i }) {
  const [modCat, setModCat] = useState([...modul.categories.slice(0, 4)]);
  const [loadMore, setLoadMore] = useState(false);
  const services = item.services.data
  return (
    <section className={"offer " + (i % 2 === 0 ? "" : "uniq")}>
      <div className="auto__container">
        <div className="offer__inner">
          <div className="offer__inner-content">
            <h6 className="sup">{item.subtitle}</h6>
            <h2>{item.title}</h2>
            <p>{item.content}</p>
            <Link href={item.category_link.url} className="button primary stat">
              <span>{item.category_link.label}</span>
            </Link>
          </div>
          <div className="offer__inner-row">
            {services.map((el, index) => {
              return <OfferItem item={el.attributes} service={item.slug} key={index} />;
            })}
          </div>
          {services?.length > 4 && <div
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
          </div>}
        </div>
      </div>
    </section>
  );
}
