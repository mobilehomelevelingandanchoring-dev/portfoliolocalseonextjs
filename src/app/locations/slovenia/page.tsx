import { generatePageMetadata } from "@/lib/seo";
import SloveniaContent from "@/components/SloveniaContent";
import { generateFAQSchema } from "@/components/seo/JsonLd";
import { Metadata } from "next";

export const metadata: Metadata = generatePageMetadata({
    title: "Local SEO Expert in Slovenia | Google Maps & Business Profile Optimization",
    description: "Expert local SEO services for Slovenian businesses. Improve your visibility in Google Maps, optimize your Business Profile, and attract more local customers in Ljubljana, Maribor, Celje, and across Slovenia.",
    path: "/locations/slovenia",
});

const generateSloveniaBusinessSchema = () => ({
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Local SEO Expert Slovenia",
    "description": "Expert local SEO services for businesses in Slovenia. Specializing in Google Business Profile optimization, Google Maps ranking, local citation building, and review management for Slovenian companies.",
    "image": "https://www.localseoexpertskaty.com/logo.png",
    "address": {
        "@type": "PostalAddress",
        "addressCountry": "SI",
        "addressRegion": "Slovenia"
    },
    "geo": {
        "@type": "GeoCoordinates",
        "latitude": 46.0569,
        "longitude": 14.5058
    },
    "url": "https://www.localseoexpertskaty.com/locations/slovenia",
    "telephone": "+92-347-4825228",
    "priceRange": "$$",
    "areaServed": [
        {
            "@type": "Country",
            "name": "Slovenia"
        },
        {
            "@type": "City",
            "name": "Ljubljana"
        },
        {
            "@type": "City",
            "name": "Maribor"
        },
        {
            "@type": "City",
            "name": "Celje"
        },
        {
            "@type": "City",
            "name": "Kranj"
        },
        {
            "@type": "City",
            "name": "Koper"
        },
        {
            "@type": "City",
            "name": "Novo mesto"
        }
    ],
    "serviceType": [
        "Local SEO",
        "Google Business Profile Optimization",
        "Google Maps Optimization",
        "Local Citation Building",
        "Review Management",
        "Local Link Building"
    ],
    "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "00:00",
        "closes": "23:59"
    }
});

const sloveniaFaqs = [
    {
        q: "How long does it take to see results from local search optimization?",
        a: "Initial improvements to Google Business Profile typically produce visible changes within weeks as Google processes updates. Broader visibility improvements from citation work, website optimization, and link building develop over months. Most businesses see meaningful improvement in local search visibility within three to six months, with continued gains as ongoing optimization compounds."
    },
    {
        q: "How does local search optimization differ from general SEO?",
        a: "Local search optimization focuses specifically on geographic relevance signals. While general SEO emphasizes domain authority, content depth, and broad keyword targeting, local optimization prioritizes Google Business Profile, citation consistency, local link building, and geographic relevance signals on your website. The two complement each other—a strong website supports local visibility, and local signals can benefit overall search performance."
    },
    {
        q: "Do I need a physical location to rank in local search results?",
        a: "Not necessarily. Google recognizes service area businesses that travel to customers rather than receiving customers at a location. These businesses can appear in local search results for their service areas. However, service area businesses appear differently than storefront businesses and require specific configuration to optimize visibility."
    },
    {
        q: "How important are customer reviews for local rankings?",
        a: "Reviews significantly influence local search rankings. They also influence click-through rates and customer decisions even beyond their ranking impact. A business with numerous positive reviews and thoughtful responses will outperform a similar competitor with few or poor reviews, all else being equal. However, reviews work in combination with other factors—they cannot compensate for fundamental optimization gaps."
    },
    {
        q: "What makes Slovenian local search different from other markets?",
        a: "Slovenia's small size means the local search market is concentrated in fewer population centers with distinct competitive patterns. Slovenian-language content matters for local relevance. The business directory and citation landscape includes Slovenian-specific platforms alongside international ones. Customer behavior patterns, including reliance on specific review platforms and social networks, differ from larger markets."
    },
    {
        q: "Can you guarantee first-page rankings?",
        a: "No legitimate professional can guarantee specific rankings. Search algorithms consider hundreds of factors, many outside anyone's control. What I can guarantee is systematic work following established best practices, transparent reporting on progress, and honest assessment of competitive realities. Businesses that commit to proper optimization consistently see improvement, though the specific ranking position depends on competitive factors."
    },
    {
        q: "How do you measure success?",
        a: "Primary metrics include Google Business Profile performance (views, clicks, calls, direction requests), local search ranking positions for target queries, website traffic from local searches, and ultimately leads and customers attributed to local search visibility. Regular reporting tracks these metrics and connects optimization activities to business outcomes."
    },
    {
        q: "What about paid advertising alongside organic local optimization?",
        a: "Google Ads local campaigns can complement organic optimization, providing immediate visibility while organic efforts develop. However, paid visibility stops when spending stops, while organic visibility provides ongoing returns. Most businesses benefit from focusing primarily on sustainable organic visibility, with paid campaigns as a supplementary tactic for specific situations like new business launches or seasonal promotions."
    }
];

export default function SloveniaPage() {
    const businessSchema = generateSloveniaBusinessSchema();
    const faqSchema = generateFAQSchema(sloveniaFaqs);

    return (
        <SloveniaContent
            businessSchema={businessSchema}
            faqSchema={faqSchema}
        />
    );
}
