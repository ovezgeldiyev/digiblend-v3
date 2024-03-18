import React from "react";
import Hero from "./components/Hero";
import Article from "./components/Article";
import Cloud from "./components/Cloud";
import ContactLink from "@/app/Base/ContactLink";
import { getArticleBySlug } from "@/app/lib/endpoints";
import ContactCard from "@/app/components/ContactCard";
import { metadata } from "@/app/lib/meta";

export default async function page({ params: { slug } }) {
  const result = await getArticleBySlug(slug)
  const article = result?.data?.length > 0 ? result.data[0].attributes : {}

  return (
    <>
      <main>
        <ContactLink />
        <Hero item={article} />
        <Article item={article.content} />
        <ContactCard item={article.contact} />
        <Cloud articles={article.related_articles.data} title={article.latest_news} />
      </main>
    </>
  );
}

export async function generateMetadata({ params: { slug } }) {
  const result = await getArticleBySlug(slug)
  const item = result?.data?.length > 0 ? result.data[0].attributes : {}
  const seo = item?.seo
  return metadata(seo)
}