import React from "react";
import Terms from "./components/Terms";
import { getPrivacyPolicy } from "@/app/lib/endpoints";
import { metadata } from "@/app/lib/meta";

export default async function page() {
  const result = await getPrivacyPolicy()
  return (
    <main>
      <Terms item={result?.data?.attributes} />
    </main>
  );
}

export async function generateMetadata() {
  const result = await getPrivacyPolicy()
  const item = result?.data?.attributes
  const seo = item?.seo
  return metadata(seo)
}