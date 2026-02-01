"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
    MapPin, ShieldCheck, Star, Search,
    ArrowRight, MessageCircle, CheckCircle2,
    TrendingUp, Building2, Target, Activity, AlertCircle,
    Users, Globe, FileText, Link2, BarChart3, Briefcase,
    Stethoscope, Home, Car, Utensils, Scale, Dumbbell,
    ChevronRight, Phone, Mail, Clock, Award, Zap
} from "lucide-react";
import { JsonLd } from "@/components/seo/JsonLd";
import Breadcrumbs from "@/components/Breadcrumbs";

const IconMap: Record<string, any> = {
    "map-pin": MapPin,
    "shield-check": ShieldCheck,
    "star": Star,
    "search": Search,
    "check-circle": CheckCircle2,
    "trending-up": TrendingUp,
    "building": Building2,
    "target": Target,
    "activity": Activity,
    "alert-circle": AlertCircle,
    "users": Users,
    "globe": Globe,
    "file-text": FileText,
    "link": Link2,
    "bar-chart": BarChart3,
    "briefcase": Briefcase,
    "stethoscope": Stethoscope,
    "home": Home,
    "car": Car,
    "utensils": Utensils,
    "scale": Scale,
    "dumbbell": Dumbbell,
    "award": Award,
    "zap": Zap
};

interface SloveniaContentProps {
    businessSchema: any;
    faqSchema: any;
}

