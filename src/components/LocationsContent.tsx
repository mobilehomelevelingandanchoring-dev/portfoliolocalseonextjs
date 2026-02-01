"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { MapPin, Globe, ChevronRight, Star, ArrowRight, MessageCircle, CheckCircle2, TrendingUp, Users, Building2, Target } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";

const IconMap: Record<string, any> = {
    "map-pin": MapPin,
    "globe": Globe,
    "star": Star,
    "target": Target,
    "check-circle": CheckCircle2,
    "users": Users,
    "trending-up": TrendingUp,
    "building": Building2
};

interface LocationsContentProps {
    locations: any[];
    businessTypes: any[];
    localRankingFactors: { title: string; description: string; iconId: string }[];
}

export default function LocationsContent({ locations, businessTypes, localRankingFactors }: LocationsContentProps) {
    return (
        <div className="flex flex-col gap-32 pb-32">
            {/* Hero Section */}
            <section className="relative py-32 overflow-hidden bg-slate-50 border-b border-slate-100">
                <div className="hero-glow opacity-30" />
                <div className="max-w-7xl mx-auto px-4 text-center space-y-8 relative z-10">
                    <Breadcrumbs />
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="audit-chip mx-auto"
                    >
                        <Globe className="w-4 h-4" />
                        GLOBAL AUTHORITY NETWORK
                    </motion.div>
                    <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-slate-900 leading-tight">
                        Our Service <span className="text-primary italic">Territories</span>
                    </h1>
                    <p className="text-xl text-slate-600 max-w-3xl mx-auto font-medium leading-relaxed">
                        We deploy advanced semantic SEO and local ranking strategies across 5 countries and 40+ major cities. Select your hub to view our regional lab data.
                    </p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="flex flex-wrap justify-center gap-8 pt-8"
                    >
                        {[
                            { label: "40+ Cities", desc: "Global Coverage", iconId: "check-circle" },
                            { label: "All Industries", desc: "Service Businesses", iconId: "users" },
                            { label: "3+ Years", desc: "Local SEO Focus", iconId: "trending-up" }
                        ].map((stat, i) => {
                            const Icon = IconMap[stat.iconId];
                            return (
                                <div key={i} className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                                        <Icon className="w-5 h-5 text-primary" />
                                    </div>
                                    <div className="text-left">
                                        <p className="text-sm font-black text-slate-900">{stat.label}</p>
                                        <p className="text-xs text-slate-500 font-medium">{stat.desc}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </motion.div>
                </div>
            </section>

            {/* Why Location-Specific SEO Matters */}
            <section className="max-w-7xl mx-auto px-4 w-full">
                <div className="text-center mb-16 space-y-4">
                    <div className="section-label mx-auto">THE LOCAL ADVANTAGE</div>
                    <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
                        Why Your Location Matters <br />
                        <span className="text-primary italic">to Google</span>
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {localRankingFactors.map((factor: any, i: number) => {
                        const Icon = IconMap[factor.iconId] || Target;
                        return (
                            <div key={i} className="p-8 bg-white border border-slate-100 rounded-3xl hover:border-primary/30 transition-all group">
                                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary transition-all">
                                    <Icon className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
                                </div>
                                <h3 className="text-xl font-black text-slate-900 mb-3">{factor.title}</h3>
                                <p className="text-sm text-slate-600 leading-relaxed font-medium">{factor.description}</p>
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* Cities We Serve - Main Section */}
            <section className="max-w-7xl mx-auto px-4 w-full">
                <div className="text-center mb-20 space-y-4">
                    <div className="section-label mx-auto">WHERE WE WORK</div>
                    <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
                        Authority Hubs & <br />
                        <span className="text-primary italic">Regional Labs</span>
                    </h2>
                    <p className="text-lg text-slate-600 max-w-3xl mx-auto font-medium">
                        Click any territory to view specific city directories and localized ranking strategies.
                    </p>
                </div>

                <div className="space-y-24">
                    {locations.map((region: any, i: number) => (
                        <div key={region.country} className="space-y-12">
                            {/* Region Header */}
                            <div className="flex flex-col md:flex-row md:items-center gap-6">
                                <div className="flex items-center gap-6 flex-1">
                                    <div className="w-16 h-16 bg-slate-900 rounded-2xl flex items-center justify-center text-white shrink-0 shadow-xl">
                                        <Globe className="w-8 h-8" />
                                    </div>
                                    <div className="flex flex-col">
                                        <h3 className="text-4xl font-black text-slate-900 tracking-tight">
                                            {region.country} Hub
                                        </h3>
                                        <p className="text-slate-500 font-medium text-sm mt-1 max-w-2xl">
                                            {region.description}
                                        </p>
                                    </div>
                                </div>
                                <Link
                                    href={`/locations/${region.country.toLowerCase()}`}
                                    className="px-8 py-4 bg-primary text-white rounded-2xl font-black text-sm hover:scale-105 transition-all shadow-xl shadow-primary/20"
                                >
                                    OPEN {region.country} HUB
                                </Link>
                            </div>

                            {/* City Grid - Compact preview */}
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                                {region.cities.map((city: string) => (
                                    <Link
                                        key={city}
                                        href={`/locations/${region.country.toLowerCase()}/${city.toLowerCase().replace(/\s+/g, '-')}`}
                                        className="p-4 bg-white border border-slate-100 hover:border-primary/40 rounded-2xl text-center transition-all group"
                                    >
                                        <span className="text-sm font-bold text-slate-600 group-hover:text-primary transition-colors">{city}</span>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Business Types We Serve */}
            <section className="bg-slate-50 py-32 border-y border-slate-100">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16 space-y-4">
                        <div className="section-label mx-auto">WHO WE HELP</div>
                        <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
                            Service-Based Entities <br />
                            <span className="text-primary italic">Under Management</span>
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {businessTypes.map((type: { category: string, examples: string }, i: number) => (
                            <div key={i} className="p-10 bg-white border border-slate-100 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all">
                                <h3 className="text-xl font-black text-slate-900 mb-4 flex items-center gap-3">
                                    <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                                        <Building2 className="w-5 h-5 text-primary" />
                                    </div>
                                    {type.category}
                                </h3>
                                <p className="text-sm text-slate-500 font-medium leading-relaxed">{type.examples}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="max-w-7xl mx-auto px-4 w-full">
                <div className="bg-slate-900 rounded-[4rem] p-16 md:p-32 text-center space-y-12 relative overflow-hidden shadow-2xl">
                    <div className="absolute top-0 left-0 w-full h-full bg-primary/10 pointer-events-none" />
                    <div className="hero-glow opacity-10" />
                    <h2 className="text-5xl md:text-7xl font-black text-white leading-tight relative z-10 tracking-tighter">Ready to Dominate <br />Your Local Market?</h2>
                    <p className="text-slate-400 max-w-md mx-auto relative z-10 font-medium text-xl">Let's build a semantic topical map for your business territory and force Google to recognize your authority.</p>
                    <div className="flex flex-wrap justify-center gap-6 relative z-10">
                        <a href="https://wa.me/923474825228" target="_blank" rel="noopener noreferrer" className="bg-primary hover:bg-white hover:text-slate-900 text-white px-12 py-6 rounded-3xl font-black text-xl transition-all shadow-2xl shadow-primary/20 flex items-center gap-3">
                            <MessageCircle className="w-6 h-6" /> Start Hub Access
                        </a>
                        <Link href="/audit" className="bg-transparent text-white px-12 py-6 rounded-3xl font-black text-xl hover:bg-white/5 transition-all border border-white/20">
                            Request Audit
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
