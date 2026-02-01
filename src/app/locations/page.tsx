import { generatePageMetadata } from "@/lib/seo";
import LocationsContent from "@/components/LocationsContent";
import { LOCATIONS } from "@/lib/constants";
import { Metadata } from "next";

export const metadata: Metadata = generatePageMetadata({
    title: "Our Service Territories | Global Local SEO Authority",
    description: "Explore our global local SEO service territories. We provide advanced semantic SEO and map pack ranking across 40+ major cities worldwide.",
    path: "/locations",
});

export default function LocationsPage() {
    const businessTypes = [
        { category: "Medical & Health", examples: "Dentists, Chiropractors, Medical Spas, Physical Therapists" },
        { category: "Home Services", examples: "Plumbers, HVAC, Electricians, Roofers, Landscapers" },
        { category: "Legal & Professional", examples: "Lawyers, Accountants, Real Estate Agencies, Insurance" },
        { category: "Food & Hospitality", examples: "Restaurants, Cafes, Catering, Boutique Hotels" },
        { category: "Automotive", examples: "Tire Shops, Mechanics, Car Detailing, Dealerships" },
        { category: "Beauty & Wellness", examples: "Hair Salons, Day Spas, Gyms, Yoga Studios" }
    ];

    const localRankingFactors = [
        { title: "Proximity Signals", description: "Optimizing your entity's radius to match high-intent local searchers.", iconId: "map-pin" },
        { title: "Review Velocity", description: "Building a high-frequency trust signal through consistent customer feedback.", iconId: "star" },
        { title: "Citation Depth", description: "Ensuring 100% NAP consistency across the global authority network.", iconId: "globe" },
        { title: "Topical Relevance", description: "Creating content that proves your authority in your specific neighborhood.", iconId: "target" }
    ];

    return (
        <LocationsContent
            locations={LOCATIONS}
            businessTypes={businessTypes}
            localRankingFactors={localRankingFactors}
        />
    );
}