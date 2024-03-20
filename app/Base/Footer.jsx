"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import { chevronBottom } from "./SVG";

export default function Footer({ item, totalJobs }) {
  useEffect(() => {
    setUniqFooter(true);
  }, []);
  const [uniqFooter, setUniqFooter] = useState(false);
  const [mobile, setMobile] = useState(false);
  const [mobTab, setMobTab] = useState(null);
  useEffect(() => {
    if (window.innerWidth < 541) {
      setMobile(true);
    } else {
      setMobile(false);
    }
    window.addEventListener("resize", () => {
      if (window.innerWidth < 541) {
        setMobile(true);
      } else {
        setMobile(false);
      }
    });
  }, []);
  return (
    <footer className={"footer " + (uniqFooter ? "uniq" : "")}>
      <div className="auto__container">
        {mobile ? (
          <>
            <div className="footerMob">
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
              <div className="footerMob__links">
                <div className="footerLink">
                  <h5
                    className={mobTab === "what_we_do" ? "active" : ""}
                    onClick={() => {
                      if (mobTab === "what_we_do") {
                        setMobTab(null);
                      } else {
                        setMobTab("what_we_do");
                      }
                    }}
                  >
                    What we do {chevronBottom}
                  </h5>
                  {mobTab === "what_we_do" && (
                    <div className="footerLink__drop">
                      <div className="footerLink__drop-links">
                        <a href="#">Design</a>
                        <a href="#">Development</a>
                        <a href="#"> Data & Analytics</a>
                        <a href="#">Marketing</a>
                      </div>
                    </div>
                  )}
                </div>
                <Link href="#" className="footerLink">
                  <h5>Insights</h5>
                </Link>
                <Link href="#" className="footerLink">
                  <h5>Careers</h5>
                </Link>
                <div className="footerLink">
                  <h5
                    className={mobTab === "contact" ? "active" : ""}
                    onClick={() => {
                      if (mobTab === "contact") {
                        setMobTab(null);
                      } else {
                        setMobTab("contact");
                      }
                    }}
                  >
                    Contact Us {chevronBottom}
                  </h5>
                  {mobTab === "contact" && (
                    <div className="footerLink__drop">
                      <p>
                        digiblend B.V. <br />
                        Papaverhof 16B <br />
                        1032LX, Amsterdam <br />
                        hello@digiblend.nl
                      </p>
                      <a href="#" className="button primary">
                        085-8428000
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="footer__inner">
            <div className="footer__inner-row">
              {item.links.map((el, i) => (
                <div className="footer__inner-col" key={i}>
                  <div className="logo">
                    <h6 className="big">{el.title}</h6>
                    {i === 0 && (
                      <div className="logo__stars">
                        {[0, 1, 2, 3, 4].map((item, index) => {
                          return (
                            <span key={index}>
                              <img src={"/images/icons/star.svg"} alt="star" />
                            </span>
                          );
                        })}
                      </div>
                    )}
                  </div>
                  <ul>
                    {el.links.map((link, idx) => {
                      return (
                        <li key={idx}>
                          <Link
                            href={link.url}
                            className={
                              link.url === "/careers" && totalJobs > 0
                                ? "active"
                                : ""
                            }
                          >
                            {link.label}
                            <span>
                              {link.url === "/careers" && totalJobs > 0
                                ? totalJobs
                                : null}
                            </span>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ))}

              <div className="footer__inner-col">
                <BlocksRenderer content={item.contact} />
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="footerCopy">
        <div className="auto__container">
          <div className="footerCopy__inner">
            <div className="footerCopy__inner-links">
              <p>{item.copyright}</p>
              {item.bottom_links.map((el) => (
                <Link href={el.url ?? ""} key={el.label}>
                  {el.label}
                </Link>
              ))}
            </div>
            <p>{item.developer}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
