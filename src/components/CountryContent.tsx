"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { MapPin, Globe, ChevronRight, Star, ArrowRight, MessageCircle, CheckCircle2, TrendingUp, Users, Award, Building2, Target } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function CountryContent({ countryName, countryKey, data, businessTypes }: any) {
    return (
        <div className="pb-32">
            {/* Hero Section */}
            <section className="relative py-32 overflow-hidden bg-slate-50 border-b border-slate-100">
                <div className="hero-glow opacity-30" />
                <div className="max-w-7xl mx-auto px-4 text-center space-y-8 relative z-10">
                    <Breadcrumbs />
                    <div className="audit-chip mx-auto">
                        <MapPin className="w-4 h-4" />
                        {countryName.toUpperCase()} LOCAL SEO
                    </div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-black tracking-tighter text-slate-900"
                    >
                        Local SEO Services in <br />
                        <span className="text-primary italic">{countryName}</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-slate-600 max-w-3xl mx-auto font-medium leading-relaxed"
                    >
                        {data.desc}
                    </motion.p>

                    {/* Trust indicators */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="flex flex-wrap justify-center gap-6 pt-8"
                    >
                        <div className="flex items-center gap-2 bg-white px-6 py-3 rounded-2xl border border-slate-100 shadow-sm">
                            <CheckCircle2 className="w-5 h-5 text-green-600" />
                            <span className="text-sm font-bold text-slate-700">{data.cities.length} Cities Covered</span>
                        </div>
                        <div className="flex items-center gap-2 bg-white px-6 py-3 rounded-2xl border border-slate-100 shadow-sm">
                            <Users className="w-5 h-5 text-primary" />
                            <span className="text-sm font-bold text-slate-700">All Local Businesses</span>
                        </div>
                        <div className="flex items-center gap-2 bg-white px-6 py-3 rounded-2xl border border-slate-100 shadow-sm">
                            <Award className="w-5 h-5 text-primary" />
                            <span className="text-sm font-bold text-slate-700">3+ Years Experience</span>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Why Location-Specific SEO Matters */}
            <section className="max-w-7xl mx-auto px-4 py-24">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8">
                        <div className="section-label">LOCAL MARKET EXPERTISE</div>
                        <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
                            Why {countryName} Businesses <br />
                            Need <span className="text-primary italic">Local SEO</span>
                        </h2>
                        <div className="space-y-6 text-slate-600 text-lg leading-relaxed font-medium">
                            <p>
                                When someone in {countryName} searches for "plumber near me," "best restaurant in [city]," or "dentist in [neighborhood]," Google shows businesses that are close to them and have strong local presence signals.
                            </p>
                            <p>
                                {data.localContext}
                            </p>
                            <p>
                                Our local SEO services help your business appear in the <strong>Google Map Pack</strong> (the top 3 local results), improve your Google Business Profile visibility, and ensure customers in your area can find you when they're ready to buy.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-4 pt-4">
                            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                                <TrendingUp className="w-8 h-8 text-primary mb-3" />
                                <p className="font-black text-slate-900 mb-1">Higher Rankings</p>
                                <p className="text-xs text-slate-600 font-medium">Show up when customers search in your city</p>
                            </div>
                            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                                <Users className="w-8 h-8 text-primary mb-3" />
                                <p className="font-black text-slate-900 mb-1">More Customers</p>
                                <p className="text-xs text-slate-600 font-medium">Turn local searches into phone calls and visits</p>
                            </div>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="absolute -inset-4 bg-primary/5 rounded-[4rem] -z-10" />
                        <div className="p-10 bg-white rounded-[3rem] border border-slate-100 shadow-xl space-y-8">
                            <h3 className="text-2xl font-black text-slate-900">What We Do in {countryName}</h3>
                            <div className="space-y-6">
                                {[
                                    {
                                        title: "Google Business Profile Optimization",
                                        desc: "Complete profile setup with accurate location data, photos, posts, and responses to reviews"
                                    },
                                    {
                                        title: "Local Citation Building",
                                        desc: "Ensure your business information is consistent across all major directories and platforms"
                                    },
                                    {
                                        title: "Location-Specific Content",
                                        desc: "Create pages and content targeting searches in the cities and neighborhoods you serve"
                                    },
                                    {
                                        title: "Review Management",
                                        desc: "Help you earn more positive reviews and respond professionally to all customer feedback"
                                    }
                                ].map((item: { title: string, desc: string }, i: number) => (
                                    <div key={i} className="flex gap-4 items-start">
                                        <div className="w-10 h-10 bg-primary/10 rounded-xl shrink-0 flex items-center justify-center">
                                            <CheckCircle2 className="w-5 h-5 text-primary" />
                                        </div>
                                        <div>
                                            <p className="font-black text-slate-900 mb-1 text-sm">{item.title}</p>
                                            <p className="text-xs text-slate-600 font-medium leading-relaxed">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Cities We Serve */}
            <section className="bg-slate-50 py-24 border-y border-slate-100">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16 space-y-4">
                        <div className="section-label mx-auto">CITIES WE SERVE</div>
                        <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
                            Local SEO Services Across <br />
                            {countryName}
                        </h2>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto font-medium">
                            We provide location-specific local SEO strategies for businesses in {data.cities.length} major cities across {countryName}. Click any city to learn about our services in that area.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {data.cities.map((city: string) => (
                            <Link
                                key={city}
                                href={`/locations/${countryKey}/${city.toLowerCase().replace(/\s+/g, '-')}`}
                                className="group relative p-8 bg-white border border-slate-200 hover:border-primary/50 transition-all rounded-[2.5rem] shadow-sm hover:shadow-xl hover:-translate-y-2 overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-10 transition-opacity">
                                    <MapPin className="w-16 h-16 text-primary" />
                                </div>
                                <div className="relative z-10 flex flex-col gap-4">
                                    <div className="flex items-center gap-1">
                                        <Star className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                                        <Star className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity delay-75" />
                                        <Star className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity delay-150" />
                                    </div>
                                    <span className="text-xl font-black text-slate-900 leading-tight block">{city}</span>
                                    <div className="flex items-center gap-2 text-primary font-black text-[10px] uppercase tracking-widest">
                                        View Services <ChevronRight className="w-3 h-3" />
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Business Types */}
            <section className="max-w-7xl mx-auto px-4 py-24">
                <div className="text-center mb-16 space-y-4">
                    <div className="section-label mx-auto">WHO WE HELP</div>
                    <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
                        {countryName} Businesses <br />
                        We Help Rank
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto font-medium">
                        We work with all types of local service-based businesses across {countryName}. If you serve customers in a specific area, we can help you get found.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {businessTypes.map((type: string, i: number) => (
                        <div key={i} className="p-6 bg-white border border-slate-100 rounded-2xl hover:border-primary/20 transition-all group">
                            <div className="flex items-start gap-3">
                                <Building2 className="w-5 h-5 text-primary shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                                <p className="font-black text-slate-900 text-sm leading-tight">{type}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12 p-6 bg-slate-50 rounded-3xl border border-slate-100">
                    <p className="text-slate-700 font-medium">
                        <strong>And many more.</strong> Any business that serves customers in {countryName} can benefit from local SEO.
                    </p>
                </div>
            </section>

            {/* CTA */}
            <section className="max-w-7xl mx-auto px-4 w-full">
                <div className="bg-slate-900 rounded-[4rem] p-16 md:p-32 text-center space-y-12 relative overflow-hidden shadow-2xl">
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/10 to-transparent pointer-events-none opacity-50" />
                    <div className="hero-glow opacity-10" />

                    <div className="space-y-6 relative z-10">
                        <h2 className="text-5xl md:text-7xl font-black text-white leading-tight tracking-tighter">
                            Ready to Rank in <br />
                            Your {countryName} City?
                        </h2>
                        <p className="text-slate-400 max-w-2xl mx-auto text-xl font-medium">
                            Let's discuss your business and the local customers you want to reach in {countryName}. We'll show you exactly what it takes to rank in your city.
                        </p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-6 relative z-10">
                        <a
                            href="https://wa.me/923474825228"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-primary hover:bg-white hover:text-slate-900 text-white px-12 py-6 rounded-3xl font-black text-xl transition-all shadow-2xl shadow-primary/20 flex items-center gap-3 group"
                        >
                            <MessageCircle className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                            Start a Conversation
                        </a>
                        <a
                            href="tel:+923474825228"
                            className="bg-transparent text-white px-12 py-6 rounded-3xl font-black text-xl hover:bg-white/5 transition-all border border-white/20"
                        >
                            Call: +92 347 4825228
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
