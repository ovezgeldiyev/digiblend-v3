import React from "react";
import Hero from "./components/Hero";
import Values from "./components/Values";
import Belief from "@/app/components/Belief";
import Cloud from "./components/Cloud";
import Action from "./components/Action";
import ContactLink from "@/app/Base/ContactLink";
import { getAboutPage } from "@/app/lib/endpoints";
import FeatureCard from "@/app/components/FeatureCard";
import ContactCard from "@/app/components/ContactCard";
import { metadata } from "@/app/lib/meta";

export default async function page() {
  const result = await getAboutPage()
  const about = result.data.attributes
  return (
    <main>
      <ContactLink />
      <Hero item={about.hero} />
      <Action item={about.action} />
      <Values title={about.corporate_section_title} values={about.corporate_values} />
      <Cloud item={about} />
      <Belief title={about.case_title} cases={about.cases.data} />
      <FeatureCard item={about.benefits} />
      <ContactCard item={about.contact} />
    </main>
  );
}

export async function generateMetadata() {
  const result = await getAboutPage()
  const item = result?.data?.attributes
  const seo = item?.seo
  return metadata(seo)
}