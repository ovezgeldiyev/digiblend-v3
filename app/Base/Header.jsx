"use client";
import React, { useEffect, useRef, useState } from "react";
import LanguageSelect from "./LanguageSelect";
import { usePathname } from "next/navigation";
import Link from "next/link";
import NestedMenu from "./NestedMenu";
import { chevronBottom } from "./SVG";
const languageList = [
  { id: "1", value: "nl", image: "/images/nl.png" },
  { id: "2", value: "en", image: "/images/en.png" },
  // { id: "3", value: "ES", image: "/images/es.png" },
];

export default function Header({ item, servicesMenu }) {
  // console.log(servicesMenu)
  const dropBtnRef = useRef(null);
  const [menu, setMenu] = useState(false);
  const [drop, setDrop] = useState(false);
  const [dropTab, setDropTab] = useState("overview");
  const [menuType, setMenuType] = useState("main");
  const [mobNav, setMobNav] = useState(false);
  const [mobTab, setMobTab] = useState(null);
  const [lang, setLang] = useState({
    id: "1",
    value: "NL",
    image: "/images/nl.png",
  });
  const closeMenu = (e) => {
    console.log(e.target, e.currentTarget);
    // if (e.target === e.currentTarget) {
    setMenu(false);
    setMenuType("main");
    // }
  };
  useEffect(() => {
    if (menu) {
      document.body.classList.add("active");
    } else {
      document.body.classList.remove("active");
    }
  }, [menu]);
  const pathname = usePathname();
  const onChangeHandler = (data) => {
    setLang(data);
  };
  function scrollFunc() {
    let header = document.getElementById("header");
    if (window.scrollY >= 60) {
      header.classList.add("sticky");
    } else header.classList.remove("sticky");
  }
  useEffect(() => {
    window.addEventListener("scroll", scrollFunc);
  }, []);
  return (
    <>
      <header
        className={"header " + (drop ? "active " : "")}
        id="header"
        onMouseOver={(e) => {
          if (dropBtnRef.current && dropBtnRef.current.contains(e.target)) {
            setDrop(true);
            setDropTab("overview");
          } else {
            setDrop(false);
            setDropTab("overview");
          }
        }}
      >
        <div className="auto__container">
          <div className="header__inner">
            <div className="header__inner-side">
              <Link
                href="/"
                className="header__inner-logo"
                onClick={() => {
                  setMenu(false);
                  setMenuType("main");
                }}
              >
                <img src={item.logo?.data?.attributes.url} alt="" />
              </Link>
            </div>
            <nav
              className={"nav " + (menu ? "active" : "")}
              // onClick={closeMenu}
            >
              <div className="nav__inner">
                <ul>
                  <li
                    className={"dropBtn " + (drop ? "active" : "")}
                    ref={dropBtnRef}
                  >
                    <a href="#">What we do</a>
                  </li>
                  <li>
                    <a href="#">Who we are</a>
                  </li>
                  <li>
                    <a href="#">Insights</a>
                  </li>
                  <li>
                    <a href="#">Careers</a>
                  </li>
                  {/* {item.links.slice(0, 4).map((el, i) => (
                    <li key={i}>
                      <Link href={el.url}>{el.label}</Link>
                    </li>
                  ))} */}

                  {/* <Link href="/contact" className="button primary">
                  <span>Let’s Talk</span>
                </Link> */}
                </ul>
                {menuType === "main" && (
                  // <div className="nav__inner-main ">
                  //   <div
                  //     className={
                  //       "navItem " + (pathname === "/services" ? "active" : "")
                  //     }
                  //   >
                  //     <div className="navItem__inner">
                  //       <Link
                  //         className="navItem__link"
                  //         href={servicesMenu.url}
                  //         onClick={closeMenu}
                  //       >
                  //         <h3>{servicesMenu.label}</h3>
                  //         <p>{servicesMenu.excerpt}</p>
                  //       </Link>
                  //       <button
                  //         type="button"
                  //         onClick={() => setMenuType("services")}
                  //       >
                  //         <img src="/images/icons/triangle.svg" alt="" />
                  //       </button>
                  //     </div>
                  //   </div>
                  //   {item.mobile_links.map((el, i) => (
                  //     <div
                  //       className={
                  //         "navItem " +
                  //         (pathname === el.link.url ? "active" : "")
                  //       }
                  //       key={i}
                  //     >
                  //       <div className="navItem__inner" onClick={closeMenu}>
                  //         <Link className="navItem__link" href={el.link.url}>
                  //           <h3>{el.link.label}</h3>
                  //           <p>{el.excerpt}</p>
                  //         </Link>
                  //       </div>
                  //     </div>
                  //   ))}
                  // </div>
                  <div className="nav__inner-main ">
                    <div className={"navItem " + (mobNav ? "active" : "")}>
                      <div
                        className="navItem__title"
                        onClick={() => {
                          setMobNav(!mobNav);
                          setMobTab(null);
                        }}
                      >
                        <h3>What we do</h3>
                        <p>Our services for business growth</p>
                        {chevronBottom}
                      </div>
                      {mobNav && (
                        <div className="navItem__tabs">
                          <div className="navItem__tab">
                            <div
                              className={
                                "navItem__tab-head " +
                                (mobTab === "design" ? "active" : "")
                              }
                              onClick={() => {
                                if (mobTab === "design") {
                                  setMobTab(null);
                                } else {
                                  setMobTab("design");
                                }
                              }}
                            >
                              <h5>Design</h5>
                              <span></span>
                            </div>
                            {mobTab === "design" && (
                              <div className="navItem__tab-body">
                                <a href="#">Web design</a>
                                <a href="#">Software design</a>
                                <a href="#">App design</a>
                                <a href="#">Brand identity</a>
                              </div>
                            )}
                          </div>
                          <div className="navItem__tab">
                            <div
                              className={
                                "navItem__tab-head " +
                                (mobTab === "dev" ? "active" : "")
                              }
                              onClick={() => {
                                if (mobTab === "dev") {
                                  setMobTab(null);
                                } else {
                                  setMobTab("dev");
                                }
                              }}
                            >
                              <h5>Development</h5>
                              <span></span>
                            </div>
                            {mobTab === "dev" && (
                              <div className="navItem__tab-body">
                                <a href="#">Web development</a>
                                <a href="#">Software development</a>
                                <a href="#">App development</a>
                                <a href="#">Headless CMS</a>
                              </div>
                            )}
                          </div>
                          <div className="navItem__tab">
                            <div
                              className={
                                "navItem__tab-head " +
                                (mobTab === "data" ? "active" : "")
                              }
                              onClick={() => {
                                if (mobTab === "data") {
                                  setMobTab(null);
                                } else {
                                  setMobTab("data");
                                }
                              }}
                            >
                              <h5>Data & Analytics</h5>
                              <span></span>
                            </div>
                            {mobTab === "data" && (
                              <div className="navItem__tab-body">
                                <a href="#">Data collection</a>
                                <a href="#">Data storage</a>
                                <a href="#">Data analysis</a>
                                <a href="#">Dashboarding</a>
                              </div>
                            )}
                          </div>
                          <div className="navItem__tab">
                            <div
                              className={
                                "navItem__tab-head " +
                                (mobTab === "market" ? "active" : "")
                              }
                              onClick={() => {
                                if (mobTab === "market") {
                                  setMobTab(null);
                                } else {
                                  setMobTab("market");
                                }
                              }}
                            >
                              <h5>Marketing</h5>
                              <span></span>
                            </div>
                            {mobTab === "market" && (
                              <div className="navItem__tab-body">
                                <a href="#">Search Engine Advertising</a>
                                <a href="#">Social Advertising</a>
                                <a href="#">Display Advertising</a>
                                <a href="#">B2B Leadgeneration</a>
                              </div>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                    <Link href="#" className="navItem">
                      <div className="navItem__title">
                        <h3>Who we are</h3>
                        <p>Making impact through technology</p>
                      </div>
                    </Link>
                    <Link href="#" className="navItem">
                      <div className="navItem__title">
                        <h3>Insights</h3>
                        <p>Sharing knowledge for progress</p>
                      </div>
                    </Link>
                    <Link href="#" className="navItem">
                      <div className="navItem__title">
                        <h3>Careers</h3>
                        <p>Join our team</p>
                      </div>
                    </Link>
                    <Link href="#" className="navItem">
                      <div className="navItem__title">
                        <h3>Contact Us</h3>
                        <p>We are curious about your challenges</p>
                      </div>
                    </Link>
                  </div>
                )}
                {menuType === "services" && (
                  <div className="nav__inner-main">
                    <div
                      className="nav__inner-back"
                      onClick={() => setMenuType("main")}
                    >
                      <span>
                        <img src="/images/icons/triangle.svg" alt="" />
                      </span>
                      <h6>Overview</h6>
                    </div>
                    {servicesMenu.nested_menus.data.map((nm) => (
                      <div
                        key={nm.id}
                        className={
                          "navItem " +
                          (pathname === nm.attributes?.url ? "active" : "")
                        }
                      >
                        <div className="navItem__inner">
                          <Link
                            className="navItem__link"
                            href={nm.attributes.url}
                            onClick={closeMenu}
                          >
                            <h3>{nm.attributes.label}</h3>
                            <p>{nm.attributes.excerpt}</p>
                          </Link>
                          <button
                            onClick={() =>
                              setMenuType(nm.attributes.label.toLowerCase())
                            }
                          >
                            <img src="/images/icons/triangle.svg" alt="" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
                <NestedMenu
                  condition="design"
                  menuType={menuType}
                  setMenuType={setMenuType}
                  servicesMenu={servicesMenu}
                  closeMenu={closeMenu}
                />
                <NestedMenu
                  condition="development"
                  menuType={menuType}
                  setMenuType={setMenuType}
                  servicesMenu={servicesMenu}
                  closeMenu={closeMenu}
                />
                <NestedMenu
                  condition="data & analytics"
                  menuType={menuType}
                  setMenuType={setMenuType}
                  servicesMenu={servicesMenu}
                  closeMenu={closeMenu}
                />
                <NestedMenu
                  condition="marketing"
                  menuType={menuType}
                  setMenuType={setMenuType}
                  servicesMenu={servicesMenu}
                  closeMenu={closeMenu}
                />
                <div className="nav__inner-foot">
                  <a href={`tel:${item.phone}`} className="button primary">
                    <span>{item.phone}</span>
                  </a>
                  {/* <h6 className="sup">SITE LANGUAGE</h6>
                <div className="nav__inner-row">
                  <a href="#" onClick={() => setMenu(false)}>
                    <span>
                      <img src="/images/nl.png" alt="" />
                    </span>
                    <b>NL</b>
                  </a>
                  <a href="#" onClick={() => setMenu(false)}>
                    <span>
                      <img src="/images/en.png" alt="" />
                    </span>
                    <b>EN</b>
                  </a>
                  <a href="#" onClick={() => setMenu(false)}>
                    <span>
                      <img src="/images/es.png" alt="" />
                    </span>
                    <b>ES</b>
                  </a>
                </div> */}
                </div>
              </div>
            </nav>
            <div className="header__inner-buttons">
              <div className="ct">
                <Link href={item.links[4].url}>{item.links[4].label}</Link>
              </div>
              <a href={`tel:${item.phone}`} className="button primary">
                <span>
                  <b>{item.phone}</b>
                </span>
              </a>
              {/* <LanguageSelect
              list={languageList}
              selected={languageList[0]}
              onChange={onChangeHandler}
            /> */}
              <div
                className={"burger last " + (menu ? "active" : "")}
                onClick={() => {
                  setMenu(!menu);
                  setMobNav(false);
                  setMobTab(null);
                }}
              >
                <span></span>
                <b>Close</b>
              </div>
            </div>
          </div>
        </div>
      </header>
      {drop && (
        <div
          className="drop"
          onMouseOver={(e) => {
            if (e.target === e.currentTarget) {
              setDrop(false);
              setDropTab("overview");
            }
          }}
        >
          <div className="dropTop">
            <div className="auto__container">
              <div className="drop__inner">
                <div className="drop__inner-side">
                  <div className="drop__inner-tabs">
                    <div
                      className={
                        "dropTab " + (dropTab === "overview" ? "active" : "")
                      }
                    >
                      <div
                        className="dropTab__title"
                        onMouseOver={() => setDropTab("overview")}
                      >
                        <h6>Overview {chevronBottom}</h6>
                      </div>
                      <div className="dropTab__main">
                        <div className="dropTab__main-content">
                          <h4>Making differences through technology.</h4>
                          <p>
                            Explore our diverse array of solutions, from design
                            and development to data-analytics and marketing.
                            Tailored to unlock your business's growth potential.
                          </p>
                          <a href="#" className="button secondary">
                            Discover our solutions
                          </a>
                        </div>
                      </div>
                    </div>
                    <div
                      className={
                        "dropTab " + (dropTab === "services" ? "active" : "")
                      }
                    >
                      <div
                        className="dropTab__title"
                        onMouseOver={() => setDropTab("services")}
                      >
                        <h6>Services {chevronBottom}</h6>
                      </div>
                      <div className="dropTab__main">
                        <div className="dropTab__row">
                          <div className="dropTab__col">
                            <h6>Design</h6>
                            <a href="#">Web design</a>
                            <a href="#">Software design</a>
                            <a href="#">App design</a>
                            <a href="#">Brand identity</a>
                          </div>
                          <div className="dropTab__col">
                            <h6>Development</h6>
                            <a href="#">Web development</a>
                            <a href="#">Software development</a>
                            <a href="#">App development</a>
                            <a href="#">Headless CMS</a>
                          </div>
                          <div className="dropTab__col">
                            <h6>Data & Analytics</h6>
                            <a href="#">Data collection</a>
                            <a href="#">Data storage</a>
                            <a href="#">Data analysis</a>
                            <a href="#">Dashboarding</a>
                          </div>
                          <div className="dropTab__col">
                            <h6>Marketing</h6>
                            <a href="#">Search engine advertising</a>
                            <a href="#">Social advertising</a>
                            <a href="#">Display advertising</a>
                            <a href="#">B2B leadgeneration</a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className={
                        "dropTab " + (dropTab === "request" ? "active" : "")
                      }
                    >
                      <div
                        className="dropTab__title"
                        onMouseOver={() => setDropTab("request")}
                      >
                        <h6>Request Service {chevronBottom}</h6>
                      </div>
                      <div className="dropTab__main">
                        <div className="dropTab__row">
                          <div className="dropTab__col">
                            <h6>Design</h6>
                            <a href="#">Web design</a>
                            <a href="#">Software design</a>
                            <a href="#">App design</a>
                            <a href="#">Brand identity</a>
                          </div>
                          <div className="dropTab__col">
                            <h6>Development</h6>
                            <a href="#">Web development</a>
                            <a href="#">Software development</a>
                            <a href="#">App development</a>
                            <a href="#">Headless CMS</a>
                          </div>
                          <div className="dropTab__col">
                            <h6>Data & Analytics</h6>
                            <a href="#">Data collection</a>
                            <a href="#">Data storage</a>
                            <a href="#">Data analysis</a>
                            <a href="#">Dashboarding</a>
                          </div>
                          <div className="dropTab__col">
                            <h6>Marketing</h6>
                            <a href="#">Search engine advertising</a>
                            <a href="#">Social advertising</a>
                            <a href="#">Display advertising</a>
                            <a href="#">B2B leadgeneration</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
