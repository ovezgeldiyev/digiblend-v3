import { locationIcon } from "@/app/Base/SVG";
import React from "react";

export default function Copy() {
  return (
    <div className="copy">
      <div className="auto__container">
        <div className="copy__inner">
          <a
            href="https://www.digiblend.nl/terms-and-conditions"
            className="copyItem"
          >
            <p>© 2024 digiblend. All rights reserved.</p>
          </a>
          <div className="copyItem">
            <div className="logo">
              <h6 className="big">digiblend.</h6>
              <div className="logo__stars">
                {[0, 1, 2, 3, 4].map((item, index) => {
                  return (
                    <span key={index}>
                      <img src={"/images/icons/star.svg"} alt="star" />
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="copyItem">
            <div className="copyItem__location">
              {locationIcon}
              <p>Papaverhof 16B, 1032LX, Amsterdam</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
