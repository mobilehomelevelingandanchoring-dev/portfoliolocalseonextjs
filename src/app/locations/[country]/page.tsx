import { generatePageMetadata } from "@/lib/seo";
import CountryContent from "@/components/CountryContent";
import { LOCATIONS } from "@/lib/constants";
import { Metadata } from "next";

interface PageProps {
    params: Promise<{ country: string }>;
}

// Map shared locations to the required format for this page
const regionData: Record<string, { cities: string[], desc: string, localContext: string }> = {};
LOCATIONS.forEach(loc => {
    regionData[loc.country.toLowerCase()] = {
        cities: loc.cities,
        desc: loc.description,
        localContext: `Our ${loc.country} local SEO expertise focuses on the unique search behaviors and high-authority business hubs across the regional market. We optimize your digital entity to dominate ${loc.cities.slice(0, 3).join(', ')} and beyond.`
    };
});

const businessTypes = [
    "Restaurants & Cafes",
    "Medical & Dental Clinics",
    "Real Estate Agencies",
    "Legal Services & Law Firms",
    "Home Services (Plumbers, Electricians, HVAC)",
    "Automotive Services",
    "Beauty & Wellness",
    "Professional Services"
];

export async function generateStaticParams() {
    return LOCATIONS.map((loc) => ({
        country: loc.country.toLowerCase(),
    }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { country } = await params;
    const countryName = country.length <= 3 ? country.toUpperCase() : country.charAt(0).toUpperCase() + country.slice(1);
    const data = regionData[country.toLowerCase()] || { desc: "Local SEO services." };

    return generatePageMetadata({
        title: `Local SEO Services in ${countryName} | Global Ranking Authority`,
        description: data.desc,
        path: `/locations/${country}`,
    });
}

export default async function CountryPage({ params }: PageProps) {
    const { country } = await params;
    const countryKey = country.toLowerCase();
    const data = regionData[countryKey] || {
        cities: [],
        desc: "Helping local businesses rank higher in Google Maps and local search results.",
        localContext: "We provide location-specific local SEO strategies tailored to your market's unique characteristics."
    };
    const countryName = country.length <= 3 ? country.toUpperCase() : country.charAt(0).toUpperCase() + country.slice(1);

    return (
        <CountryContent
            countryName={countryName}
            countryKey={countryKey}
            data={data}
            businessTypes={businessTypes}
        />
    );
}