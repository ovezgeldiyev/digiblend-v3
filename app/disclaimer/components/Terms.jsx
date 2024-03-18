import React from "react";
import Breadcrumb from "@/app/components/Breadcrumb";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";

export default function Terms({ item }) {
  return (
    <section className="terms">
      <div className="auto__container">
        <div className="terms__inner">
          <div className="terms__inner-nav">
            <Breadcrumb array={item.breadcrumb} />
          </div>
          <div className="terms__inner-title">
            <h1>{item.title}</h1>
          </div>
          <div className="terms__inner-content">
            <BlocksRenderer content={item.content} />
          </div>
        </div>
      </div>
    </section>
  );
}
