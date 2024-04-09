import { paperIcon } from "@/app/Base/SVG";
import Link from "next/link";
import React from "react";

export default function Talk() {
  return (
    <section className="talk new">
      <div className="talk__bg">
        <div className="talk__bg-image">
          <img src="/images/mission/4.jpg" alt="" />
        </div>
      </div>
      <div className="auto__container">
        <div className="talk__inner sm">
          <div className="talk__inner-image"></div>
          <div className="talk__inner-content">
            <h6 className="sup">BELIEF IN ACTION</h6>
            <h2 className="sm">De weg naar meer cliënten, start hier.</h2>
            <p>
              Ontdek hoe wij u kunnen helpen om uw advocatenkantoor tot nieuwe
              hoogten te brengen.
            </p>
            <div className="talk__inner-buttons">
              <a href="#top" className="button primary">
                <span>Download Whitepaper </span>
                {paperIcon}
              </a>
              <Link href="/contact" className="button secondary">
                <b>085-2082577</b>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
