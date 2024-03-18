import React from "react";
import Hero from "./components/Hero";
import Cloud from "@/app/components/Cloud";
import Values from "./components/Values";
import ContactLink from "@/app/Base/ContactLink";
import { getCategoryBySlug } from "@/app/lib/endpoints";
import FeatureCard from "@/app/components/FeatureCard";
import ContactCard from "@/app/components/ContactCard";
import Talent from '@/app/components/Talent'
import { metadata } from "@/app/lib/meta";

export default async function page({ params: { slug } }) {
  const result = await getCategoryBySlug(slug)
  const item = result?.data?.length > 0 ? result.data[0].attributes : {}
  return (
    <>
      <main>
        <ContactLink />
        <Hero item={item.hero} />
        <Values title={item.services_title} services={item.services.data} slug={slug} />
        <Cloud title={item.article_title} articles={item.articles.data} />
        <FeatureCard item={item.benefits} />
        <ContactCard item={item.contact}/>
        <Talent title={item.talent} jobs={item.jobs.data} />
      </main>
    </>
  );
}

export async function generateMetadata({ params: { slug } }) {
  const result = await getCategoryBySlug(slug)
  const item = result?.data?.length > 0 ? result.data[0].attributes : {}
  const seo = item?.seo
  return metadata(seo)
}
