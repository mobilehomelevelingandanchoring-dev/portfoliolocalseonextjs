import React from 'react';

interface JsonLdProps {
    data: any;
}

export const JsonLd: React.FC<JsonLdProps> = ({ data }) => {
    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
    );
};

const BASE_URL = "https://www.localseoexpertskaty.com";
const BRAND_NAME = "Local SEO Experts Katy";

export const generateOrganizationSchema = () => ({
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": BRAND_NAME,
    "url": BASE_URL,
    "logo": `${BASE_URL}/logo.png`,
    "description": "Leading Local SEO authority in Katy, specializing in GBP optimization, Map Pack rankings, and semantic topical authority.",
    "sameAs": [
        "https://twitter.com/razacheena",
        "https://linkedin.com/in/razacheena"
    ],
    "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+92-347-4825228",
        "contactType": "customer service",
        "availableLanguage": ["English", "Urdu"]
    }
});

export const generatePersonSchema = () => ({
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Razacheena",
    "jobTitle": "Local SEO Expert",
    "url": BASE_URL,
    "image": `${BASE_URL}/razacheena.png`,
    "sameAs": [
        "https://twitter.com/razacheena",
        "https://linkedin.com/in/razacheena"
    ],
    "worksFor": {
        "@type": "Organization",
        "name": BRAND_NAME
    }
});

export const generateLocalBusinessSchema = (city: string = "Katy", state: string = "TX", address: string = "Serving Local Businesses") => ({
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": `${BRAND_NAME}`,
    "image": `${BASE_URL}/logo.png`,
    "address": {
        "@type": "PostalAddress",
        "addressLocality": city,
        "addressRegion": state,
        "addressCountry": "US",
        "streetAddress": address
    },
    "geo": {
        "@type": "GeoCoordinates",
        "latitude": 29.7858,
        "longitude": -95.8245
    },
    "url": BASE_URL,
    "telephone": "+92-347-4825228",
    "priceRange": "$$",
    "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "00:00",
        "closes": "23:59"
    },
    "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5.0",
        "reviewCount": "127"
    }
});

export const generateServiceSchema = (serviceName: string, description: string) => ({
    "@context": "https://schema.org",
    "@type": "Service",
    "name": serviceName,
    "provider": {
        "@type": "LocalBusiness",
        "name": BRAND_NAME
    },
    "description": description,
    "areaServed": {
        "@type": "City",
        "name": "Katy"
    }
});

export const generateFAQSchema = (faqs: { q: string, a: string }[]) => ({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
        "@type": "Question",
        "name": faq.q,
        "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.a
        }
    }))
});

export const generateBreadcrumbSchema = (items: { name: string, item: string }[]) => ({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": item.name,
        "item": `${BASE_URL}${item.item}`
    }))
});
