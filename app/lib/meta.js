export const metadata = (seo) => {
    return seo ? {
        title: `${seo.metaTitle} | Digiblend`,
        description: seo.metaDescription,
        keywords: seo.keywords,
        robots: seo.metaRobots,
        alternates: {
            canonical: seo.canonicalURL,
        },
        openGraph: {
            title: seo.metaTitle,
            description: seo.metaDescription,
            url: seo.canonicalURL,
            images: seo.metaImage?.data?.attributes?.url,
        },
    } : null
}