"use client";
import React, { useState, useEffect } from "react";
import { arrowDown } from "@/app/Base/SVG";
import OfferItem from "./OfferItem";
import Link from "next/link";

export default function Offer({ modul, item, categories }) {
  const [modCat, setModCat] = useState([...modul.categories.slice(0, 4)]);
  const [loadMore, setLoadMore] = useState(false);
  // const services = item.services.data
  // console.log(categories)
  return (
    <section className={"offer "}>
      <div className="auto__container">
        <div className="offer__inner">
          <div className="offer__inner-content">
            <h6 className="sup">{item.service_section_subtitle}</h6>
            <h2>{item.service_section_title}</h2>
            <p>{item.service_section_excerpt}</p>
            <Link href={item.service_section_link.url} className="button primary stat">
              <span>{item.service_section_link.label}</span>
            </Link>
          </div>
          <div className="offer__inner-row">
            {categories.map((el, index) => {
              return <OfferItem item={el.attributes} service={item.slug} key={index} />;
            })}
          </div>
          {categories?.length > 4 && <div
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
