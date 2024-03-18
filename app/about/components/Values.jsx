"use client";
import React, { useState } from "react";
import { arrowDown } from "@/app/Base/SVG";
import Link from "next/link";

export default function Values({ title, values }) {
  const [valuesArr, setValuesArr] = useState([...values.slice(0, 3)]);
  const [loadMore, setLoadMore] = useState(false);

  return (
    <section className="values uniq">
      <div className="auto__container">
        <div className="values__inner">
          <div className="values__inner-title">
            <h4>{title}</h4>
          </div>
          <div className="values__inner-row">
            {valuesArr.map((item, index) => {
              return <ValuesItem item={item} key={index} />;
            })}
          </div>
          <div className="values__inner-foot">
            <div
              className={"loadMore " + (loadMore ? "up" : "down")}
              onClick={() => {
                if (loadMore) {
                  setLoadMore(false);
                  setValuesArr(values.slice(0, 3));
                } else {
                  setLoadMore(true);
                  setValuesArr(values);
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
const ValuesItem = ({ item }) => {
  return (
    <Link href="" className="valuesItem big">
      <div className="valuesItem__inner">
        <div className="valuesItem__content">
          <h3>{item.title}</h3>
          <p>{item.content}</p>
        </div>
      </div>
    </Link>
  );
};
