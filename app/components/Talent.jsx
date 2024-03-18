'use client'
import { arrowDown, arrowRight } from "@/app/Base/SVG";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Slider from "react-slick/lib/slider";

const valuesList = [
    {
        id: "1",
        link: "/careers/data-engineer",
        shift: "Full-Time",
        location: "Amsterdam",
        title: "Data Engineer",
        text: "Gathering crucial insights and ensuring reliable data to support intelligent decision-making through our data collection services.",
    },
    {
        id: "2",
        link: "/careers/data-scientist",
        shift: "Full-Time",
        location: "Amsterdam",
        title: "Data Scientist",
        text: "Efficient data storage and transformation are vital for effective business analysis. Ensure future-proof, cost-efficient storage now.",
    },
    {
        id: "3",
        link: "/careers/head-of-analytics",
        shift: "Full-Time",
        location: "Amsterdam",
        title: "Head of Analytics",
        text: "Maximize your data's potential. Our captivating dashboards turn data into actionable insights that boost business value.",
    },
    {
        id: "4",
        link: "/careers/data-analist",
        shift: "Full-Time",
        location: "Amsterdam",
        title: "Data Analist",
        text: "Empower your business strategy through profound data analysis: harnessing insights for informed, strategic decision-making",
    },

];
export default function Values({ title, jobs }) {

    const [valuesArr, setValuesArr] = useState([...jobs.slice(0, 1)]);
    const [loadMore, setLoadMore] = useState(false);
    const [mobile, setMobile] = useState(false);
    useEffect(() => {
        if (window.innerWidth < 651) {
            setMobile(true);
        } else {
            setMobile(false);
        }
        window.addEventListener("resize", () => {
            if (window.innerWidth < 651) {
                setMobile(true);
            } else {
                setMobile(false);
            }
        });
    }, []);
    const settings = {
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        dots: true,
        speed: 600,
        responsive: [
            {
                breakpoint: 930,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 650,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: false,
                },
            },
        ],
    };
    return (
        <section className="values last">
            <div className="auto__container">
                <div className="values__inner">
                    <div className="values__inner-title">
                        <h4>{title}</h4>
                    </div>
                    {mobile ? (
                        <div className="values__inner-row">
                            {valuesArr?.length > 0 && valuesArr.map((item, index) => {
                                return <ValuesItem {...item} key={index} />;
                            })}
                        </div>
                    ) : (
                        <Slider className="values__inner-slider" {...settings}>
                            {jobs.map((item, index) => {
                                return <ValuesItem {...item} key={index} />;
                            })}
                        </Slider>
                    )}
                    <div className="values__inner-foot">
                        <div
                            className={"loadMore " + (loadMore ? "up" : "down")}
                            onClick={() => {
                                if (loadMore) {
                                    setLoadMore(false);
                                    setValuesArr(jobs.slice(0, 3));
                                } else {
                                    setLoadMore(true);
                                    setValuesArr(jobs);
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
const ValuesItem = (props) => {
    const item = props.attributes
    return (
        <Link href={`/careers/${item.slug}`} className="valuesItem ex">
            <div className="valuesItem__inner">
                <div className="valuesItem__content">
                    <div className="valuesItem__info">
                        <h6>{item.position}</h6>
                        <hr />
                        <h6>{item.location}</h6>
                    </div>
                    <h3>{item.title}</h3>
                    <p>{item.hero.title}</p>
                    <div className="loadMore">
                        <b>Load More</b>
                        <div className="loadMore__arrow">{arrowRight}</div>
                    </div>
                </div>
            </div>
        </Link>
    );
};
