import React from "react";
import Hero from "./components/Hero";
import Cloud from "@/app/components/Cloud";
import Mission from "@/app/components/Mission";
import Offer from "./components/Offer/Offer";
import {
  ourMission,
  ourMission2,
  productOffers,
  serviceOffers,
} from "@/app/Base/modul";
import Belief from "@/app/components/Belief";
import ContactLink from "@/app/Base/ContactLink";
import { getCategories, getHome } from "@/app/lib/endpoints";
import FeatureCard from "@/app/components/FeatureCard";
import ContactCard from "@/app/components/ContactCard";
import { metadata } from "@/app/lib/meta";

export default async function page() {
  const result = await getHome()
  const cat = await getCategories()
  return (
    <>
      <main>
        <ContactLink />
        <Hero item={result.data.attributes.hero} />
        <Offer modul={serviceOffers} item={result.data.attributes} categories={cat.data} />
        <Cloud title={result.data.attributes.article_section_title} articles={result.data.attributes.articles.data} />
        <ContactCard uniq={false} item={result.data.attributes.mission} />
        <Belief title={result.data.attributes.case_section_title} cases={result.data.attributes.cases.data} />
        <ContactCard item={result.data.attributes.corporate_section} />
      </main>
    </>
  );
}

export async function generateMetadata() {
  const result = await getHome()
  const item = result?.data?.attributes
  const seo = item?.seo
  return metadata(seo)
}