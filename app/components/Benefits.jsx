"use client";
import React, { useEffect, useState } from "react";
import { arrowDown } from "@/app/Base/SVG";

export default function Benefits(props) {
  const [list, setList] = useState([...props.list]);
  const [loadMore, setLoadMore] = useState(false);
  useEffect(() => {
    if (window.innerWidth < 541) {
      setList([...props.list.slice(0, 3)]);
    } else {
      setList([...props.list]);
    }
    window.addEventListener("resize", () => {
      if (window.innerWidth < 541) {
        setList([...props.list.slice(0, 3)]);
      } else {
        setList([...props.list]);
      }
    });
  }, []);
  return (
    <section className={"benefits " + (props.status ? "" : "uniq")}>
      <div className="auto__container">
        <div className="benefits__inner">
          <div className="benefits__inner-title">
            <h6 className="sup">{props.uptitle}</h6>
            <h2>{props.title}</h2>
          </div>
          <ul>
            {list.map((item, index) => {
              return <li key={index}>{item.text}</li>;
            })}
          </ul>
          <div className="benefits__inner-foot">
            <div
              className={"loadMore " + (loadMore ? "up" : "down")}
              onClick={() => {
                if (loadMore) {
                  setLoadMore(false);
                  setList([...props.list.slice(0, 3)]);
                } else {
                  setLoadMore(true);
                  setList([...props.list]);
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
