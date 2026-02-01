"use client";

import { motion } from "framer-motion";
import { Book, Search, Star, ArrowRight, MessageCircle } from "lucide-react";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function GuidesPage() {
    const guides = [
        {
            title: "The Ultimate Google Business Profile Checklist",
            desc: "Every setting and attribute you need to optimize to dominate the map pack in 2026.",
            category: "GMB Optimization"
        },
        {
            title: "Local Citation Audit Guide",
            desc: "How to find and fix inconsistent NAP data across the global directory network.",
            category: "Citations"
        },
        {
            title: "Semantic Schema for Local Business",
            desc: "How to tell Google exactly what your business is and where it is using JSON-LD.",
            category: "Technical SEO"
        }
    ];

    return (
        <div className="flex flex-col gap-32 pb-32">
            <section className="relative py-32 overflow-hidden bg-slate-50 border-b border-slate-100">
                <div className="hero-glow opacity-30" />
                <div className="max-w-7xl mx-auto px-4 text-center space-y-8 relative z-10">
                    <Breadcrumbs />
                    <div className="audit-chip mx-auto">
                        <Book className="w-4 h-4" />
                        TECHNICAL SEO BLUEPRINTS
                    </div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-6xl md:text-8xl font-black tracking-tighter text-slate-900"
                    >
                        Technical <span className="text-primary italic">Guides</span>
                    </motion.h1>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto font-medium">
                        Practical, engineering-focused blueprints for local search dominance. No fluff, just the steps that drive rankings.
                    </p>
                </div>
            </section>

            <section className="max-w-7xl mx-auto px-4 w-full">
                <div className="grid md:grid-cols-3 gap-10">
                    {guides.map((guide, i) => (
                        <div key={i} className="p-10 bg-white border border-slate-100 rounded-[3rem] shadow-lg hover:shadow-2xl hover:border-primary/30 transition-all group">
                            <div className="mb-8">
                                <span className="text-[10px] font-black uppercase tracking-widest text-primary bg-primary/5 px-4 py-2 rounded-full">
                                    {guide.category}
                                </span>
                            </div>
                            <h3 className="text-2xl font-black text-slate-900 mb-4 group-hover:text-primary transition-colors">
                                {guide.title}
                            </h3>
                            <p className="text-slate-500 font-medium mb-8">
                                {guide.desc}
                            </p>
                            <Link href="/contact" className="inline-flex items-center gap-2 text-slate-900 font-black uppercase text-xs tracking-widest hover:gap-4 transition-all border-b-2 border-primary/20 pb-1">
                                Download Blueprint <ArrowRight className="w-4 h-4 text-primary" />
                            </Link>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
