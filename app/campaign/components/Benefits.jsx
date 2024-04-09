import { arrowDown } from "@/app/Base/SVG";
import React, { useEffect, useState } from "react";

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
    <section className={"benefits sm " + (props.status ? "" : "uniq")}>
      <div className="auto__container">
        <div className="benefits__inner">
          <div className="benefits__inner-title">
            <h6 className="sup">{props.uptitle}</h6>
            <h2>{props.title}</h2>
          </div>
          <ul className="sm">
            {list.map((item, index) => {
              return (
                <li key={index} className="benefitsItem">
                  <div className="benefitsItem__head">
                    <span>
                      <img src="/images/icons/check-circle.svg" alt="" />
                    </span>
                    <h6>{item.text}</h6>
                    <h6 className="mob">{item.mobText}</h6>
                  </div>
                  <div className="benefitsItem__body">
                    <p>
                      Met onze gerichte strategieën vergroten we de
                      klantacquisitie, verbeteren we uw klantenbasis en
                      stimuleren we uw omzet.
                    </p>
                  </div>
                </li>
              );
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
              <b>{!loadMore ? "Alles tonen" : "Laat minder zien"}</b>
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
