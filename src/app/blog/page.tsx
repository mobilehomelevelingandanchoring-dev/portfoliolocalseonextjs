"use client";

import { motion } from "framer-motion";
import { BookOpen, ArrowRight, Tag } from "lucide-react";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import { BLOG_POSTS } from "@/lib/constants";


export default function BlogPage() {
    const posts = BLOG_POSTS;

    return (
        <div className="flex flex-col gap-32 pb-32">
            {/* Header Section */}
            <section className="relative py-32 overflow-hidden bg-slate-50 border-b border-slate-100">
                <div className="hero-glow opacity-30" />
                <div className="max-w-7xl mx-auto px-4 text-center space-y-8 relative z-10">
                    <Breadcrumbs />
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="audit-chip mx-auto"
                    >
                        <BookOpen className="w-4 h-4" />
                        EDUCATIONAL HUB & BLUEPRINTS
                    </motion.div>
                    <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-slate-900 leading-tight">
                        Authority <span className="text-primary italic">Journal</span>
                    </h1>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto font-medium leading-relaxed">
                        Deep dives into Semantic SEO, Local Search engineering, and the future of digital entities.
                    </p>
                </div>
            </section>

            <section className="max-w-7xl mx-auto px-4 w-full">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {posts.map((post: any, i: number) => (
                        <motion.article
                            key={i}
                            whileHover={{ y: -12 }}
                            className="bg-white rounded-[3rem] border border-slate-100 overflow-hidden flex flex-col hover:border-primary/30 hover:shadow-2xl transition-all group shadow-lg shadow-slate-100"
                        >
                            <div className="aspect-video bg-slate-50 border-b border-slate-100 relative flex items-center justify-center p-12">
                                <Tag className="w-16 h-16 text-primary/10 group-hover:text-primary transition-colors" />
                                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                            <div className="p-10 space-y-6 flex-grow flex flex-col">
                                <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-widest text-slate-400">
                                    <span className="text-primary">{post.category}</span>
                                    <span>•</span>
                                    <span>{post.date}</span>
                                </div>
                                <h2 className="text-2xl font-black text-slate-900 leading-tight group-hover:text-primary transition-colors">
                                    {post.title}
                                </h2>
                                <p className="text-slate-500 text-sm leading-relaxed flex-grow font-medium">
                                    {post.excerpt}
                                </p>
                                <div className="pt-6 border-t border-slate-50 flex items-center justify-between">
                                    <div className="flex items-center gap-2 text-xs font-bold text-slate-900">
                                        <div className="w-8 h-8 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-[10px]">RZ</div>
                                        {post.author}
                                    </div>
                                    <Link href={`/blog/${post.slug}`} className="text-primary font-black uppercase text-[10px] tracking-widest flex items-center gap-1 hover:gap-3 transition-all">
                                        Read Deep Dive <ArrowRight className="w-4 h-4" />
                                    </Link>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </section>

            {/* Newsletter/CTA */}
            <section className="max-w-7xl mx-auto px-4 w-full">
                <div className="p-16 md:p-24 bg-slate-900 rounded-[4rem] text-center space-y-10 relative overflow-hidden shadow-2xl">
                    <div className="absolute top-0 left-0 w-full h-full bg-primary/10 pointer-events-none" />
                    <div className="hero-glow opacity-10" />
                    <h2 className="text-4xl md:text-5xl font-black text-white leading-tight relative z-10">Want Weekly Semantic <br />SEO Blueprints?</h2>
                    <p className="text-slate-400 max-w-md mx-auto relative z-10 font-medium text-lg">Get exclusive local search insights delivered directly to your inbox. No spam, only technical authority.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto pt-4 relative z-10">
                        <input type="email" placeholder="Your Business Email" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 outline-none focus:border-primary transition-all text-white placeholder:text-slate-500" />
                        <button className="whitespace-nowrap bg-primary text-white px-10 py-5 rounded-2xl font-black hover:scale-105 transition-all w-full sm:w-auto shadow-xl shadow-primary/20">
                            Join Hub
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}
