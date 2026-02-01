"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Share2, Bookmark, MessageCircle, Tag } from "lucide-react";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";

interface BlogPostContentProps {
    slug: string;
    postTitle: string;
}

export default function BlogPostContent({ slug, postTitle }: BlogPostContentProps) {
    return (
        <div className="flex flex-col gap-12 pb-32">
            {/* Header Section */}
            <section className="relative py-32 overflow-hidden bg-slate-50 border-b border-slate-100">
                <div className="hero-glow opacity-30" />
                <div className="max-w-4xl mx-auto px-4 relative z-10">
                    <Breadcrumbs />
                    <Link href="/blog" className="inline-flex items-center gap-2 text-slate-500 hover:text-primary transition-colors mb-12 font-bold text-xs uppercase tracking-widest">
                        <ArrowLeft className="w-4 h-4" /> Back to Journal
                    </Link>

                    <div className="flex items-center gap-4 text-xs font-black uppercase tracking-widest text-primary mb-8">
                        <span>Semantic Blueprints</span>
                        <span className="text-slate-300">•</span>
                        <span className="text-slate-500">Jan 25, 2026</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-black leading-[0.9] tracking-tighter text-slate-900">
                        {postTitle}
                    </h1>
                </div>
            </section>

            <div className="max-w-4xl mx-auto px-4 w-full">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-12"
                >
                    <div className="flex items-center justify-between py-10 border-b border-slate-100">
                        <div className="flex items-center gap-4">
                            <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-sm font-black text-slate-900 shadow-sm">RZ</div>
                            <div>
                                <p className="font-black text-slate-900 text-lg">Razacheena</p>
                                <p className="text-[10px] text-slate-400 uppercase font-black tracking-widest">Principal Local SEO Strategist</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <button className="p-4 bg-white rounded-2xl border border-slate-100 hover:border-primary/50 text-slate-400 hover:text-primary transition-all shadow-sm">
                                <Share2 className="w-5 h-5" />
                            </button>
                            <button className="p-4 bg-white rounded-2xl border border-slate-100 hover:border-primary/50 text-slate-400 hover:text-primary transition-all shadow-sm">
                                <Bookmark className="w-5 h-5" />
                            </button>
                        </div>
                    </div>

                    <article className="max-w-none pt-8 space-y-10 text-slate-600 leading-relaxed font-medium text-lg">
                        <p className="text-2xl text-slate-900 font-black italic border-l-4 border-primary pl-8 py-2">
                            This in-depth guide explores the technical implementation of semantic entities in the modern local search landscape.
                        </p>
                        <p>
                            In the era of Google BERT and the Knowledge Graph, local SEO has shifted from simple keyword placement to complex entity relationship mapping. For a local business, this means your "digital signature" must be consistent across all authority nodes—from your website's schema to your Google Business Profile attributes.
                        </p>
                        <h2 className="text-4xl font-black text-slate-900 pt-8 tracking-tight">The Role of Topical Authority</h2>
                        <p>
                            Topical authority isn't just about writing more content. It's about writing the <strong>right</strong> content in the <strong>right</strong> order. Following the Koray Tuğberk GÜBÜR framework, we focus on:
                        </p>
                        <ul className="space-y-6">
                            {[
                                { t: "Entity Extraction", d: "Identifying the core nodes of your business that search engines recognize." },
                                { t: "Attribute Expansion", d: "Providing deep, machine-readable data for every service you offer." },
                                { t: "Contextual Linking", d: "Ensuring Google understands the precise relationship between your service and your geographic area." }
                            ].map((item, i) => (
                                <li key={i} className="flex gap-4 items-start">
                                    <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center shrink-0 mt-1">
                                        <div className="w-2 h-2 bg-primary rounded-full" />
                                    </div>
                                    <p><strong>{item.t}:</strong> {item.d}</p>
                                </li>
                            ))}
                        </ul>
                        <p>
                            When these elements align, your business stops being a "random recommendation" and starts being the "authoritative answer" in the Map Pack.
                        </p>
                    </article>

                    {/* Blog CTA */}
                    <div className="mt-20 p-16 bg-slate-50 rounded-[4rem] border border-slate-100 space-y-8 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-12 opacity-[0.02] group-hover:opacity-[0.05] transition-opacity">
                            <Tag className="w-64 h-64" />
                        </div>
                        <div className="relative z-10 space-y-6">
                            <h3 className="text-4xl font-black text-slate-900 tracking-tight">Need This Strategy Implemented?</h3>
                            <p className="text-slate-500 text-lg">Stop guessing with your local rankings. Let's build a semantic topical map for your business today.</p>
                            <div className="flex flex-wrap gap-6 pt-4">
                                <a href="https://wa.me/923474825228" target="_blank" rel="noopener noreferrer" className="bg-primary text-white px-10 py-5 rounded-2xl font-black text-lg flex items-center gap-3 shadow-xl shadow-primary/20 hover:scale-105 transition-all">
                                    <MessageCircle className="w-6 h-6" /> WhatsApp Razacheena
                                </a>
                                <Link href="/audit" className="bg-white px-10 py-5 rounded-2xl font-black text-lg border border-slate-200 hover:border-primary transition-all shadow-sm">
                                    Request Custom Audit
                                </Link>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
