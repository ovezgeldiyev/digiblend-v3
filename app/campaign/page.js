"use client";
import React, { useEffect, useState } from "react";
import Offer from "../components/Offer/Offer";
import { benefits6, serviceOffers } from "../Base/modul";
import Benefits from "../components/Benefits";
import Belief2 from "../components/Belief2";
import Talk from "./components/Talk";
import Cloud from "./components/Cloud";
import Hero from "./components/Hero";
import ContactLink from "../Base/ContactLink";
import Places from "./components/Places";

export default function page() {
  return (
    <main>
      <ContactLink />
      <Hero />
      <Places />
      <Offer modul={serviceOffers} />
      <Benefits {...benefits6} />
      <Belief2 />
      <Cloud />
      <Talk />
    </main>
  );
}
