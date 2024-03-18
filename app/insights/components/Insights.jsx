"use client";
import { arrowDown, arrowRight } from "@/app/Base/SVG";
import { getInsightsList } from "@/app/lib/endpoints";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function Insights({ title, insights }) {
  // const [modul, setModul] = useState([...insights.slice(0, 16)]);
  const [modul, setModul] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [mobile, setMobile] = useState(false);
  const [loadMore, setLoadMore] = useState(false);
  const [loading, setLoading] = useState(true)

  // useEffect(() => {
  //   if (window.innerWidth < 540) {
  //     setMobile(true);
  //     setModul([...modul.slice(0, 3)]);
  //     setCurrentPage(1);
  //   } else {
  //     setMobile(false);
  //     setModul([...modul.slice(0, 16)]);
  //     setCurrentPage(1);
  //   }
  //   window.addEventListener("resize", () => {
  //     if (window.innerWidth < 540) {
  //       setMobile(true);
  //       setModul([...modul.slice(0, 3)]);
  //       setCurrentPage(1);
  //     } else {
  //       setMobile(false);
  //       setModul([...modul.slice(0, 16)]);
  //       setCurrentPage(1);
  //     }
  //   });
  // }, []);

  // useEffect(() => {
  //   getInsightsList().then(result => {
  //     setModul(result)
  //     setLoading(false)
  //   })
  // }, [])
  useEffect(() => {
    getInsightsList().then(result => {
      setModul(result);
      setLoading(false);
      if (window.innerWidth < 540) {
        setMobile(true);
      } else {
        setMobile(false);
      }
    });

    const handleResize = () => {
      if (window.innerWidth < 540) {
        setMobile(true);
      } else {
        setMobile(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const itemsPerPage = mobile ? 3 : 16;
  const totalPages = Math.ceil(modul.length / itemsPerPage);

  const handlePageChange = (newPage) => {
    const startIndex = (newPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    setModul(modul.slice(startIndex, endIndex));
    setCurrentPage(newPage);
  };


  return loading ? <h3 className="loading_spinner">Loading...</h3> : (
    <section className="insights">
      <div className="auto__container">
        <div className="insights__inner">
          <div className="insights__inner-title">
            <h4>{title}</h4>
          </div>
          <div className="insights__inner-row">
            {modul.map((item, index) => {
              return <InsightsItem {...item} key={index} />;
            })}
          </div>
          <div className="insights__inner-foot">
            {mobile ? (
              <div
                className={"loadMore " + (loadMore ? "up" : "down")}
                onClick={() => {
                  if (loadMore) {
                    setLoadMore(false);
                    setModul(modul.slice(0, 3));
                  } else {
                    setLoadMore(true);
                    setModul(modul);
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
            ) : (
              <div className="pagination">
                <button
                  type="button"
                  className="prev"
                  disabled={currentPage - 1 === 0}
                  onClick={() => handlePageChange(currentPage - 1)}

                  // onClick={() => {
                  //   if (currentPage - 1 >= 1) {
                  //     setModul(
                  //       modul.slice(
                  //         (currentPage - 2) * 16,
                  //         (currentPage - 1) * 16
                  //       )
                  //     );
                  //     setCurrentPage(currentPage - 1);
                  //   }
                  // }}
                >
                  {arrowRight}
                </button>
                <h6>
                  {currentPage} - {Math.ceil(modul.length / 16)}
                </h6>
                <button
                  type="button"
                  disabled={
                    currentPage + 1 > Math.ceil(modul.length / 16)
                  }
                  // onClick={() => {
                  //   if (
                  //     currentPage + 1 <=
                  //     Math.ceil(modul.length / 16)
                  //   ) {
                  //     setModul(
                  //       modul.slice(
                  //         currentPage * 16,
                  //         (currentPage + 1) * 16
                  //       )
                  //     );
                  //     setCurrentPage(currentPage + 1);
                  //   }
                  // }}
                  onClick={() => handlePageChange(currentPage + 1)}
                >
                  {arrowRight}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
const InsightsItem = (props) => {
  const item = props.attributes
  const img = props.type === 'article' ? item.article?.image?.data?.attributes : item.case?.image?.data?.attributes
  return (
    <Link href={`/insights${props.type === 'article' ? `/articles/${item.slug}` : `/cases/${item.slug}`}`} className="insightsItem">
      <div className="insightsItem__image">
        <img src={img.url} alt={img.name} />
      </div>
      <div className="insightsItem__content">
        <h6 className="sup">{item.title}</h6>
        {/* <h5>{props.type === 'article' ? item.excerpt : item.subtitle}</h5> */}
        <h5>{item.excerpt}</h5>
        <div className="insightsItem__info">
          <p>{props.type.toUpperCase()}</p>
          <hr />
          <p>{item.read_time}</p>
        </div>
      </div>
    </Link>
  );
};
