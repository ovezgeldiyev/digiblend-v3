import React from "react";
import { BlocksRenderer } from '@strapi/blocks-react-renderer';

export default function Article({ item }) {
  return (
    <section className="article">
      <div className="auto__container">
        <div className="article__inner">
          <div className="article__inner-item">
            <BlocksRenderer content={item} />
          </div>
        </div>
      </div>
    </section>
  );
}
