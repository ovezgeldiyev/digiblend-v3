import React from "react";
import Form from "./components/Form";
import { getServiceRequest } from "@/app/lib/endpoints";
import { metadata } from "@/app/lib/meta";

export default async function page() {
  const result = await getServiceRequest()
  return (
    <main>
      <Form item={result.data.attributes} />
    </main>

  );
}

export async function generateMetadata() {
  const result = await getServiceRequest()
  const item = result?.data?.attributes
  const seo = item?.seo
  return metadata(seo)
}