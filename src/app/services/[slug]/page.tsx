import { generatePageMetadata } from "@/lib/seo";
import ServiceContent from "@/components/ServiceContent";
import { Metadata } from "next";

const serviceData: Record<string, any> = {
    "local-seo": {
        title: "Local SEO Services",
        shortTitle: "Local SEO Strategy",
        desc: "Comprehensive local search optimization that helps your business show up when customers in your area search for what you offer.",
        iconId: "globe",
        process: [
            "Analyze your current local search visibility",
            "Research competitors and opportunities",
            "Optimize website content for local keywords",
            "Implement technical SEO elements",
            "Track rankings and adjust strategy"
        ]
    },
    "google-business-profile-optimization": {
        title: "Google Business Profile Optimization",
        shortTitle: "GBP Optimization",
        desc: "Complete optimization of your Google Business Profile so it appears when customers search for businesses like yours.",
        iconId: "shield-check",
        process: [
            "Verify or claim your Google Business Profile",
            "Complete every section with optimized information",
            "Add high-quality photos and business details",
            "Set up post scheduling",
            "Monitor insights and optimize"
        ]
    },
    "gmb-suspension-recovery": {
        title: "GMB Suspension Recovery",
        shortTitle: "Suspension Recovery",
        desc: "Fast, compliant recovery service for suspended Google Business Profiles. We handle the entire reinstatement process.",
        iconId: "zap",
        process: [
            "Emergency assessment of suspension type",
            "Identify and document compliance issues",
            "Correct violations and prepare documentation",
            "Submit professional appeal to Google",
            "Follow up until reinstatement"
        ]
    },
    "map-pack-ranking": {
        title: "Google Maps Ranking Services",
        shortTitle: "Map Pack Ranking",
        desc: "Specialized optimization to rank your business in the Google Map Pack—the top 3 local results.",
        iconId: "map-pin",
        process: [
            "Analyze current map pack positions",
            "Optimize Google Business Profile for relevance",
            "Build and strengthen prominence signals",
            "Monitor rankings across service area",
            "Continuously optimize signals"
        ]
    },
    "citation-building": {
        title: "Local Citation Building Services",
        shortTitle: "Citation Building",
        desc: "Professional citation building and NAP consistency management across all major directories.",
        iconId: "search",
        process: [
            "Audit existing citations",
            "Submit to major directories",
            "Build industry-specific citations",
            "Clean up duplicates",
            "Monitor and maintain consistency"
        ]
    },
    "reputation-management": {
        title: "Online Reputation Management",
        shortTitle: "Reputation Management",
        desc: "Comprehensive review management and reputation building services.",
        iconId: "star",
        process: [
            "Set up review monitoring",
            "Implement review request system",
            "Create response templates",
            "Manage ongoing review responses",
            "Provide monthly reputation reports"
        ]
    },
    "multi-location-seo": {
        title: "Multi-Location SEO Services",
        shortTitle: "Multi-Location SEO",
        desc: "Comprehensive SEO strategies for businesses with multiple locations or franchises.",
        iconId: "layers",
        process: [
            "Audit all current locations",
            "Create individual optimization strategies",
            "Build unique location pages",
            "Optimize all Google Business Profiles",
            "Centralized reporting and tracking"
        ]
    },
    "local-link-building": {
        title: "Local Link Building Services",
        shortTitle: "Local Link Building",
        desc: "Strategic link building focused on earning backlinks from local websites and organizations.",
        iconId: "activity",
        process: [
            "Research local link opportunities",
            "Identify partnerships and sponsorships",
            "Reach out to local media and orgs",
            "Create link-worthy local assets",
            "Track link impact on rankings"
        ]
    },
    "local-technical-seo": {
        title: "Local Technical SEO",
        shortTitle: "Technical SEO",
        desc: "The technical foundation of local search success including schema and speed.",
        iconId: "settings",
        process: [
            "Comprehensive technical audit",
            "Prioritize issues based on impact",
            "Implement LocalBusiness schema",
            "Fix mobile and speed issues",
            "Maintain technical health"
        ]
    }
};

interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return Object.keys(serviceData).map((slug) => ({
        slug,
    }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    if (!slug) return {};
    const data = serviceData[slug] || serviceData["local-seo"];

    return generatePageMetadata({
        title: `${data.title} | Local SEO Experts Katy`,
        description: data.desc,
        path: `/services/${slug}`,
    });
}

export default async function ServicePage({ params }: PageProps) {
    const { slug } = await params;
    if (!slug) return null;
    const data = serviceData[slug] || serviceData["local-seo"];

    const relatedServices = Object.keys(serviceData)
        .filter(s => s !== slug)
        .slice(0, 3)
        .map(key => ({
            slug: key,
            title: serviceData[key].shortTitle,
            iconId: serviceData[key].iconId
        }));

    return (
        <ServiceContent data={data} relatedServices={relatedServices} />
    );
}