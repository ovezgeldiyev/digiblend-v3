"use client";
import { arrowDown } from "@/app/Base/SVG";
import FadeIn from "@/app/components/FadeIn";
import React, { useEffect, useState } from "react";

export default function Article({ item }) {
  const [activeLink, setActiveLink] = useState("overview");
  useEffect(() => {
    function handleScroll() {
      const sections = document.querySelectorAll(".anchor.head");

      let index = sections.length;
      while (--index && window.scrollY + 50 < sections[index].offsetTop) { }

      setActiveLink(sections[index].id);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <section className="article">
        <div className="auto__container">
          <div className="article__inner">
            <div className="articleHead">
              <div className="articleHead__row">
                {item?.length > 0 && item.map((el) => (
                  <a
                    key={el.title}
                    href={`#${el.title.toLowerCase()}`}
                    className={`articleHead__item ${activeLink === el.title.toLowerCase() ? "active" : ""
                      }`}
                    onClick={() => setActiveLink(el.title.toLowerCase())}
                  >
                    {el.title}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {item?.length > 0 && item.map((item, index) => {
        return <ArticleItem item={item} key={index} />;
      })}
    </>
  );
}
const ArticleItem = ({ item }) => {
  const [loadMore, setLoadMore] = useState(false);
  return (
    <>
      <div className="anchor head" id={item.title.toLowerCase()}></div>
      <FadeIn className="articleItem">
        <div className="auto__container">
          <div className="articleItem__inner">
            <h6 className="sup">{item.title.toUpperCase()}</h6>
            <h2>{item.subtitle}</h2>
            <p>{item.content}</p>
            <div className="articleItem__inner-foot">
              <div
                className={"loadMore " + (loadMore ? "up" : "down")}
                onClick={() => {
                  if (loadMore) {
                    setLoadMore(false);
                  } else {
                    setLoadMore(true);
                  }
                }}
              >
                <b>{!loadMore ? "Load More" : "Show less"}</b>
                <div
                  className={"loadMore__arrow " + (loadMore ? "active" : "")}
                >
                  {arrowDown}
                </div>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>
    </>
  );
};