export default function SloveniaContent({ businessSchema, faqSchema }: SloveniaContentProps) {
    const problems = [
        {
            title: "Incomplete or Unoptimized Business Profiles",
            desc: "Google Business Profile has become the cornerstone of local visibility, yet many Slovenian businesses either have not claimed their profile or have left it incomplete. A profile with missing categories, sparse descriptions, no photos, and outdated information sends signals to Google that the business may not be active or relevant.",
            iconId: "alert-circle"
        },
        {
            title: "Inconsistent Business Information",
            desc: "Your business name, address, and phone number appear in many places online. When this information varies even slightly across sources, it creates confusion for search engines attempting to verify your legitimacy. A street address written differently on your website than on your Google profile undermines trust signals.",
            iconId: "file-text"
        },
        {
            title: "Websites Without Local Relevance",
            desc: "Many business websites in Slovenia were built without local search considerations. They describe services in generic terms without geographic context, lack dedicated pages for specific service areas, and miss opportunities to demonstrate local expertise.",
            iconId: "globe"
        },
        {
            title: "Limited or No Review Strategy",
            desc: "Customer reviews directly influence both rankings and click-through rates. Yet many businesses passively wait for reviews rather than actively encouraging satisfied customers to share their experiences. Others fail to respond to reviews, missing opportunities to demonstrate engagement.",
            iconId: "star"
        }
    ];

    const methodology = [
        {
            title: "Discovery and Audit",
            desc: "Every engagement begins with understanding your current position. I analyze your existing Google Business Profile, website, citation landscape, review profile, and competitive environment. This audit reveals specific gaps and opportunities rather than generic recommendations.",
            iconId: "search"
        },
        {
            title: "Strategy Development",
            desc: "Based on audit findings, I develop a prioritized strategy addressing your specific situation. Not every business needs the same approach. A new restaurant in Ljubljana faces different challenges than an established law firm in Celje or a home services company covering multiple municipalities.",
            iconId: "target"
        },
        {
            title: "Implementation",
            desc: "I handle implementation directly rather than providing recommendations for you to execute. This includes Google Business Profile optimization, citation building and cleanup, on-page optimization for local relevance, content development, and local link building outreach.",
            iconId: "zap"
        },
        {
            title: "Ongoing Optimization",
            desc: "Local search is not a one-time project. Google continuously refines its algorithms, competitors adjust their strategies, and your own business evolves. I provide ongoing optimization including regular profile management, review response support, citation monitoring, and performance tracking.",
            iconId: "activity"
        }
    ];

    const coreServices = [
        {
            title: "Google Business Profile Management",
            desc: "Comprehensive optimization including profile completeness, category optimization, visual content, description and services, posts and updates, Q&A management, and review management systems.",
            iconId: "shield-check"
        },
        {
            title: "Google Maps Optimization",
            desc: "Appearing prominently in map results—particularly the local pack of three listings—requires the combined effect of profile optimization, website relevance, citation consistency, and review strength.",
            iconId: "map-pin"
        },
        {
            title: "Local On-Page Optimization",
            desc: "Location pages for each significant service area, service pages with local context, technical optimization with structured data markup, and internal linking structures that help search engines understand your geographic relevance.",
            iconId: "file-text"
        },
        {
            title: "Local Citation Building",
            desc: "Building citations on platforms relevant to Slovenian businesses including general directories, industry-specific directories, local and regional directories, professional association listings, and chamber of commerce profiles.",
            iconId: "building"
        },
        {
            title: "Local Link Building",
            desc: "Developing link building strategies through local business partnerships, chamber memberships, event sponsorship, local media coverage, industry publications, and local blogger relationships.",
            iconId: "link"
        },
        {
            title: "Review Management",
            desc: "Systems for encouraging reviews from satisfied customers and protocols for responding to all reviews promptly and professionally to build reputation and trust signals.",
            iconId: "star"
        }
    ];

    const industries = [
        { title: "Professional Services", desc: "Law firms, accounting practices, consulting firms, architects, engineers", iconId: "briefcase" },
        { title: "Healthcare Providers", desc: "Medical practices, dental clinics, physiotherapists, psychologists, veterinarians", iconId: "stethoscope" },
        { title: "Home Services", desc: "Plumbers, electricians, HVAC technicians, roofers, landscapers, cleaning services", iconId: "home" },
        { title: "Hospitality & Food", desc: "Restaurants, cafes, bars, hotels, and accommodation providers", iconId: "utensils" },
        { title: "Automotive", desc: "Auto repair shops, dealerships, detailers, and other automotive services", iconId: "car" },
        { title: "Real Estate", desc: "Agencies, individual agents, and property management firms", iconId: "building" },
        { title: "Fitness & Wellness", desc: "Gyms, yoga studios, spas, salons, and wellness practitioners", iconId: "dumbbell" },
        { title: "Retail", desc: "Local shops, specialty retailers, and service-based retail businesses", iconId: "users" }
    ];

    const regions = [
        { name: "Ljubljana & Central Slovenia", desc: "The capital region represents the largest local search market, with the highest competition and greatest potential." },
        { name: "Maribor & Podravska", desc: "Slovenia's second-largest city and surrounding areas present distinct competitive dynamics and customer behavior patterns." },
        { name: "Coastal Region", desc: "Koper, Piran, Izola—tourism seasonality and the mix of local and visitor search behavior create unique optimization considerations." },
        { name: "Kranj & Gorenjska", desc: "The industrial and recreational character of this region shapes local search patterns differently than urban centers." },
        { name: "Celje & Savinjska", desc: "Strong regional identity and business community offer particular opportunities for local visibility." },
        { name: "Novo mesto & Dolenjska", desc: "Growing economic importance and developing local search competition." },
        { name: "Other Regions", desc: "Zasavska, Posavska, Koroška, Pomurska, Goriška, Notranjsko-kraška—each with specific opportunities for local search dominance." }
    ];

    const faqs = [
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

    return (
        <div className="flex flex-col gap-16 md:gap-32 pb-16 md:pb-32">
            <JsonLd data={businessSchema} />
            <JsonLd data={faqSchema} />

            {/* Hero Section */}
            <section className="relative py-16 md:py-32 overflow-hidden bg-slate-50 border-b border-slate-100">
                <div className="hero-glow opacity-30" />
                <div className="max-w-7xl mx-auto px-4 relative z-10">
                    <Breadcrumbs />
                    <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center mt-8 md:mt-12">
                        <div className="space-y-6 md:space-y-8">
                            <div className="audit-chip">
                                <MapPin className="w-4 h-4" />
                                SLOVENIA LOCAL SEO
                            </div>
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black leading-[0.9] tracking-tighter text-slate-900"
                            >
                                Local SEO <br className="hidden sm:block" />
                                Expert in <br className="hidden sm:block" />
                                <span className="text-primary italic">Slovenia</span>
                            </motion.h1>
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.2 }}
                                className="text-lg md:text-xl text-slate-600 leading-relaxed font-medium"
                            >
                                When someone in Ljubljana searches for &quot;najboljša picerija&quot; or a resident of Maribor looks for an accountant, they expect Google to show them relevant businesses nearby. I help Slovenian businesses appear when potential customers search for their services.
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 pt-4"
                            >
                                <a
                                    href="https://wa.me/923474825228"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-primary hover:bg-primary/90 text-white px-8 md:px-10 py-4 md:py-5 rounded-2xl font-black flex items-center justify-center gap-3 transition-all shadow-xl shadow-primary/20 group text-sm md:text-base"
                                >
                                    <MessageCircle className="w-5 h-5 md:w-6 md:h-6 group-hover:rotate-12 transition-transform" />
                                    Get Free Analysis
                                </a>
                                <Link
                                    href="/audit"
                                    className="bg-slate-900 text-white px-8 md:px-10 py-4 md:py-5 rounded-2xl font-black hover:bg-slate-800 transition-all flex items-center justify-center gap-2 text-sm md:text-base"
                                >
                                    See How You Rank <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
                                </Link>
                            </motion.div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4 }}
                            className="relative mt-8 lg:mt-0"
                        >
                            <div className="p-6 md:p-10 bg-white border border-slate-200 rounded-[2rem] md:rounded-[3rem] shadow-2xl relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-4 md:p-8 opacity-5">
                                    <MapPin className="w-32 md:w-48 h-32 md:h-48 text-slate-900" />
                                </div>
                                <div className="space-y-6 md:space-y-8 relative z-10">
                                    <div className="flex items-center justify-between">
                                        <div className="px-3 md:px-4 py-2 bg-green-50 text-green-700 text-xs font-black rounded-full flex items-center gap-2">
                                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                                            SERVING ALL OF SLOVENIA
                                        </div>
                                    </div>
                                    <div className="space-y-4">
                                        <p className="text-xl md:text-2xl font-black text-slate-900">Your Business in the Map Pack</p>
                                        <div className="space-y-3">
                                            <div className="flex items-center justify-between text-sm">
                                                <span className="text-slate-600 font-medium">Profile Visibility</span>
                                                <span className="font-black text-slate-900">+240%</span>
                                            </div>
                                            <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                                                <div className="h-full bg-primary w-[87%]" />
                                            </div>
                                        </div>
                                        <div className="space-y-3">
                                            <div className="flex items-center justify-between text-sm">
                                                <span className="text-slate-600 font-medium">Local Search Clicks</span>
                                                <span className="font-black text-slate-900">+180%</span>
                                            </div>
                                            <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                                                <div className="h-full bg-primary w-[72%]" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Real Results Section */}
            <section className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-12 md:mb-16 space-y-4">
                    <div className="section-label mx-auto">PROVEN RESULTS</div>
                    <h2 className="text-3xl md:text-5xl font-black text-slate-900">
                        Real Google Business Profile <br className="hidden md:block" />
                        <span className="text-primary italic">Performance Data</span>
                    </h2>
                    <p className="text-slate-600 text-base md:text-lg max-w-2xl mx-auto font-medium">
                        These are actual results from a client&apos;s Google Business Profile over a 6-month period (September 2025 - February 2026), demonstrating the impact of systematic local SEO optimization.
                    </p>
                </div>

                {/* Stats Summary */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="p-6 md:p-8 bg-white border border-slate-100 rounded-2xl md:rounded-3xl text-center hover:shadow-xl hover:border-primary/30 transition-all"
                    >
                        <div className="text-3xl md:text-5xl font-black text-primary mb-2">368</div>
                        <div className="text-sm md:text-base text-slate-600 font-medium">Profile Interactions</div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="p-6 md:p-8 bg-white border border-slate-100 rounded-2xl md:rounded-3xl text-center hover:shadow-xl hover:border-primary/30 transition-all"
                    >
                        <div className="text-3xl md:text-5xl font-black text-primary mb-2">188</div>
                        <div className="text-sm md:text-base text-slate-600 font-medium">Direct Calls</div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="p-6 md:p-8 bg-white border border-slate-100 rounded-2xl md:rounded-3xl text-center hover:shadow-xl hover:border-primary/30 transition-all"
                    >
                        <div className="text-3xl md:text-5xl font-black text-primary mb-2">131</div>
                        <div className="text-sm md:text-base text-slate-600 font-medium">Website Clicks</div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="p-6 md:p-8 bg-white border border-slate-100 rounded-2xl md:rounded-3xl text-center hover:shadow-xl hover:border-primary/30 transition-all"
                    >
                        <div className="text-3xl md:text-5xl font-black text-primary mb-2">3,771</div>
                        <div className="text-sm md:text-base text-slate-600 font-medium">Profile Views</div>
                    </motion.div>
                </div>

                {/* Screenshot Gallery */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="bg-white border border-slate-200 rounded-2xl md:rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all"
                    >
                        <Image
                            src="/results/slovenia/gbp-overview.png"
                            alt="Google Business Profile Overview - 368 interactions and 3,771 profile views"
                            width={340}
                            height={600}
                            className="w-full h-auto"
                        />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="bg-white border border-slate-200 rounded-2xl md:rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all"
                    >
                        <Image
                            src="/results/slovenia/gbp-calls.png"
                            alt="Google Business Profile Calls - 188 calls from Business Profile"
                            width={340}
                            height={600}
                            className="w-full h-auto"
                        />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="bg-white border border-slate-200 rounded-2xl md:rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all"
                    >
                        <Image
                            src="/results/slovenia/gbp-chats.png"
                            alt="Google Business Profile Chat Clicks - 49 chat clicks"
                            width={340}
                            height={600}
                            className="w-full h-auto"
                        />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="bg-white border border-slate-200 rounded-2xl md:rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all"
                    >
                        <Image
                            src="/results/slovenia/gbp-website.png"
                            alt="Google Business Profile Website Clicks - 131 website clicks"
                            width={340}
                            height={600}
                            className="w-full h-auto"
                        />
                    </motion.div>
                </div>

                <div className="mt-8 text-center">
                    <p className="text-slate-500 text-sm font-medium">
                        Screenshots from Google Business Profile Performance Dashboard (Sept 2025 - Feb 2026)
                    </p>
                </div>
            </section>

            {/* Introduction Section */}
            <section className="max-w-7xl mx-auto px-4">
                <div className="max-w-4xl">
                    <div className="section-label">UNDERSTANDING THE SLOVENIAN MARKET</div>
                    <h2 className="text-3xl md:text-5xl font-black leading-tight text-slate-900 mt-4 mb-8">
                        How Local Search Works <br className="hidden md:block" />
                        <span className="text-primary italic">in Slovenia</span>
                    </h2>
                    <div className="space-y-6 text-slate-600 text-base md:text-lg leading-relaxed font-medium">
                        <p>
                            Slovenia presents a unique local search environment. With a population of just over two million spread across diverse regions—from the urban density of Ljubljana to the coastal economy of Koper and the industrial centers of Celje and Kranj—local search patterns vary significantly.
                        </p>
                        <p>
                            A business serving customers in Novo mesto faces different competitive dynamics than one targeting the Ljubljana metropolitan area. Understanding these regional nuances is essential for any local search strategy to succeed.
                        </p>
                        <p>
                            I work exclusively with Slovenian businesses to improve their visibility in local search results. This means helping you appear when potential customers search for your services—whether they use specific location terms, general service queries, or the increasingly common expectation that Google simply knows where they are and what they need.
                        </p>
                    </div>
                </div>
            </section>

            {/* Problems Section */}
            <section className="max-w-7xl mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
                    <div className="space-y-6 md:space-y-8 lg:sticky lg:top-32">
                        <div className="section-label">COMMON CHALLENGES</div>
                        <h2 className="text-3xl md:text-5xl font-black leading-tight text-slate-900">
                            Why Local Businesses <br className="hidden md:block" />
                            in Slovenia Struggle <br className="hidden md:block" />
                            <span className="text-primary italic">with Visibility</span>
                        </h2>
                        <p className="text-slate-600 text-base md:text-lg leading-relaxed font-medium">
                            Most business owners I speak with share similar frustrations. They have invested in a website, perhaps even paid for advertising, yet they remain invisible when locals search for exactly what they offer.
                        </p>
                    </div>

                    <div className="space-y-4 md:space-y-6">
                        {problems.map((problem, i) => {
                            const Icon = IconMap[problem.iconId] || AlertCircle;
                            return (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="p-6 md:p-8 bg-white border border-slate-100 rounded-2xl md:rounded-3xl hover:border-red-200 hover:shadow-xl transition-all"
                                >
                                    <div className="flex gap-4 md:gap-6 items-start">
                                        <div className="w-10 h-10 md:w-12 md:h-12 bg-red-50 rounded-xl md:rounded-2xl flex items-center justify-center shrink-0">
                                            <Icon className="w-5 h-5 md:w-6 md:h-6 text-red-600" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg md:text-xl font-black text-slate-900 mb-2">{problem.title}</h3>
                                            <p className="text-slate-600 font-medium leading-relaxed text-sm md:text-base">{problem.desc}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Methodology Section */}
            <section className="bg-slate-900 py-16 md:py-24">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-12 md:mb-16 space-y-4">
                        <div className="section-label text-primary border-primary/30">MY APPROACH</div>
                        <h2 className="text-3xl md:text-5xl font-black text-white">
                            Local SEO Methodology <br className="hidden md:block" />
                            <span className="text-primary italic">That Works</span>
                        </h2>
                        <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto font-medium">
                            Effective local search optimization requires systematic work across multiple areas, each reinforcing the others. I follow a methodology designed to build sustainable visibility.
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                        {methodology.map((step, i) => {
                            const Icon = IconMap[step.iconId] || Activity;
                            return (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="p-6 md:p-8 bg-slate-800/50 border border-slate-700 rounded-2xl md:rounded-3xl hover:border-primary/50 transition-all group"
                                >
                                    <div className="w-12 h-12 md:w-14 md:h-14 bg-primary/10 rounded-xl md:rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary transition-all">
                                        <Icon className="w-6 h-6 md:w-7 md:h-7 text-primary group-hover:text-white transition-colors" />
                                    </div>
                                    <div className="text-xs font-black text-slate-500 mb-2">STEP {i + 1}</div>
                                    <h3 className="text-lg md:text-xl font-black text-white mb-3">{step.title}</h3>
                                    <p className="text-slate-400 font-medium leading-relaxed text-sm md:text-base">{step.desc}</p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Core Services Section */}
            <section className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-12 md:mb-16 space-y-4">
                    <div className="section-label mx-auto">CORE SERVICES</div>
                    <h2 className="text-3xl md:text-5xl font-black text-slate-900">
                        Local SEO Services <br className="hidden md:block" />
                        for <span className="text-primary italic">Slovenian Businesses</span>
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {coreServices.map((service, i) => {
                        const Icon = IconMap[service.iconId] || ShieldCheck;
                        return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="p-6 md:p-10 bg-white border border-slate-100 rounded-2xl md:rounded-3xl hover:shadow-xl hover:border-primary/30 transition-all group"
                            >
                                <div className="w-14 h-14 md:w-16 md:h-16 bg-slate-50 rounded-xl md:rounded-2xl flex items-center justify-center mb-6 md:mb-8 border border-slate-100 group-hover:bg-primary transition-all">
                                    <Icon className="w-7 h-7 md:w-8 md:h-8 text-primary group-hover:text-white transition-colors" />
                                </div>
                                <h3 className="text-xl md:text-2xl font-black text-slate-900 mb-3 md:mb-4">{service.title}</h3>
                                <p className="text-slate-600 leading-relaxed font-medium text-sm md:text-base">{service.desc}</p>
                            </motion.div>
                        );
                    })}
                </div>
            </section>

            {/* Industries Section */}
            <section className="bg-slate-50 py-16 md:py-24 border-y border-slate-100">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-12 md:mb-16 space-y-4">
                        <div className="section-label mx-auto">INDUSTRIES SERVED</div>
                        <h2 className="text-3xl md:text-5xl font-black text-slate-900">
                            Business Types <br className="hidden md:block" />
                            <span className="text-primary italic">I Work With</span>
                        </h2>
                        <p className="text-slate-600 text-base md:text-lg max-w-2xl mx-auto font-medium">
                            Local search optimization applies to any business serving customers in a defined geographic area. I have particular experience with these sectors.
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                        {industries.map((industry, i) => {
                            const Icon = IconMap[industry.iconId] || Briefcase;
                            return (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.05 }}
                                    className="p-5 md:p-6 bg-white border border-slate-100 rounded-xl md:rounded-2xl hover:border-primary/30 hover:shadow-lg transition-all group"
                                >
                                    <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-lg md:rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary transition-all">
                                        <Icon className="w-5 h-5 md:w-6 md:h-6 text-primary group-hover:text-white transition-colors" />
                                    </div>
                                    <h3 className="text-base md:text-lg font-black text-slate-900 mb-2">{industry.title}</h3>
                                    <p className="text-slate-500 font-medium text-sm">{industry.desc}</p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Regions Section */}
            <section className="max-w-7xl mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
                    <div className="space-y-6 md:space-y-8 lg:sticky lg:top-32">
                        <div className="section-label">COVERAGE AREA</div>
                        <h2 className="text-3xl md:text-5xl font-black leading-tight text-slate-900">
                            Cities and Regions <br className="hidden md:block" />
                            <span className="text-primary italic">in Slovenia</span>
                        </h2>
                        <p className="text-slate-600 text-base md:text-lg leading-relaxed font-medium">
                            I work with businesses throughout Slovenia, adapting strategies to the competitive dynamics and customer behavior patterns specific to each region.
                        </p>
                        <p className="text-slate-600 text-base md:text-lg leading-relaxed font-medium">
                            For businesses serving multiple locations or broad service areas, I develop strategies that appropriately target each relevant geography without diluting focus or creating duplicate content issues.
                        </p>
                    </div>

                    <div className="space-y-4">
                        {regions.map((region, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="p-5 md:p-6 bg-white border border-slate-100 rounded-xl md:rounded-2xl hover:border-primary/30 hover:shadow-lg transition-all group flex items-start gap-4"
                            >
                                <div className="w-10 h-10 md:w-12 md:h-12 bg-slate-50 rounded-lg md:rounded-xl flex items-center justify-center shrink-0 group-hover:bg-primary transition-all">
                                    <MapPin className="w-5 h-5 md:w-6 md:h-6 text-primary group-hover:text-white transition-colors" />
                                </div>
                                <div>
                                    <h3 className="text-base md:text-lg font-black text-slate-900 mb-1">{region.name}</h3>
                                    <p className="text-slate-500 font-medium text-sm">{region.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQs Section */}
            <section className="bg-slate-50 py-16 md:py-24 border-y border-slate-100">
                <div className="max-w-4xl mx-auto px-4">
                    <div className="text-center mb-12 md:mb-16 space-y-4">
                        <div className="section-label mx-auto">FREQUENTLY ASKED QUESTIONS</div>
                        <h2 className="text-3xl md:text-5xl font-black text-slate-900">
                            Local SEO in Slovenia: <br className="hidden md:block" />
                            <span className="text-primary italic">Your Questions Answered</span>
                        </h2>
                    </div>

                    <div className="space-y-4 md:space-y-6">
                        {faqs.map((faq, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                                className="p-6 md:p-10 bg-white rounded-2xl md:rounded-[2.5rem] border border-slate-100 hover:border-primary/20 transition-all"
                            >
                                <h3 className="text-lg md:text-xl font-black text-slate-900 mb-3 md:mb-4 flex items-start gap-3 md:gap-4">
                                    <span className="text-xl md:text-2xl text-slate-200 shrink-0">0{i + 1}</span>
                                    <span>{faq.q}</span>
                                </h3>
                                <p className="text-slate-600 leading-relaxed font-medium pl-8 md:pl-12 text-sm md:text-base">{faq.a}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="max-w-7xl mx-auto px-4">
                <div className="bg-slate-900 rounded-[2rem] md:rounded-[4rem] p-8 md:p-16 lg:p-32 text-center space-y-8 md:space-y-12 relative overflow-hidden shadow-2xl">
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute top-10 left-10 w-32 h-32 md:w-64 md:h-64 bg-primary rounded-full blur-3xl" />
                        <div className="absolute bottom-10 right-10 w-48 h-48 md:w-96 md:h-96 bg-primary rounded-full blur-3xl" />
                    </div>
                    <div className="relative z-10 space-y-6 md:space-y-8">
                        <h2 className="text-3xl md:text-5xl lg:text-7xl font-black text-white leading-tight">
                            Ready to Improve Your <br className="hidden md:block" />
                            <span className="text-primary italic">Local Visibility?</span>
                        </h2>
                        <p className="text-slate-400 text-base md:text-xl max-w-2xl mx-auto font-medium">
                            If your business serves customers in Slovenia and you want to appear when those customers search for what you offer, let&apos;s discuss your situation.
                        </p>
                        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 md:gap-6 pt-4">
                            <a
                                href="https://wa.me/923474825228"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-primary hover:bg-white hover:text-slate-900 text-white px-8 md:px-12 py-5 md:py-6 rounded-2xl md:rounded-3xl font-black text-base md:text-xl transition-all shadow-2xl flex items-center justify-center gap-3 group"
                            >
                                <MessageCircle className="w-5 h-5 md:w-6 md:h-6 group-hover:rotate-12 transition-transform" />
                                Start a Conversation
                            </a>
                            <Link
                                href="/audit"
                                className="bg-white/10 hover:bg-white hover:text-slate-900 text-white px-8 md:px-12 py-5 md:py-6 rounded-2xl md:rounded-3xl font-black text-base md:text-xl transition-all flex items-center justify-center gap-2 border border-white/20"
                            >
                                Get Free SEO Audit <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
