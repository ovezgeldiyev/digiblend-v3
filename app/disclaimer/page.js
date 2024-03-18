import React from "react";
import Terms from "./components/Terms";
import { getDisclaimer } from "@/app/lib/endpoints";
import { metadata } from "@/app/lib/meta";

export default async function page() {
  const result = await getDisclaimer()
  return (
    <main>
      <Terms item={result?.data?.attributes} />
    </main>
  );
}

export async function generateMetadata() {
  const result = await getDisclaimer()
  const item = result?.data?.attributes
  const seo = item?.seo
  return metadata(seo)
}