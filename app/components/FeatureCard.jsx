'use client';
import React, { useEffect, useState } from 'react'
import { arrowDown } from "@/app/Base/SVG";

const FeatureCard = ({ item }) => {
  const [list, setList] = useState([...item.single_liner]);
  const [loadMore, setLoadMore] = useState(false);
  useEffect(() => {
    if (window.innerWidth < 541) {
      setList([...item.single_liner.slice(0, 3)]);
    } else {
      setList([...item.single_liner]);
    }
    window.addEventListener("resize", () => {
      if (window.innerWidth < 541) {
        setList([...item.single_liner.slice(0, 3)]);
      } else {
        setList([...item.single_liner]);
      }
    });
  }, []);
  return (
    <section className="benefits uniq">
      <div className="auto__container">
        <div className="benefits__inner">
          <div className="benefits__inner-title">
            <h6 className="sup">{item.subtitle}</h6>
            <h2>{item.title}</h2>
          </div>
          <ul>
            {list?.length > 0 && list.map((item, index) => {
              return <li key={index}>{item.text}</li>;
            })}
          </ul>
          <div className="benefits__inner-foot">
            <div
              className={"loadMore " + (loadMore ? "up" : "down")}
              onClick={() => {
                if (loadMore) {
                  setLoadMore(false);
                  setList([...item.single_liner.slice(0, 3)]);
                } else {
                  setLoadMore(true);
                  setList([...item.single_liner]);
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
  )
}

export default FeatureCard