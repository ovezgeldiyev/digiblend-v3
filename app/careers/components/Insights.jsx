"use client";
import { arrowDown } from "@/app/Base/SVG";
import Link from "next/link";
import React, { useState, useEffect } from "react";

export default function Insights({ careers }) {
  const groupedData = careers.reduce((acc, item) => {
    const department = item.attributes.department;
    if (acc[department]) {
      acc[department].push(item);
    } else {
      acc[department] = [item];
    }
    return acc;
  }, {});

  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setMobile(window.innerWidth < 540);
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const [loadMore, setLoadMore] = useState({});

  const handleLoadMore = (category) => {
    setLoadMore((prev) => {
      return {
        ...prev,
        [category]: !prev[category],
      };
    });
  };

  return (
    <section className="insights">
      <div className="auto__container">
        <div className="insights__inner">
          {Object.keys(groupedData).map((department) => {
            const insights = groupedData[department];
            const loadMoreState = loadMore[department] || false;
            return (
              <div className="insights__inner-wrapper" key={department}>
                <div className="insights__inner-title">
                  <h4>{department}</h4>
                </div>
                <div className="insights__inner-row">
                  {insights
                    .slice(0, mobile ? (loadMoreState ? insights.length : 3) : loadMoreState ? insights.length : 4)
                    .map((item, index) => {
                      return (
                        <InsightsItem
                          key={index}
                          {...item.attributes}
                        />
                      );
                    })}
                </div>
                <div className="insights__inner-foot">
                  {insights.length > (mobile ? 3 : 4) && (
                    <div
                      className={"loadMore " + (loadMoreState ? "up" : "down")}
                      onClick={() => {
                        handleLoadMore(department);
                      }}
                    >
                      <b>{!loadMoreState ? "Load More" : "Show less"}</b>
                      <div className={"loadMore__arrow " + (loadMoreState ? "active" : "")}>{arrowDown}</div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
const InsightsItem = (props) => {
  const img = props.image?.data?.attributes
  return (
    <Link href={`/careers/${props.slug}`} className="insightsItem">
      <div className="insightsItem__image">
        <img src={img.url} alt={img.name} />
      </div>
      <div className="insightsItem__content">
        <h6 className="sup">{props.department}</h6>
        <h5>{props.title}</h5>
        <div className="insightsItem__info">
          <p>{props.position}</p>
          <hr />
          <p>{props.location}</p>
        </div>
      </div>
    </Link>
  );
};
