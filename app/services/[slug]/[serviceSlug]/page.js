import React from "react";
import Hero from "./components/Hero";
import Cloud from "./components/Cloud";
import Talk from "./components/Talk";
import ContactLink from "@/app/Base/ContactLink";
import { getServiceBySlug } from "@/app/lib/endpoints";
import FeatureCard from "@/app/components/FeatureCard";
import { metadata } from "@/app/lib/meta";

export default async function page({ params }) {
  const result = await getServiceBySlug(params.serviceSlug)
  const item = result?.data?.length > 0 ? result.data[0].attributes : {}
  return (
    <main>
      <ContactLink />
      <Hero item={item.hero} />
      <FeatureCard item={item.benefits} />
      <Cloud title={item.work_approach} details={item.approach_details} />
      <Talk item={item.contact} />
    </main>
  );
}

export async function generateMetadata({ params: { slug } }) {
  const result = await getServiceBySlug(slug)
  const item = result?.data?.length > 0 ? result.data[0].attributes : {}
  const seo = item?.seo
  return metadata(seo)
}
