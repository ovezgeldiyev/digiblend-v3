import { apiUrl, tokenAuth } from "./utils"

// Terms & Conditions Page
export const getTerms = async () => {
    const res = await fetch(`${apiUrl}/api/terms-and-conditions-page?populate=*`, {
        headers: {
            Authorization: tokenAuth
        },
        // cache: 'no-cache'
    })
    return res.json()
}

// Contact Page
export const getContact = async () => {
    const res = await fetch(`${apiUrl}/api/contact-page?populate=deep`, {
        headers: {
            Authorization: tokenAuth
        },
        // cache: 'no-cache'
    })
    return res.json()
}

// Service Request Page
export const getServiceRequest = async () => {
    const res = await fetch(`${apiUrl}/api/request-page?populate=deep`, {
        headers: {
            Authorization: tokenAuth
        },
        // cache: 'no-cache'
    })
    return res.json()
}

// Apply Now Page
export const getApplyNow = async () => {
    const res = await fetch(`${apiUrl}/api/apply-page?populate=deep`, {
        headers: {
            Authorization: tokenAuth
        },
        // cache: 'no-cache'
    })
    return res.json()
}

// Insights Page
export const getInsights = async () => {
    const res = await fetch(`${apiUrl}/api/insights-page?populate=deep`, {
        headers: {
            Authorization: tokenAuth
        },
        // cache: 'no-cache'
    })
    return res.json()
}

// Get Article by slug
export const getArticleBySlug = async (slug) => {
    const res = await fetch(`${apiUrl}/api/articles?filters[slug]=${slug}&populate=deep`, {
        headers: {
            Authorization: tokenAuth
        },
        // cache: 'no-cache'
    })
    return res.json()
}

// Get Case by slug
export const getCaseBySlug = async (slug) => {
    const res = await fetch(`${apiUrl}/api/cases?filters[slug]=${slug}&populate=deep`, {
        headers: {
            Authorization: tokenAuth
        },
        // cache: 'no-cache'
    })
    return res.json()
}

// Get Home page
export const getHome = async () => {
    const res = await fetch(`${apiUrl}/api/home-page?populate=deep`, {
        headers: {
            Authorization: tokenAuth
        },
        // cache: 'no-cache'
    })
    return res.json()
}

// Get Careers page
export const getCareersPage = async () => {
    const res = await fetch(`${apiUrl}/api/careers-page?populate=deep`, {
        headers: {
            Authorization: tokenAuth
        },
        // cache: 'no-cache'
    })
    return res.json()
}

// Get Career by slug
export const getCareerBySlug = async (slug) => {
    const res = await fetch(`${apiUrl}/api/careers?filters[slug]=${slug}&populate=deep`, {
        headers: {
            Authorization: tokenAuth
        },
        // cache: 'no-cache'
    })
    return res.json()
}

// Get About page
export const getAboutPage = async () => {
    const res = await fetch(`${apiUrl}/api/about-page?populate=deep`, {
        headers: {
            Authorization: tokenAuth
        },
        // cache: 'no-cache'
    })
    return res.json()
}
// Get Campaign page
export const getCampaignPage = async () => {
    const res = await fetch(`${apiUrl}/api/campaign-page?populate=deep`, {
        headers: {
            Authorization: tokenAuth
        },
        // cache: 'no-cache'
    })
    return res.json()
}
// Get Articles and Cases
export const getInsightsList = async () => {
    const articlesRes = await fetch(`${apiUrl}/api/articles?populate=article.image`, {
        headers: {
            Authorization: tokenAuth
        },
        cache: 'no-cache'
    })
    const casesRes = await fetch(`${apiUrl}/api/cases?populate=case.image`, {
        headers: {
            Authorization: tokenAuth
        },
        cache: 'no-cache'
    })

    const articles = await articlesRes.json()
    const cases = await casesRes.json()
    const articlesWithType = articles.data.map(article => {
        return { ...article, type: "article" };
    });

    // Add type field to each object in the cases array
    const casesWithType = cases.data.map(caseItem => {
        return { ...caseItem, type: "case" };
    });

    const result = articlesWithType.concat(casesWithType)
    result.sort((a, b) => new Date(b.attributes.createdAt) - new Date(a.attributes.createdAt));

    return result
}

// Get Services page
export const getServicesPage = async () => {
    const res = await fetch(`${apiUrl}/api/services-page?populate=deep`, {
        headers: {
            Authorization: tokenAuth
        },
        // cache: 'no-cache'
    })
    return res.json()
}

// Get Category by slug
export const getCategoryBySlug = async (slug) => {
    const res = await fetch(`${apiUrl}/api/categories?filters[slug]=${slug}&populate=deep`, {
        headers: {
            Authorization: tokenAuth
        },
        // cache: 'no-cache'
    })
    return res.json()
}

// Get Service by slug
export const getServiceBySlug = async (slug) => {
    const res = await fetch(`${apiUrl}/api/services?filters[slug]=${slug}&populate=deep`, {
        headers: {
            Authorization: tokenAuth
        },
        // cache: 'no-cache'
    })
    return res.json()
}

// Get Categories
export const getCategories = async () => {
    const res = await fetch(`${apiUrl}/api/categories?populate=deep&sort=createdAt:asc`, {
        headers: {
            Authorization: tokenAuth
        },
        // cache: 'no-cache'
    })
    return res.json()
}

// Get Footer
export const getFooter = async () => {
    const res = await fetch(`${apiUrl}/api/footer?populate=deep`, {
        headers: {
            Authorization: tokenAuth
        },
        // cache: 'no-cache'
    })
    return res.json()
}

// Get Header
export const getHeader = async () => {
    const res = await fetch(`${apiUrl}/api/header?populate=deep`, {
        headers: {
            Authorization: tokenAuth
        },
        // cache: 'no-cache'
    })
    return res.json()
}

// Get Services Menu
export const getServicesMenu = async () => {
    const res = await fetch(`${apiUrl}/api/root-menu?populate=deep`, {
        headers: {
            Authorization: tokenAuth
        },
        // cache: 'no-cache'
    })
    return res.json()
}

// Get number of jobs
export const getJobsCount = async () => {
    const res = await fetch(`${apiUrl}/api/careers`, {
        headers: {
            Authorization: tokenAuth
        },
        // cache: 'no-cache'
    })
    return res.json()
}

// Disclaimer Page
export const getDisclaimer = async () => {
    const res = await fetch(`${apiUrl}/api/disclaimer?populate=*`, {
        headers: {
            Authorization: tokenAuth
        },
        // cache: 'no-cache'
    })
    return res.json()
}

// Privacy Policy Page
export const getPrivacyPolicy = async () => {
    const res = await fetch(`${apiUrl}/api/privacy-policy-page?populate=*`, {
        headers: {
            Authorization: tokenAuth
        },
        // cache: 'no-cache'
    })
    return res.json()
}