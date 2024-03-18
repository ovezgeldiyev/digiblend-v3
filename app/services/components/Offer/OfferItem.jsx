import Link from "next/link";
import React from "react";

export default function OfferItem({item, service}) {
  const img = item.image?.data?.attributes
  return (
    <Link href={`/services/${service}/${item.slug}`} className="offerItem">
      <div className="offerItem__image">
        <img src={img?.url} alt={img?.name} />
      </div>
      <div className="offerItem__content">
        <h3>{item.title}</h3>
      </div>
    </Link>
  );
}
