import Link from "next/link";
import React from "react";

export default function OfferItem(props) {
  return (
    <Link href={props.link} className="offerItem">
      <div className="offerItem__image">
        <img src={props.image} alt="" />
      </div>
      <div className="offerItem__content">
        <h3>{props.title}</h3>
      </div>
    </Link>
  );
}
