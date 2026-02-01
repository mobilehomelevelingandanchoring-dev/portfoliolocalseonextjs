import { generatePageMetadata } from "@/lib/seo";
import HomeContent from "@/components/HomeContent";
import { generateOrganizationSchema, generatePersonSchema, generateLocalBusinessSchema, generateFAQSchema } from "@/components/seo/JsonLd";

export const metadata = generatePageMetadata({
  title: "Local SEO Experts Katy | #1 Strategic Local SEO & GBP Authority",
  description: "Boost your calls and foot traffic with Katy's leading Local SEO experts. Specialized in Google Business Profile optimization, Map Pack rankings, and semantic topical authority.",
  path: "/",
});

// Add verification directly to the metadata export if needed, 
// though verifyPageMetadata usually handles this if configured.
// Since we are using a custom utility, let's append it.
metadata.verification = {
  google: 'googlefbe376f5e3d91d2e',
};

export default function Home() {
  const services = [
    {
      title: "Google Business Profile Optimization",
      slug: "google-business-profile-optimization",
      desc: "Your Google Business Profile is often the first thing potential customers see. We optimize every element—from photos and posts to categories and attributes—so you show up in the local 3-pack when customers search for your services in Katy.",
      iconId: "shield-check",
      benefits: ["Increase profile visibility", "Optimize business categories", "Improve local pack rankings"]
    },
    {
      title: "Local SEO Services",
      slug: "local-seo",
      desc: "Ranking locally means understanding what your customers actually search for. We build content that answers their questions, establishes your expertise, and signals to Google that you're the go-to authority for your industry in Katy and surrounding areas.",
      iconId: "activity",
      benefits: ["Topical authority building", "Local keyword optimization", "Content strategy that converts"]
    },
    {
      title: "Google Maps Ranking",
      slug: "map-pack-ranking",
      desc: "When someone searches 'near me' or includes Katy in their search, you need to be in the top 3 map results. We focus on the specific ranking factors that matter most: proximity signals, review quality, and business information accuracy.",
      iconId: "map-pin",
      benefits: ["Dominate local map pack", "Proximity optimization", "Local search visibility"]
    },
    {
      title: "GMB Suspension Recovery",
      slug: "gmb-suspension-recovery",
      desc: "A suspended Google Business Profile means lost revenue. Whether it's a soft or hard suspension, we investigate the root cause, fix compliance issues, and handle the entire appeals process to get your business back online fast.",
      iconId: "zap",
      benefits: ["Fast suspension recovery", "Compliance restoration", "Appeal management"]
    },
    {
      title: "Local Citation Building",
      slug: "citation-building",
      desc: "Consistent business information across the web builds trust with both customers and search engines. We ensure your business name, address, and phone number (NAP) are accurate on every major directory and industry-specific platform.",
      iconId: "search",
      benefits: ["NAP consistency", "Directory submissions", "Citation audit & cleanup"]
    },
    {
      title: "Online Reputation Management",
      slug: "reputation-management",
      desc: "Reviews influence 93% of local purchase decisions. We help you earn more positive reviews, respond professionally to feedback, and build a reputation that turns browsers into buyers and one-time customers into loyal advocates.",
      iconId: "award",
      benefits: ["Review generation systems", "Reputation monitoring", "Response management"]
    },
  ];

  const faqs = [
    {
      q: "Why isn't my Katy business showing up on Google Maps?",
      a: "There are several reasons your business might not appear in local search results. Common issues include incomplete Google Business Profile information, inconsistent business listings across directories, lack of customer reviews, or your profile not being properly verified."
    },
    {
      q: "How long does it take to see results from local SEO?",
      a: "Most businesses start seeing improvements within 30-60 days, with significant ranking changes typically occurring within 90 days."
    },
    {
      q: "What happens if my Google Business Profile gets suspended?",
      a: "A suspension can happen for various reasons. We identify why Google suspended your profile, fix any compliance problems, and submit a detailed appeal."
    },
    {
      q: "Do I need local SEO if I already have a website?",
      a: "Yes. Having a website is just the starting point. Local SEO ensures people actually find your website when they search for services like yours in Katy."
    },
    {
      q: "How do you measure local SEO success?",
      a: "We track metrics that matter to your business: Google Business Profile actions (calls, direction requests), local keyword rankings, and lead volume."
    }
  ];

  const industryExpertise = [
    { industry: "Plumbers & HVAC", description: "Emergency service visibility when customers need you most" },
    { industry: "Dentists & Medical", description: "Local trust signals that bring patients to your practice" },
    { industry: "Restaurants", description: "Map pack dominance that fills tables during peak hours" },
    { industry: "Real Estate Agents", description: "Neighborhood authority that generates buyer and seller leads" },
    { industry: "Lawyers & Legal", description: "Local credibility that attracts high-intent clients" },
    { industry: "Home Services", description: "Service area optimization that drives calls and bookings" }
  ];

  const schemas = {
    organization: generateOrganizationSchema(),
    person: generatePersonSchema(),
    localBusiness: generateLocalBusinessSchema("Katy", "TX"),
    faq: generateFAQSchema(faqs),
  };

  return (
    <HomeContent
      services={services}
      faqs={faqs}
      industryExpertise={industryExpertise}
      schemas={schemas}
    />
  );
}