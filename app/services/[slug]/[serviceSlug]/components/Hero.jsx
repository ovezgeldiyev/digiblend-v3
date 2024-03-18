import { arrowRight } from "@/app/Base/SVG";
import Breadcrumb from "@/app/components/Breadcrumb";
import Link from "next/link";
import React from "react";

export default function Hero({ item }) {
  return (
    <section className="hero sm">
      <div className="auto__container">
        <div className="hero__inner">
          <div className="hero__inner-nav">
            <Breadcrumb array={item.breadcrumb} />
          </div>
          <div className="heroSlide">
            <div className="heroSlide__title">
              <h1>{item.title}</h1>
            </div>
            <Link href={item.link.url} className="loadMore">
              <b>{item.link.label}</b>
              <div className="loadMore__arrow right">{arrowRight}</div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
