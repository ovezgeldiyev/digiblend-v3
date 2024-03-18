import React from "react";
import Hero from "./components/Hero";
import {
  designOffers
} from "@/app/Base/modul";
import Action from "./components/Action";
import Offer from "./components/Offer/Offer";
import ContactLink from "@/app/Base/ContactLink";
import { getServicesPage } from "@/app/lib/endpoints";
import ContactCard from "@/app/components/ContactCard";
import FeatureCard from "@/app/components/FeatureCard";
import { metadata } from "@/app/lib/meta";

export default async function page() {
  const result = await getServicesPage()
  const service = result.data.attributes
  return (
    <main>
      <ContactLink />
      <Hero item={service.hero} />
      {service.categories.data.length > 0 && service.categories.data.slice(0, 2).map((cat, i) => <Offer modul={designOffers} item={cat.attributes} key={cat.id} i={i} />)}
      <ContactCard item={service.consult} />
      {service.categories.data.length > 2 && service.categories.data.slice(2, 4).map((cat, i) => <Offer modul={designOffers} item={cat.attributes} key={cat.id} i={i} />)}
      <FeatureCard item={service.feature} />
      <Action item={service.service_request} />
    </main>
  );
}

export async function generateMetadata() {
  const result = await getServicesPage()
  const item = result?.data?.attributes
  const seo = item?.seo
  return metadata(seo)
}