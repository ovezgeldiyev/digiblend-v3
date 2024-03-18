import Link from "next/link";
import React from "react";

export default function Talk({ item }) {
  const img = item.image?.data?.attributes
  return (
    <section className="talk">
      <div className="talk__bg">
        <div className="talk__bg-image">
          <img src={img.url} alt={img.name} />

        </div>
      </div>
      <div className="auto__container">
        <div className="talk__inner">
          <div className="talk__inner-image"></div>
          <div className="talk__inner-content">
            <h6 className="sup">
              {item.subtitle}
            </h6>
            <h2 className="sm">{item.title}</h2>
            <p>
              {item.content}
            </p>
            <Link href={item.link.url} className="button primary">
              <b>{item.link.label}</b>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
