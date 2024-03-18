"use client";
import FadeIn from "@/app/components/FadeIn";
import FormattedTitle from "@/app/components/FormattedTitle";
import React, { useState } from "react";

export default function Action({ item }) {
  const [tab, setTab] = useState(item[0].heading);
  return (
    <section className="action sm">
      <div className="auto__container">
        <div className="action__inner">
          <div className="actionHead">
            <div className="actionHead__row">
              {item?.length > 0 && item.map((el, i) => <div key={i}
                className={
                  "actionHead__item " + (tab === el.heading ? "active" : "")
                }
                onClick={() => setTab(el.heading)}
              >
                <h6>{el.heading}</h6>
              </div>)}
            </div>
          </div>
          {item?.length > 0 && item.map(el => (
            <FadeIn className="action__inner-row" key={el.heading}>
              {el.heading === tab && <>
                <div className="action__inner-content">
                  <h6 className="sup">{el.subtitle}</h6>
                  <h4>
                    <FormattedTitle rawTitle={el.title} />
                  </h4>
                  <p>{el.content}
                  </p>
                </div>
                <div className="action__inner-image-wrapper">
                  <div className="action__inner-image uniq">
                    <img src={el.image?.data?.attributes.url} alt="" />
                  </div>
                </div>
              </>}
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
