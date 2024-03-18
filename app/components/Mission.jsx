import Link from "next/link";
import React from "react";

export default function Mission(props) {
  return (
    <>
      <section className={"mission " + (props.status ? " " : "uniq ") + (props.addClass ? props.addClass : "")}>
        <div className="mission__bg">
          <img src={props.image} alt="" />
        </div>
        <div className="auto__container">
          <div className="mission__inner">
            <div className="mission__inner-content">
              <div className="mission__inner-text">
                <h6 className="sup">{props.uptitle}</h6>
                <h4>{props.title}</h4>
                <p>{props.text}</p>
              </div>
              <Link href={props.link} className="button primary">
                <span>{props.btn}</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
