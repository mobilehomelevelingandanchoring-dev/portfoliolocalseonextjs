"use client";

import { motion } from "framer-motion";
import { Check, ShieldCheck, Zap, Star, MessageCircle } from "lucide-react";

export default function PricingPage() {
    const plans = [
        {
            name: "The GMB Foundation",
            price: "Contact for Quote",
            desc: "Ideal for single-location small businesses needing a clean, optimized start.",
            features: [
                "Full GBP Audit & Optimization",
                "NAP Normalization",
                "50+ Quality Local Citations",
                "Entity Definition Setup",
                "Basics of Review Strategy",
                "Monthly Performance Snapshot"
            ],
            cta: "Get Started",
            highlight: false
        },
        {
            name: "Local Authority Engine",
            price: "Contact for Quote",
            desc: "For competitive local markets requiring strategic topical authority.",
            features: [
                "Everything in Foundation",
                "Semantic Topical Map Creation",
                "2 Monthly Authority Articles",
                "Map Pack #1 Focus",
                "Proactive Reputation Management",
                "Direct WhatsApp Support",
                "Local Link Building (2/mo)"
            ],
            cta: "Go Authority",
            highlight: true
        },
        {
            name: "Enterprise Hub Scale",
            price: "Custom",
            desc: "For multi-location brands and agencies managing diverse city portfolios.",
            features: [
                "Multi-location GMB Sync",
                "Advanced JSON-LD Schema",
                "Full Site Semantic Overhaul",
                "GMB Suspension Protection",
                "Monthly Strategy Call",
                "Custom Reporting Dashboard",
                "Unlimited Link Strategy"
            ],
            cta: "Talk to Razacheena",
            highlight: false
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
                    <Star className="w-4 h-4 fill-primary" />
                    Transparent & Result-Driven
                </motion.div>
                <h1 className="text-6xl md:text-8xl font-black tracking-tighter">
                    Investment <span className="gradient-text">Models</span>
                </h1>
                <p className="text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
                    Every local market is unique. We provide custom quotes based on your competition levels and current entity trust.
                </p>
            </section>

            <section className="max-w-7xl mx-auto w-full grid md:grid-cols-3 gap-8">
                {plans.map((p, i) => (
                    <div
                        key={i}
                        className={`p-10 rounded-[3rem] border transition-all flex flex-col h-full relative ${p.highlight ? 'bg-primary border-primary shadow-2xl shadow-primary/30 scale-105 z-10' : 'glass border-white/5'}`}
                    >
                        {p.highlight && (
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white text-primary px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest">
                                Most Popular
                            </div>
                        )}
                        <h3 className={`text-3xl font-black mb-2 ${p.highlight ? 'text-white' : 'text-primary'}`}>{p.name}</h3>
                        <p className={`text-sm mb-8 ${p.highlight ? 'text-white/80' : 'text-slate-500'}`}>{p.desc}</p>

                        <div className="mb-10">
                            <span className={`text-4xl font-black ${p.highlight ? 'text-white' : 'text-white'}`}>{p.price}</span>
                        </div>

                        <ul className="space-y-4 mb-12 flex-grow">
                            {p.features.map((f, fi) => (
                                <li key={fi} className={`flex items-start gap-3 text-sm font-medium ${p.highlight ? 'text-white' : 'text-slate-400'}`}>
                                    <Check className={`w-5 h-5 shrink-0 ${p.highlight ? 'text-white' : 'text-primary'}`} />
                                    {f}
                                </li>
                            ))}
                        </ul>

                        <a
                            href="https://wa.me/923474825228"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`w-full py-5 rounded-2xl font-black text-center transition-all ${p.highlight ? 'bg-white text-primary hover:bg-slate-100' : 'bg-primary text-white hover:bg-primary/90'}`}
                        >
                            {p.cta}
                        </a>
                    </div>
                ))}
            </section>

            <section className="max-w-4xl mx-auto w-full text-center p-12 glass rounded-[3rem] border-white/5 space-y-6">
                <ShieldCheck className="w-16 h-16 text-primary mx-auto mb-4" />
                <h2 className="text-3xl font-black">No Contracts. Just Rankings.</h2>
                <p className="text-slate-500 max-w-xl mx-auto">
                    We work on a result-driven model. If you don't see progress in the entity trust and ranking signals, we don't deserve the business. Honest work for honest growth.
                </p>
                <div className="pt-6">
                    <a href="https://wa.me/923474825228" className="inline-flex items-center gap-2 text-primary font-black uppercase tracking-widest hover:gap-4 transition-all">
                        Schedule a Free Quote Assessment <MessageCircle className="w-4 h-4" />
                    </a>
                </div>
            </section>
        </div>
    );
}
