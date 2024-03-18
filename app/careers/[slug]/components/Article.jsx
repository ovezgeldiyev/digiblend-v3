"use client";
import { arrowDown } from "@/app/Base/SVG";
import FadeIn from "@/app/components/FadeIn";
import React, { useEffect, useState } from "react";

export default function Article({ item }) {
  useEffect(() => {
    const links = document.querySelectorAll(".articleNav__list-item");
    const sections = document.querySelectorAll(".anchor.aNav");
    function changeLinkState() {
      let index = sections.length;
      while (--index && window.scrollY + 50 < sections[index].offsetTop) {}
      links.forEach((link) => link.classList.remove("active"));
      links[index]?.classList.add("active");
    }
    window.addEventListener("scroll", changeLinkState);
  }, []);
  console.log(item);

  return (
    <>
      <section className="article">
        <div className="auto__container">
          <div className="article__inner">
            <div className="articleNav">
              <div className="articleNav__list">
                <a
                  href={`#${item.job_overview.subtitle.toLowerCase()}`}
                  className="articleNav__list-item active"
                >
                  {item.job_overview.subtitle}
                </a>
                {item.requirements_responsibilities.map((el, i) => (
                  <a
                    href={`#${el.subtitle.toLowerCase()}`}
                    className="articleNav__list-item"
                    key={i}
                  >
                    {el.subtitle}
                  </a>
                ))}
                <a
                  href={`#${item.why_us.subtitle
                    .split(" ")
                    .join("")
                    .toLowerCase()}`}
                  className="articleNav__list-item"
                >
                  {item.why_us.subtitle}
                </a>
              </div>
              <a href={item.apply.link.url} className="button secondary">
                {item.apply.link.label}
              </a>
            </div>
          </div>
        </div>
      </section>
      <div
        className="anchor aNav"
        id={item.job_overview.subtitle.toLowerCase()}
      ></div>
      <FadeIn className="articleItem sm">
        <div className="auto__container">
          <div className="articleItem__inner">
            <h6 className="sup">{item.job_overview.subtitle.toUpperCase()}</h6>
            <h2>{item.job_overview.title}</h2>
            <p>{item.job_overview.content}</p>
          </div>
        </div>
      </FadeIn>
      {item.requirements_responsibilities?.length > 0 &&
        item.requirements_responsibilities.map((item, index) => {
          return <ArticleItem item={item} key={index} />;
        })}
    </>
  );
}
const ArticleItem = ({ item }) => {
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    if (window.innerWidth < 541) {
      setMobile(true);
    } else {
      setMobile(false);
    }
    window.addEventListener("resize", () => {
      if (window.innerWidth < 541) {
        setMobile(true);
      } else {
        setMobile(false);
      }
    });
  }, []);
  const [list, setList] = useState([...item.single_liner.slice(0, 3)]);
  const [loadMore, setLoadMore] = useState(false);
  return (
    <>
      <div className="anchor aNav" id={item.subtitle.toLowerCase()}></div>
      <FadeIn className="articleItem sm">
        <div className="auto__container">
          <div className="articleItem__inner">
            <h6 className="sup">{item.subtitle.toUpperCase()}</h6>
            <h2>{item.title}</h2>
            <p>{item.content}</p>
            {mobile ? (
              <>
                <ul>
                  {list.map((item, index) => {
                    return <li key={index}>{item.text}</li>;
                  })}
                </ul>
                {item.single_liner?.length > 2 && (
                  <div
                    className={"loadMore " + (loadMore ? "up" : "down")}
                    onClick={() => {
                      if (loadMore) {
                        setLoadMore(false);
                        setList(item.single_liner.slice(0, 3));
                      } else {
                        setLoadMore(true);
                        setList(item.single_liner);
                      }
                    }}
                  >
                    <b>{!loadMore ? "Load More" : "Show less"}</b>
                    <div
                      className={
                        "loadMore__arrow " + (loadMore ? "active" : "")
                      }
                    >
                      {arrowDown}
                    </div>
                  </div>
                )}
              </>
            ) : (
              <ul>

                {item.single_liner.map((item, index) => {
                  return <li key={index}>{item.text}</li>;
                })}
              </ul>
            )}
          </div>
        </div>
      </FadeIn>
    </>
  );
};
