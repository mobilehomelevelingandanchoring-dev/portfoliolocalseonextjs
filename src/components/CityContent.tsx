"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
    MapPin, ShieldCheck, Star, Search,
    ArrowRight, MessageCircle, CheckCircle2,
    TrendingUp, Building2, Target, Activity, AlertCircle
} from "lucide-react";
import { JsonLd } from "@/components/seo/JsonLd";
import Breadcrumbs from "@/components/Breadcrumbs";

// Icon lookup table to solve serialization issues
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
    "alert-circle": AlertCircle
};

interface CityContentProps {
    cityName: string;
    countryName: string;
    data: any;
    businessSchema: any;
    cityServices: { title: string; desc: string; iconId: string }[];
    localChallenges: { title: string; desc: string; iconId: string }[];
    howWeHelp: { title: string; desc: string; iconId: string }[];
    cityFaqs: { q: string; a: string }[];
}

export default function CityContent({
    cityName,
    countryName,
    data,
    businessSchema,
    cityServices,
    localChallenges,
    howWeHelp,
    cityFaqs
}: CityContentProps) {
    return (
        <div className="flex flex-col gap-32 pb-32">
            <JsonLd data={businessSchema} />

            {/* Hero Section */}
            <section className="relative py-32 overflow-hidden bg-slate-50 border-b border-slate-100">
                <div className="hero-glow opacity-30" />
                <div className="max-w-7xl mx-auto px-4 relative z-10">
                    <Breadcrumbs />
                    <div className="grid lg:grid-cols-2 gap-16 items-center mt-12">
                        <div className="space-y-8">
                            <div className="audit-chip">
                                <MapPin className="w-4 h-4" />
                                {cityName.toUpperCase()} LOCAL SEO
                            </div>
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-6xl md:text-8xl font-black leading-[0.9] tracking-tighter text-slate-900"
                            >
                                Local SEO <br />
                                Services in <br />
                                <span className="text-primary italic">{cityName}</span>
                            </motion.h1>
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.2 }}
                                className="text-xl text-slate-600 leading-relaxed font-medium"
                            >
                                {data.intro}
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="flex flex-wrap gap-4 pt-4"
                            >
                                <a
                                    href="https://wa.me/923474825228"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-primary hover:bg-primary/90 text-white px-10 py-5 rounded-2xl font-black flex items-center gap-3 transition-all shadow-xl shadow-primary/20 group"
                                >
                                    <MessageCircle className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                                    Get Free Analysis
                                </a>
                                <Link
                                    href="/audit"
                                    className="bg-slate-900 text-white px-10 py-5 rounded-2xl font-black hover:bg-slate-800 transition-all flex items-center gap-2"
                                >
                                    See How You Rank <ArrowRight className="w-5 h-5" />
                                </Link>
                            </motion.div>
                        </div>

                        <div className="relative">
                            <div className="p-10 bg-white border border-slate-200 rounded-[3rem] shadow-2xl relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-8 opacity-5">
                                    <MapPin className="w-48 h-48 text-slate-900" />
                                </div>
                                <div className="space-y-8 relative z-10">
                                    <div className="flex items-center justify-between">
                                        <div className="px-4 py-2 bg-green-50 text-green-700 text-xs font-black rounded-full flex items-center gap-2">
                                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                                            LIVE IN {cityName.toUpperCase()}
                                        </div>
                                    </div>
                                    <div className="space-y-4">
                                        <p className="text-2xl font-black text-slate-900">Your Business in the Map Pack</p>
                                        <div className="space-y-3">
                                            <div className="flex items-center justify-between text-sm">
                                                <span className="text-slate-600 font-medium">Profile Visibility</span>
                                                <span className="font-black text-slate-900">+240%</span>
                                            </div>
                                            <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                                                <div className="h-full bg-primary w-[87%]" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Local SEO Matters */}
            <section className="max-w-7xl mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    <div className="space-y-8">
                        <div className="section-label">WHY IT MATTERS IN {cityName.toUpperCase()}</div>
                        <h2 className="text-5xl font-black leading-tight text-slate-900">
                            Local Search Is <br />
                            How {cityName} <br />
                            <span className="text-primary italic">Finds You</span>
                        </h2>
                        <div className="space-y-6 text-slate-600 text-lg leading-relaxed font-medium">
                            <p>{data.whyMatters}</p>
                            <p>{data.marketContext}</p>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <h3 className="text-2xl font-black text-slate-900">Common Challenges in {cityName}</h3>
                        {localChallenges.map((challenge, i) => {
                            const Icon = IconMap[challenge.iconId] || AlertCircle;
                            return (
                                <div key={i} className="p-8 bg-white border border-slate-100 rounded-3xl hover:border-primary/30 transition-all">
                                    <div className="flex gap-6 items-start">
                                        <div className="w-12 h-12 bg-red-50 rounded-2xl flex items-center justify-center shrink-0">
                                            <Icon className="w-6 h-6 text-red-600" />
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-black text-slate-900 mb-2">{challenge.title}</h4>
                                            <p className="text-slate-600 font-medium leading-relaxed">{challenge.desc}</p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="bg-slate-50 py-24 border-y border-slate-100">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16 space-y-4">
                        <div className="section-label mx-auto">OUR {cityName.toUpperCase()} SERVICES</div>
                        <h2 className="text-5xl font-black text-slate-900">
                            Local SEO Services <br />
                            for {cityName} Businesses
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {cityServices.map((service, i) => {
                            const Icon = IconMap[service.iconId] || ShieldCheck;
                            return (
                                <div key={i} className="p-10 bg-white border border-slate-100 rounded-3xl hover:shadow-xl transition-all group">
                                    <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mb-8 border border-slate-100 group-hover:bg-primary transition-all">
                                        <Icon className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
                                    </div>
                                    <h3 className="text-2xl font-black text-slate-900 mb-4">{service.title}</h3>
                                    <p className="text-slate-600 leading-relaxed font-medium">{service.desc}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* FAQs */}
            <section className="max-w-4xl mx-auto px-4">
                <div className="text-center mb-16 space-y-4">
                    <div className="section-label mx-auto">COMMON QUESTIONS</div>
                    <h2 className="text-5xl font-black text-slate-900">
                        Local SEO in {cityName}: <br />
                        <span className="text-primary italic">Your Questions</span>
                    </h2>
                </div>

                <div className="space-y-6">
                    {cityFaqs.map((faq, i) => (
                        <div key={i} className="p-10 bg-white rounded-[2.5rem] border border-slate-100 hover:border-primary/20 transition-all">
                            <h3 className="text-xl font-black text-slate-900 mb-4 flex items-start gap-4">
                                <span className="text-2xl text-slate-200 shrink-0">0{i + 1}</span>
                                {faq.q}
                            </h3>
                            <p className="text-slate-600 leading-relaxed font-medium pl-12">{faq.a}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="max-w-7xl mx-auto px-4">
                <div className="bg-slate-900 rounded-[4rem] p-16 md:p-32 text-center space-y-12 relative overflow-hidden shadow-2xl">
                    <h2 className="text-5xl md:text-7xl font-black text-white leading-tight">
                        Ready to Rank in <br />
                        {cityName}?
                    </h2>
                    <div className="flex flex-wrap justify-center gap-6 relative z-10">
                        <a
                            href="https://wa.me/923474825228"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-primary hover:bg-white hover:text-slate-900 text-white px-12 py-6 rounded-3xl font-black text-xl transition-all shadow-2xl flex items-center gap-3 group"
                        >
                            <MessageCircle className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                            Get Started in {cityName}
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
