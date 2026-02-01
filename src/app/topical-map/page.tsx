"use client";

import { motion } from "framer-motion";
import { Network, Database, Layers, Share2 } from "lucide-react";

export default function TopicalMapPage() {
    const clusters = [
        { title: "Google Business Profile", nodes: ["NAP Consistency", "Photo Optimization", "Q&A Mapping", "Service Menus"] },
        { title: "Map Pack Algorithm", nodes: ["Proximity Signals", "Relevance Vectors", "Prominence Scores", "Geo-relevance"] },
        { title: "Reviews & Reputation", nodes: ["Sentiment Analysis", "Review Velocity", "Response Logic", "User Trust Entities"] },
        { title: "Local Technical SEO", nodes: ["JSON-LD Mapping", "Page Speed Local", "Crawl Path Logic", "Internal Link Graph"] },
    ];

    return (
        <div className="max-w-7xl mx-auto px-4 py-24 space-y-20">
            <div className="text-center space-y-4">
                <h1 className="text-5xl font-black gradient-text uppercase tracking-tighter">The Semantic Topical Map</h1>
                <p className="text-slate-400 max-w-2xl mx-auto">
                    Our proprietary knowledge graph engineering for Local SEO. We map entities to satisfy search intent and dominate proximity algorithms.
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {clusters.map((cluster, i) => (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        key={i}
                        className="p-8 glass rounded-3xl border-slate-800 space-y-6 flex flex-col"
                    >
                        <div className="flex items-center gap-4 border-b border-slate-800 pb-4">
                            <Layers className="text-primary w-6 h-6" />
                            <h2 className="text-xl font-bold">{cluster.title}</h2>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {cluster.nodes.map((node, j) => (
                                <span key={j} className="px-3 py-1 bg-slate-900 border border-slate-800 rounded-full text-xs text-slate-400">
                                    {node}
                                </span>
                            ))}
                        </div>
                        <div className="mt-auto pt-6 flex justify-between items-center text-xs font-black uppercase tracking-widest text-primary">
                            <span>View Articles</span>
                            <Share2 className="w-4 h-4" />
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Visual Representation (Abstract) */}
            <div className="h-[400px] w-full glass rounded-3xl border-slate-800 relative overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
                <div className="text-center space-y-6 z-10">
                    <Network className="w-20 h-20 text-primary mx-auto animate-pulse" />
                    <h3 className="text-2xl font-black">Inter-connected Knowledge Hubs</h3>
                    <p className="max-w-md text-slate-500 text-sm">Every page on this site is programmatically linked to reinforce topical weight and crawl depth.</p>
                </div>

                {/* Animated grid background */}
                <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,_var(--color-primary)_0%,_transparent_50%)] opacity-10 animate-pulse" />
            </div>
        </div>
    );
}
