import React from "react";
import Hero from "./components/Hero";
import Cloud from "./components/Cloud";
import Belief from "@/app/components/Belief";
import Article from "./components/Article";
import ContactLink from "@/app/Base/ContactLink";
import { getCaseBySlug } from "@/app/lib/endpoints";
import FeatureCard from "@/app/components/FeatureCard";
import { metadata } from "@/app/lib/meta";

export default async function page({ params: { slug } }) {
  const result = await getCaseBySlug(slug)
  const item = result?.data?.length > 0 ? result.data[0].attributes : {}
  return (
    <>
      <main>
        <ContactLink />
        <Hero item={item} />
        <FeatureCard item={item.feature} />
        <Article item={item.content} />
        <Cloud item={item.about_us} cards={item.about_us_cards} />
        <Belief title={item.cases_section_title} cases={item.related_cases?.data} />
      </main>
    </>
  );
}


export async function generateMetadata({ params: { slug } }) {
  const result = await getCaseBySlug(slug)
  const item = result?.data?.length > 0 ? result.data[0].attributes : {}
  const seo = item?.seo
  return metadata(seo)
}