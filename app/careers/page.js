import React from "react";
import Hero from "./components/Hero";
import Insights from "./components/Insights";
import ContactLink from "@/app/Base/ContactLink";
import { getCareersPage } from "@/app/lib/endpoints";
import { metadata } from "@/app/lib/meta";

export default async function page() {
  const result = await getCareersPage()
  const data = result.data.attributes
  return (
    <>
      <main>
        <ContactLink />
        <Hero item={data.hero} />
        <Insights careers={data.careers?.data}/>
      </main>
    </>
  );
}

export async function generateMetadata() {
  const result = await getCareersPage()
  const item = result?.data?.attributes
  const seo = item?.seo
  return metadata(seo)
}