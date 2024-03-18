import Link from "next/link";
import React from "react";

export default function Action({ item }) {
  const img = item.image.data.attributes
  return (
    <section className="action">
      <div className="auto__container">
        <div className="action__inner">
          <div className="action__inner-row">
            <div className="action__inner-content">
              <h6 className="sup">{item.subtitle}</h6>
              <h4>{item.title}</h4>
              <p>
                {item.content}
              </p>
              <Link href={item.link.url} className="button primary">
                {item.link.label}
              </Link>
            </div>
            <div className="action__inner-image-wrapper">
              <div className="action__inner-image">
                <img src={img.url} alt={img.name} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
