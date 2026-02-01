import { generatePageMetadata } from "@/lib/seo";
import CityContent from "@/components/CityContent";
import { generateLocalBusinessSchema } from "@/components/seo/JsonLd";
import { Metadata } from "next";
import { LOCATIONS } from "@/lib/constants";

const locationContent: Record<string, any> = {
    "katy-tx": {
        title: "Local SEO Services in Katy TX | Google Maps Ranking",
        metaDesc: "Get your Katy TX business ranking in Google Maps and local search. Expert local SEO services for businesses in Katy, Texas.",
        intro: "Helping Katy businesses show up when local customers search on Google Maps and local search results.",
        marketContext: "Katy has a competitive local business landscape with thousands of businesses competing for visibility.",
        whyMatters: "When someone in Katy searches for services like yours, Google shows businesses in the local map pack.",
    }
};

interface PageProps {
    params: Promise<{ country: string; city: string }>;
}

export async function generateStaticParams() {
    const paths: { country: string; city: string }[] = [];
    LOCATIONS.forEach((loc) => {
        loc.cities.forEach((city) => {
            paths.push({
                country: loc.country.toLowerCase(),
                city: city.toLowerCase().replace(/\s+/g, '-'),
            });
        });
    });
    return paths;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { country, city } = await params;
    if (!city) return {};

    const cityName = city.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    const data = locationContent[city.toLowerCase()] || {
        title: `Local SEO Services in ${cityName} | Google Maps Ranking`,
        metaDesc: `Get your ${cityName} business ranking in Google Maps and local search. Expert local SEO services for businesses in ${cityName}.`,
    };

    return generatePageMetadata({
        title: data.title,
        description: data.metaDesc,
        path: `/locations/${country}/${city}`,
    });
}

export default async function CityPage({ params }: PageProps) {
    const { country, city } = await params;
    if (!city || !country) return null;

    const formatUrlParam = (param: string) => {
        return param.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    };

    const cityName = formatUrlParam(city);
    const countryName = country.length <= 3 ? country.toUpperCase() : country.charAt(0).toUpperCase() + country.slice(1);

    const data = locationContent[city.toLowerCase()] || {
        intro: `Helping ${cityName} businesses show up when local customers search on Google Maps and local search results.`,
        marketContext: `${cityName} has a competitive local business landscape.`,
        whyMatters: `When someone in ${cityName} searches for services like yours, Google shows businesses in the local map pack—those top 3 results with the map.`,
    };

    const businessSchema = generateLocalBusinessSchema(cityName, countryName);

    // Use iconId string instead of actual components
    const cityServices = [
        { title: "Google Business Profile Optimization", desc: `Optimization for ${cityName}`, iconId: "shield-check" },
        { title: "Map Pack Ranking", desc: `Get into the top 3 in ${cityName}`, iconId: "map-pin" },
        { title: "Local Citation Building", desc: `Consistent info for ${cityName}`, iconId: "search" },
        { title: "Review Management", desc: `Build reputation in ${cityName}`, iconId: "star" }
    ];

    const localChallenges = [
        { title: "High Competition", desc: `Many businesses in ${cityName} compete for the same keyword profile.`, iconId: "target" },
        { title: "Inconsistent Listings", desc: `Fragmented business data across directories is hurting local trust.`, iconId: "alert-circle" },
        { title: "Review Gaps", desc: `Establishing a review velocity that matches top competitors in ${cityName}.`, iconId: "star" }
    ];

    const howWeHelp = [
        { title: "Local Market Analysis", desc: `Reverse-engineering competitor rankings in ${cityName}.`, iconId: "trending-up" },
        { title: "Semantic Entity Tuning", desc: `Aligning your business data with Google's entity graph.`, iconId: "activity" },
        { title: "Citation Engineering", desc: `Professional consistency across the authority directory ring.`, iconId: "building" },
        { title: "Ongoing Optimization", desc: `Constant signals that keep you in the top 3 results.`, iconId: "activity" }
    ];

    const cityFaqs = [
        { q: `How long does it take to rank in ${cityName}?`, a: `Most businesses in ${cityName} see significant improvements within 30-90 days as signals propagate.` },
        { q: `Do you work with a specific industry in ${cityName}?`, a: `We serve all service-based entities including medical, legal, home services, and professional hubs.` }
    ];

    return (
        <CityContent
            cityName={cityName}
            countryName={countryName}
            data={data}
            businessSchema={businessSchema}
            cityServices={cityServices}
            localChallenges={localChallenges}
            howWeHelp={howWeHelp}
            cityFaqs={cityFaqs}
        />
    );
}