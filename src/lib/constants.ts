export interface BlogPost {
    title: string;
    excerpt: string;
    date: string;
    author: string;
    category: string;
    slug: string;
}

export const BLOG_POSTS: BlogPost[] = [
    {
        title: "The Koray Semantic SEO Framework for Local Businesses",
        excerpt: "How to move beyond simple keywords and build a topical map that forces Google to see your local business as an authority.",
        date: "Jan 15, 2026",
        author: "Razacheena",
        category: "Semantic SEO",
        slug: "koray-semantic-seo-framework-local"
    },
    {
        title: "Why Most GMB Reinstatement Requests Fail",
        excerpt: "Avoid the common mistakes business owners make when trying to fix a suspended Google Business Profile listing.",
        date: "Jan 10, 2026",
        author: "Razacheena",
        category: "GMB Recovery",
        slug: "why-gmb-reinstatements-fail"
    },
    {
        title: "Mastering the Google Map Pack in 2026",
        excerpt: "A deep dive into proximity, prominence, and relevance signals that drive local search rankings this year.",
        date: "Jan 05, 2026",
        author: "Razacheena",
        category: "Map Pack",
        slug: "mastering-google-map-pack-2026"
    }
];

export interface LocationHub {
    country: string;
    description: string;
    cities: string[];
}

export const LOCATIONS: LocationHub[] = [
    {
        country: "USA",
        description: "Dominate the world's most competitive local search market with advanced Map Pack strategies and semantic entity mapping.",
        cities: ["Katy TX", "Houston", "New York", "Los Angeles", "Chicago", "Dallas", "Miami", "San Francisco", "Austin", "Seattle", "Boston"]
    },
    {
        country: "UK",
        description: "Strategic local optimization for the unique British digital ecosystem, focusing on high-authority UK directories and reviews.",
        cities: ["London", "Manchester", "Stockport", "Birmingham", "Leeds", "Liverpool", "Bristol"]
    },
    {
        country: "Canada",
        description: "Hyper-local search presence across the provinces, bridging the gap between national authority and neighborhood relevance.",
        cities: ["Toronto", "Vancouver", "Calgary", "Mississauga", "Brampton", "Markham"]
    },
    {
        country: "Australia",
        description: "Proven Map Pack rankings for the Australian market, optimized for the specific search behaviors of the APAC region.",
        cities: ["Sydney", "Melbourne", "Brisbane", "Perth", "Adelaide", "Gold Coast"]
    },
    {
        country: "Dubai",
        description: "Elite local SEO for the UAE's commercial hubs, focusing on high-intent searchers in the Gulf's business capital.",
        cities: ["Dubai Marina", "Business Bay", "Downtown Dubai", "JLT", "Deira", "Bur Dubai"]
    },
    {
        country: "Slovenia",
        description: "Expert local SEO for the Slovenian market, with deep understanding of regional search patterns from Ljubljana to the coastal cities.",
        cities: ["Ljubljana", "Maribor", "Celje", "Kranj", "Koper", "Novo Mesto", "Piran", "Izola"]
    }
];

export const SERVICES = [
    "local-seo",
    "google-business-profile-optimization",
    "map-pack-ranking",
    "citation-building",
    "gmb-suspension-recovery",
    "reputation-management",
    "multi-location-seo",
    "local-link-building",
    "local-technical-seo"
];
