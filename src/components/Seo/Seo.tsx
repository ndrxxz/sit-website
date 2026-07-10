import React from "react";
import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  image?: string
}

export default function Seo({ title, description, canonical, image }: SEOProps) {
  return (
    <Helmet>
      <title>{title}</title>

      <meta name="edscription" content={description} />

      {image && <meta name="og:image" content={image} />}

      <meta property="og:title" content={title} />

      <meta property="og:description" content={description} />

      {canonical && <link rel="canonical" href={canonical} />}
    </Helmet>
  );
}
