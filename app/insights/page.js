import React from "react";
import Hero from "./components/Hero";
import Insights from "./components/Insights";
import ContactLink from "@/app/Base/ContactLink";
import { getInsights, getInsightsList } from "@/app/lib/endpoints";
import { metadata } from "@/app/lib/meta";

export default async function page() {
  const result = await getInsights()
  // const insights = await getInsightsList()
  return (
    <>
      <main>
        <ContactLink />
        <Hero item={result.data.attributes} />
        {/* <Insights title={result.data.attributes.insights_title} insights={insights} /> */}
        <Insights title={result.data.attributes.insights_title}/>
      </main>
    </>
  );
}

export async function generateMetadata() {
  const result = await getInsights()
  const item = result?.data?.attributes
  const seo = item?.seo
  return metadata(seo)
}