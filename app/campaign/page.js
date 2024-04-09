"use client";
import React, { useEffect, useState } from "react";
import Offer from "../components/Offer/Offer";
import { benefits6, serviceOffers } from "../Base/modul";
import Benefits from "./components/Benefits";
import Belief2 from "../components/Belief2";
import Talk from "./components/Talk";
import Hero from "./components/Hero";
import ContactLink from "../Base/ContactLink";
import Places from "./components/Places";
import Header from "../Base/Header";
import Faq from "./components/Faq";
import Copy from "./components/Copy";
import Services from "./components/Services";

export default function page() {
  useEffect(() => {
    setUniqFooter(true);
  }, []);
  const [uniqFooter, setUniqFooter] = useState(false);
  const [menu, setMenu] = useState(false);
  useEffect(() => {
    setMenu(false);
    document.body.classList.remove("active");
  }, []);
  return (
    <>
      <Header menu={menu} setMenu={setMenu} />

      <main id="top">
        <ContactLink />
        <Hero />
        <Places />
        <Services />
        <Benefits {...benefits6} />
        <Belief2 />
        <Faq />
        <Talk />
      </main>
      <Copy />
    </>
  );
}
