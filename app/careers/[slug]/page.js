import React from "react";
import Hero from "./components/Hero";
import Cloud from "./components/Cloud";
import Talent from "@/app/components/Talent";
import Article from "./components/Article";
import ContactLink from "@/app/Base/ContactLink";
import { getCareerBySlug } from "@/app/lib/endpoints";
import ContactCard from "@/app/components/ContactCard";
import { metadata } from "@/app/lib/meta";

export default async function page({ params: { slug } }) {
  const result = await getCareerBySlug(slug);
  const item = result?.data?.length > 0 ? result.data[0].attributes : {};
  return (
    <>
      <main>
        <ContactLink />
        <Hero item={item.hero} />
        <Article item={item} />
        <Cloud item={item} />
        <div className="main__wrapper">
          <ContactCard item={item.apply} />
          <Talent title={item.talent} jobs={item.jobs.data} />
        </div>
      </main>
    </>
  );
}

export async function generateMetadata({ params: { slug } }) {
  const result = await getCareerBySlug(slug);
  const item = result?.data?.length > 0 ? result.data[0].attributes : {};
  const seo = item?.seo;
  return metadata(seo);
}
