"use client";

import { motion } from "framer-motion";
import {
    CheckCircle2, ShieldCheck, MapPin, Star, Zap,
    ArrowRight, MessageCircle, Phone, Award,
    Search, TrendingUp, Clock, Shield, Activity, LineChart
} from "lucide-react";
import Link from "next/link";
import { JsonLd } from "@/components/seo/JsonLd";

// Icon lookup table
const IconMap: Record<string, any> = {
    "shield-check": ShieldCheck,
    "activity": Activity,
    "map-pin": MapPin,
    "zap": Zap,
    "search": Search,
    "award": Award,
    "star": Star,
    "clock": Clock,
    "trending-up": TrendingUp,
    "line-chart": LineChart,
    "shield": Shield
};

interface HomeContentProps {
    services: any[];
    faqs: any[];
    industryExpertise: any[];
    schemas: any;
}

export default function HomeContent({ services, faqs, industryExpertise, schemas }: HomeContentProps) {
    return (
        <div className="flex flex-col gap-32 pb-32">
            <JsonLd data={schemas.organization} />
            <JsonLd data={schemas.person} />
            <JsonLd data={schemas.localBusiness} />
            <JsonLd data={schemas.faq} />

            {/* Hero Section */}
            <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden px-4 pt-10">
                <div className="absolute inset-0 bg-radial-at-t from-primary/5 via-white to-white" />
                <div className="hero-glow opacity-50" />

                <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-16 items-center z-10">
                    <div className="space-y-10 text-left">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="audit-chip"
                        >
                            <Star className="w-4 h-4 fill-primary text-primary" />
                            Trusted by Katy Business Owners Since 2021
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-6xl md:text-8xl font-black leading-[0.9] tracking-tighter text-slate-900"
                        >
                            Get Found <br />
                            <span className="text-primary italic">By Local Customers</span> in Katy
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="text-xl text-slate-600 max-w-xl leading-relaxed font-medium"
                        >
                            We help Katy businesses like yours show up when customers search on Google Maps and local search. More visibility means more calls, more customers, and more revenue—without expensive ads.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            className="flex flex-wrap gap-3"
                        >
                            {["Rank in the Google 3-Pack", "Get More Customer Reviews", "Increase Phone Calls"].map((benefit: string, i: number) => (
                                <div key={i} className="flex items-center gap-2 bg-slate-50 px-4 py-2 rounded-xl border border-slate-100">
                                    <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0" />
                                    <span className="text-sm font-bold text-slate-700">{benefit}</span>
                                </div>
                            ))}
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="flex flex-wrap gap-4"
                        >
                            <a
                                href="https://wa.me/923474825228"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-primary hover:bg-primary/90 text-white px-10 py-5 rounded-2xl font-black flex items-center gap-3 transition-all shadow-xl shadow-primary/20 group"
                            >
                                <MessageCircle className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                                Get Your Free SEO Analysis
                            </a>
                            <Link
                                href="/audit"
                                className="bg-slate-900 text-white px-10 py-5 rounded-2xl font-black hover:bg-slate-800 transition-all flex items-center gap-2"
                            >
                                See How You Rank <ArrowRight className="w-5 h-5" />
                            </Link>
                        </motion.div>

                        <div className="flex items-center gap-6 pt-8 border-t border-slate-100">
                            <div className="flex -space-x-4">
                                <img
                                    src="/razacheena.png"
                                    alt="Razacheena - Local SEO Expert serving Katy, Texas"
                                    className="w-12 h-12 rounded-full border-4 border-white object-cover shadow-lg z-30"
                                />
                                <div className="w-12 h-12 rounded-full border-4 border-white bg-slate-100 flex items-center justify-center text-xs font-black z-20">250+</div>
                                <div className="w-12 h-12 rounded-full border-4 border-white bg-primary/10 flex items-center justify-center text-primary z-10">
                                    <ShieldCheck className="w-6 h-6" />
                                </div>
                            </div>
                            <div>
                                <p className="text-sm font-black text-slate-900 leading-none mb-1">Helping Katy Businesses Since 2021</p>
                                <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">250+ Local Business Projects</p>
                            </div>
                        </div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="hidden lg:block relative"
                    >
                        <div className="relative">
                            <div className="absolute -inset-4 bg-primary/5 blur-3xl opacity-50 rounded-[4rem]" />
                            <div className="relative glass border-slate-200 overflow-hidden rounded-[3rem] shadow-2xl">
                                <img
                                    src="/traffic-growth.png"
                                    alt="Real local SEO results showing traffic growth for Katy businesses"
                                    className="w-full h-auto object-cover"
                                />
                            </div>

                            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-3xl shadow-xl border border-slate-100 flex items-center gap-4 animate-float">
                                <div className="w-14 h-14 rounded-2xl overflow-hidden border-2 border-primary/20">
                                    <img src="/razacheena.png" alt="Razacheena" className="w-full h-full object-cover" />
                                </div>
                                <div>
                                    <p className="text-[10px] font-black text-slate-400 uppercase">Your Direct Contact</p>
                                    <p className="text-sm font-black text-slate-900">Razacheena</p>
                                </div>
                            </div>

                            <div className="absolute -top-6 -right-6 glass p-4 rounded-2xl border-green-200 bg-green-50/80 flex items-center gap-2 animate-float [animation-delay:2s]">
                                <CheckCircle2 className="w-5 h-5 text-green-600" />
                                <span className="text-xs font-black text-green-700 uppercase tracking-widest">Google Verified Partner</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Why Local SEO Matters */}
            <section className="max-w-7xl mx-auto px-4 w-full">
                <div className="grid md:grid-cols-2 gap-20 items-center">
                    <div className="space-y-10">
                        <div className="section-label">WHY IT MATTERS</div>
                        <h2 className="text-5xl font-black leading-tight text-slate-900">
                            Local Search Is How <br />
                            <span className="text-primary italic">Customers Find You</span>
                        </h2>
                        <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
                            <p>
                                When someone in Katy searches for a plumber, dentist, or restaurant, Google shows them businesses in the <strong>local map pack</strong>—those top 3 results with the map. If you're not there, you're invisible to customers who are ready to buy.
                            </p>
                            <p>
                                Local SEO is different from regular SEO. It's about making sure Google understands <strong>where you're located</strong>, <strong>what services you offer</strong>, and <strong>why you're trustworthy</strong>.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="bg-slate-50 py-32 border-y border-slate-200">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-20 space-y-4">
                        <div className="section-label justify-center">WHAT WE DO</div>
                        <h2 className="text-5xl font-black text-slate-900">Local SEO Services for Katy Businesses</h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {services.map((s: any, i: number) => {
                            const Icon = IconMap[s.iconId] || Search;
                            return (
                                <motion.div
                                    whileHover={{ y: -12 }}
                                    key={i}
                                    className="p-10 bg-white rounded-[3rem] border border-slate-100 hover:border-primary/30 transition-all flex flex-col group h-full shadow-lg"
                                >
                                    <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mb-8 border border-slate-100 group-hover:bg-primary transition-all">
                                        <Icon className="w-8 h-8 text-primary group-hover:text-white" />
                                    </div>
                                    <h3 className="text-2xl font-black mb-4 text-slate-900 group-hover:text-primary">{s.title}</h3>
                                    <p className="text-slate-500 mb-6 flex-grow">{s.desc}</p>
                                    <Link
                                        href={`/services/${s.slug}`}
                                        className="inline-flex items-center gap-2 text-slate-900 font-black uppercase text-xs tracking-widest hover:gap-4 transition-all"
                                    >
                                        Learn More <ArrowRight className="w-4 h-4 text-primary" />
                                    </Link>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* FAQs */}
            <section className="max-w-5xl mx-auto px-4 w-full">
                <div className="text-center mb-16">
                    <h2 className="text-5xl font-black text-slate-900">Local SEO Questions Answered</h2>
                </div>
                <div className="grid gap-6">
                    {faqs.map((item: any, i: number) => (
                        <div key={i} className="p-10 bg-white rounded-[2.5rem] border border-slate-100 hover:border-primary/20 transition-all">
                            <h3 className="font-black text-2xl text-slate-900 mb-4">{item.q}</h3>
                            <p className="text-slate-600 leading-relaxed font-medium">{item.a}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="max-w-7xl mx-auto px-4 w-full">
                <div className="bg-slate-900 rounded-[4rem] p-16 md:p-32 text-center space-y-12">
                    <h2 className="text-5xl md:text-7xl font-black text-white">Ready to Get More <br /> Local Customers?</h2>
                    <div className="flex flex-wrap justify-center gap-6">
                        <a href="https://wa.me/923474825228" className="bg-primary text-white px-12 py-6 rounded-3xl font-black text-xl">
                            Start a Conversation
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
