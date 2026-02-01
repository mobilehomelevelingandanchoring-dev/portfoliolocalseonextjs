"use client";

import { motion } from "framer-motion";
import { TrendingUp, MapPin, Users, Star, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function CaseStudiesPage() {
    const studies = [
        {
            title: "Dental Clinic Map Pack Dominance",
            location: "London, UK",
            industry: "Healthcare",
            result: "+340% More Calls",
            desc: "How we leveraged semantic service clusters to move a local dental clinic from position #12 to absolute #1 in the Map Pack for 'Emergency Dentist London'.",
            metric: "45 Days"
        },
        {
            title: "Massive GMB Recovery & Restoration",
            location: "New York, USA",
            industry: "Legal",
            result: "Profile Reinstated",
            desc: "A hard-suspended personal injury law firm listing was restored by correcting their entity data and proving quality guideline compliance to Google's support team.",
            metric: "12 Days"
        },
        {
            title: "Multi-Location Franchise Growth",
            location: "Various Cities, Canada",
            industry: "Home Services",
            result: "+180% Visibility",
            desc: "Scaling Local SEO for a 15-location carpet cleaning franchise. We established location hubs and NAP consistency that triggered trust across the entire province.",
            metric: "6 Months"
        }
    ];

    return (
        <div className="flex flex-col gap-24 pb-24 px-4 overflow-hidden">
            <section className="max-w-7xl mx-auto w-full pt-20 text-center space-y-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-primary/20 text-primary font-bold text-xs uppercase tracking-widest"
                >
                    <TrendingUp className="w-4 h-4" />
                    Proven Authority Results
                </motion.div>
                <h1 className="text-6xl md:text-8xl font-black tracking-tighter">
                    Case <span className="gradient-text">Studies</span>
                </h1>
                <p className="text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
                    Real results for real businesses. We focus on the metric that matters: <strong>customer phone calls and foot traffic.</strong>
                </p>
            </section>

            <section className="max-w-7xl mx-auto w-full grid gap-12">
                {studies.map((s, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="p-12 glass rounded-[4rem] border-white/5 grid md:grid-cols-2 gap-12 items-center hover:border-primary/30 transition-all group"
                    >
                        <div className="space-y-6">
                            <div className="flex flex-wrap gap-3">
                                <span className="px-3 py-1 bg-primary/10 text-primary text-[10px] font-black uppercase rounded-full">{s.industry}</span>
                                <span className="px-3 py-1 bg-white/5 text-slate-400 text-[10px] font-black uppercase rounded-full flex items-center gap-1">
                                    <MapPin className="w-3 h-3" /> {s.location}
                                </span>
                            </div>
                            <h3 className="text-4xl font-black leading-tight group-hover:text-primary transition-colors">{s.title}</h3>
                            <p className="text-slate-500 leading-relaxed text-lg">
                                {s.desc}
                            </p>
                            <div className="grid grid-cols-2 gap-8 pt-6 border-t border-white/5">
                                <div>
                                    <p className="text-xs font-bold text-slate-500 uppercase mb-1">Growth Metric</p>
                                    <p className="text-3xl font-black text-white">{s.result}</p>
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-slate-500 uppercase mb-1">Timeline</p>
                                    <p className="text-3xl font-black text-white">{s.metric}</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-slate-900 aspect-square rounded-[3rem] border border-white/10 flex items-center justify-center p-12 overflow-hidden relative">
                            <div className="text-center space-y-4 z-10">
                                <TrendingUp className="w-16 h-16 text-primary mx-auto animate-pulse" />
                                <p className="text-sm font-bold opacity-50 uppercase tracking-widest">Data Visualization Coming Soon</p>
                            </div>
                            {/* Decorative Background */}
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
                        </div>
                    </motion.div>
                ))}
            </section>

            <section className="max-w-3xl mx-auto w-full text-center space-y-8">
                <h2 className="text-3xl font-black">Want to be our next success story?</h2>
                <p className="text-slate-500">Every local market has a gap where an authoritative business can dominate. We find that gap for you.</p>
                <Link href="/contact" className="inline-flex items-center gap-2 bg-primary text-white px-10 py-5 rounded-2xl font-black text-lg hover:scale-105 transition-all">
                    Start Your Project <ArrowRight className="w-5 h-5" />
                </Link>
            </section>
        </div>
    );
}
