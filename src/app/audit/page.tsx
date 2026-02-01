"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Zap, Search, BarChart3, MessageCircle, Send, CheckCircle2, Star, Clock, Globe, MapPin, Award, AlertCircle, TrendingUp, Target, Users } from "lucide-react";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function AuditPage() {
    return (
        <div className="flex flex-col gap-32 pb-32 overflow-hidden">
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
                        <Star className="w-4 h-4 fill-primary text-primary" />
                        FREE LOCAL SEO ANALYSIS
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.95] text-slate-900"
                    >
                        Find Out Why <br />
                        <span className="text-primary italic">You're Not Ranking</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-medium"
                    >
                        Get a detailed analysis of your Google Business Profile, local citations, and what's keeping you out of the map pack. I'll personally review your business and show you exactly what needs to be fixed.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="flex flex-wrap justify-center gap-6 pt-4"
                    >
                        <div className="flex items-center gap-2 bg-white px-6 py-3 rounded-2xl border border-slate-100 shadow-sm">
                            <CheckCircle2 className="w-5 h-5 text-green-600" />
                            <span className="text-sm font-bold text-slate-700">Delivered in 24-48 Hours</span>
                        </div>
                        <div className="flex items-center gap-2 bg-white px-6 py-3 rounded-2xl border border-slate-100 shadow-sm">
                            <CheckCircle2 className="w-5 h-5 text-green-600" />
                            <span className="text-sm font-bold text-slate-700">Personally Reviewed by Razacheena</span>
                        </div>
                        <div className="flex items-center gap-2 bg-white px-6 py-3 rounded-2xl border border-slate-100 shadow-sm">
                            <CheckCircle2 className="w-5 h-5 text-green-600" />
                            <span className="text-sm font-bold text-slate-700">No Obligation</span>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Why Get an Audit */}
            <section className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-16 space-y-4">
                    <div className="section-label mx-auto">WHY THIS MATTERS</div>
                    <h2 className="text-5xl font-black text-slate-900">
                        Most Local Businesses <br />
                        Have <span className="text-primary italic">Fixable Problems</span>
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto font-medium">
                        The difference between ranking #1 and not showing up at all often comes down to a few specific issues you can fix.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                        {
                            icon: AlertCircle,
                            title: "Profile Issues",
                            desc: "Incomplete Google Business Profile, wrong categories, missing information that hurts your visibility"
                        },
                        {
                            icon: Search,
                            title: "Citation Problems",
                            desc: "Inconsistent business information across directories confusing Google about your address"
                        },
                        {
                            icon: Star,
                            title: "Review Gaps",
                            desc: "Not enough reviews, poor review response strategy, or review velocity issues"
                        },
                        {
                            icon: ShieldCheck,
                            title: "Compliance Risks",
                            desc: "Hidden policy violations that could lead to suspension or are already hurting rankings"
                        }
                    ].map((item, i) => (
                        <div key={i} className="p-8 bg-white border border-slate-100 rounded-3xl hover:shadow-lg transition-all">
                            <div className="w-14 h-14 bg-red-50 rounded-2xl flex items-center justify-center mb-6">
                                <item.icon className="w-7 h-7 text-red-600" />
                            </div>
                            <h3 className="text-xl font-black text-slate-900 mb-3">{item.title}</h3>
                            <p className="text-sm text-slate-600 leading-relaxed font-medium">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Form + What's Included */}
            <section className="bg-slate-50 py-24 border-y border-slate-100">
                <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16 items-start">
                    {/* Form */}
                    <div className="bg-white p-12 rounded-[3.5rem] border border-slate-200 shadow-xl space-y-10 sticky top-24">
                        <div className="space-y-3">
                            <h2 className="text-3xl font-black text-slate-900">Request Your Free Audit</h2>
                            <p className="text-slate-600 font-medium">Fill out the form below and I'll personally analyze your local search presence within 24-48 hours.</p>
                        </div>

                        <form className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-widest text-slate-500 pl-2">Your Name *</label>
                                    <input
                                        type="text"
                                        placeholder="John Smith"
                                        required
                                        className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 focus:border-primary focus:bg-white outline-none text-slate-900 transition-all"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-widest text-slate-500 pl-2">Email Address *</label>
                                    <input
                                        type="email"
                                        placeholder="john@business.com"
                                        required
                                        className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 focus:border-primary focus:bg-white outline-none text-slate-900 transition-all"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-widest text-slate-500 pl-2">Business Website *</label>
                                <input
                                    type="url"
                                    placeholder="https://yourbusiness.com"
                                    required
                                    className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 focus:border-primary focus:bg-white outline-none text-slate-900 transition-all"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-widest text-slate-500 pl-2">Google Business Profile Name</label>
                                <input
                                    type="text"
                                    placeholder="Exact name as shown on Google Maps"
                                    className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 focus:border-primary focus:bg-white outline-none text-slate-900 transition-all"
                                />
                                <p className="text-xs text-slate-500 pl-2">If you have one—if not, we'll help you set it up</p>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-widest text-slate-500 pl-2">City/Area You Serve *</label>
                                <input
                                    type="text"
                                    placeholder="e.g., Katy TX, Houston TX"
                                    required
                                    className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 focus:border-primary focus:bg-white outline-none text-slate-900 transition-all"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-widest text-slate-500 pl-2">Biggest Challenge *</label>
                                <select
                                    required
                                    className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 focus:border-primary focus:bg-white outline-none text-slate-900 appearance-none cursor-pointer transition-all"
                                >
                                    <option value="">Select your main concern...</option>
                                    <option>Not showing in Google Maps / Map Pack</option>
                                    <option>Google Business Profile suspended</option>
                                    <option>Not getting enough phone calls</option>
                                    <option>Competitors ranking higher than me</option>
                                    <option>Few or no customer reviews</option>
                                    <option>Want to expand to new cities</option>
                                    <option>Other / Not sure</option>
                                </select>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-primary hover:bg-primary/90 text-white py-5 rounded-2xl font-black text-lg transition-all shadow-xl shadow-primary/20 flex items-center justify-center gap-3 group"
                            >
                                Get My Free Audit <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>

                            <p className="text-xs text-slate-500 text-center leading-relaxed">
                                By submitting, you agree to receive the audit results via email. No spam, no automated follow-ups—just your analysis.
                            </p>
                        </form>
                    </div>

                    {/* What's Included */}
                    <div className="space-y-12">
                        <div className="space-y-6">
                            <h2 className="text-4xl font-black text-slate-900">What You'll Get in <br />Your Audit</h2>
                            <p className="text-lg text-slate-600 leading-relaxed font-medium">
                                This isn't an automated report. I personally review each submission and provide specific, actionable recommendations for your business.
                            </p>
                        </div>

                        <div className="space-y-6">
                            {[
                                {
                                    title: "Google Business Profile Analysis",
                                    desc: "Complete review of your GBP setup, categories, photos, posts, and all optimization opportunities. I'll show you exactly what's missing or incorrect.",
                                    icon: ShieldCheck
                                },
                                {
                                    title: "Map Pack Ranking Assessment",
                                    desc: "Why you're not appearing in the top 3 local results and what your competitors are doing differently that's working.",
                                    icon: MapPin
                                },
                                {
                                    title: "Citation Consistency Check",
                                    desc: "Analysis of your business listings across major directories to identify NAP inconsistencies that confuse Google.",
                                    icon: Search
                                },
                                {
                                    title: "Review Profile Evaluation",
                                    desc: "How your review quantity, quality, and response strategy compare to competitors and what to improve.",
                                    icon: Star
                                },
                                {
                                    title: "Compliance & Risk Review",
                                    desc: "Identify any Google Business Profile policy violations or issues that could lead to suspension.",
                                    icon: AlertCircle
                                },
                                {
                                    title: "Priority Action Plan",
                                    desc: "Clear next steps ranked by impact—fix these issues first for the biggest improvement in rankings.",
                                    icon: Target
                                }
                            ].map((item, i) => (
                                <div key={i} className="flex gap-6 p-8 bg-white border border-slate-100 rounded-3xl hover:border-primary/30 transition-all group">
                                    <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-primary transition-all">
                                        <item.icon className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-black text-slate-900 mb-2">{item.title}</h3>
                                        <p className="text-sm text-slate-600 leading-relaxed font-medium">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="p-8 bg-green-50 border border-green-100 rounded-3xl">
                            <div className="flex items-start gap-4">
                                <CheckCircle2 className="w-6 h-6 text-green-600 shrink-0 mt-1" />
                                <div>
                                    <p className="font-black text-slate-900 mb-2">Manual Review Guarantee</p>
                                    <p className="text-slate-700 font-medium leading-relaxed">
                                        I personally review every submission—no automated tools, no generic templates. You get a real analysis of your specific situation with actionable recommendations.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Personal Touch */}
            <section className="max-w-7xl mx-auto px-4">
                <div className="bg-white border border-slate-100 rounded-[4rem] p-12 md:p-20">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="relative">
                            <div className="absolute inset-0 bg-primary/5 blur-3xl rounded-[4rem]" />
                            <img
                                src="/razacheena.png"
                                alt="Razacheena - Local SEO Expert providing free audit"
                                className="w-full aspect-square object-cover rounded-[3rem] shadow-2xl relative z-10"
                            />
                        </div>

                        <div className="space-y-8">
                            <div className="section-label">WHO'S REVIEWING YOUR BUSINESS</div>
                            <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
                                A Real Expert <br />
                                <span className="text-primary italic">Reviewing Your Business</span>
                            </h2>
                            <div className="space-y-6 text-slate-600 text-lg leading-relaxed font-medium">
                                <p>
                                    I'm Razacheena, and I've been helping local businesses improve their Google rankings since 2021. I personally review every audit request that comes through this form.
                                </p>
                                <p>
                                    When I analyze your business, I'm looking at the same factors Google uses to rank local businesses: your Google Business Profile setup, citation consistency, review profile, and how you compare to competitors in your area.
                                </p>
                                <p>
                                    You'll get specific recommendations based on what I see—not generic advice, not automated suggestions. Real analysis from someone who's done this hundreds of times.
                                </p>
                            </div>

                            <div className="grid grid-cols-2 gap-6 pt-6">
                                <div className="p-6 bg-slate-50 rounded-2xl">
                                    <p className="text-3xl font-black text-slate-900 mb-2">250+</p>
                                    <p className="text-sm font-bold text-slate-600">Local Business Projects</p>
                                </div>
                                <div className="p-6 bg-slate-50 rounded-2xl">
                                    <p className="text-3xl font-black text-slate-900 mb-2">40+</p>
                                    <p className="text-sm font-bold text-slate-600">Cities Worldwide</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Social Proof */}
            <section className="bg-slate-50 py-24 border-y border-slate-100">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16 space-y-4">
                        <div className="section-label mx-auto">WHAT BUSINESS OWNERS SAY</div>
                        <h2 className="text-5xl font-black text-slate-900">
                            Audits That Led to <br />
                            <span className="text-primary italic">Real Results</span>
                        </h2>
                        <div className="flex justify-center gap-1">
                            {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-6 h-6 text-primary fill-primary" />)}
                        </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                name: "David Chen",
                                role: "Real Estate Agent, Houston",
                                text: "The audit showed me three specific issues with my Google Business Profile I had no idea about. Fixed them, and I was in the map pack within a month. Worth way more than free."
                            },
                            {
                                name: "Sarah Miller",
                                role: "Dental Clinic Owner, Katy",
                                text: "I was surprised by how detailed it was for a free audit. Razacheena identified exactly why my competitors were ranking higher and gave me a clear roadmap to catch up."
                            },
                            {
                                name: "James Wilson",
                                role: "Locksmith, Dallas",
                                text: "My profile got suspended and I had no idea why. The audit showed exactly what policy I violated and how to fix it. Got reinstated in two weeks with his help."
                            }
                        ].map((testimonial, i) => (
                            <div key={i} className="p-10 bg-white border border-slate-100 rounded-3xl shadow-sm">
                                <div className="flex gap-1 mb-6">
                                    {[1, 2, 3, 4, 5].map(j => <Star key={j} className="w-4 h-4 text-primary fill-primary" />)}
                                </div>
                                <p className="text-slate-600 text-sm leading-relaxed mb-6 font-medium italic">"{testimonial.text}"</p>
                                <div className="flex items-center gap-4 pt-6 border-t border-slate-100">
                                    <div className="w-12 h-12 rounded-full bg-slate-100" />
                                    <div>
                                        <p className="font-black text-slate-900 text-sm">{testimonial.name}</p>
                                        <p className="text-xs text-slate-500 font-bold">{testimonial.role}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Common Questions */}
            <section className="max-w-4xl mx-auto px-4">
                <div className="text-center mb-16 space-y-4">
                    <div className="section-label mx-auto">COMMON QUESTIONS</div>
                    <h2 className="text-5xl font-black text-slate-900">
                        Audit Questions <br />
                        <span className="text-primary italic">Answered</span>
                    </h2>
                </div>

                <div className="space-y-6">
                    {[
                        {
                            q: "Is this really free? What's the catch?",
                            a: "Yes, it's completely free. No credit card required, no strings attached. I provide these audits to help business owners understand their local SEO situation. If you decide you want help implementing the recommendations, we can discuss that—but there's no obligation."
                        },
                        {
                            q: "How long does it take to get my audit?",
                            a: "I personally review each submission within 24-48 hours. You'll receive a detailed email with my findings and recommendations. If there's a backlog, I'll let you know the expected timeline."
                        },
                        {
                            q: "What if I don't have a Google Business Profile yet?",
                            a: "That's fine—I'll include recommendations for setting one up properly. Many businesses don't have one or have never verified theirs, which is often the biggest reason they're not showing up in local search."
                        },
                        {
                            q: "Will you try to sell me services?",
                            a: "The audit is genuinely free and helpful on its own. If you want help implementing the recommendations, I'm available, but there's no pressure. Many people take the audit and do the work themselves."
                        },
                        {
                            q: "What if my business is suspended?",
                            a: "Mention it in the form and I'll focus the audit on identifying why you were suspended and the steps needed for reinstatement. Suspension recovery is one of my specialties."
                        }
                    ].map((faq, i) => (
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

            {/* Alternative CTA */}
            <section className="max-w-7xl mx-auto px-4">
                <div className="bg-slate-900 rounded-[4rem] p-16 md:p-32 text-center space-y-12 relative overflow-hidden shadow-2xl">
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/10 to-transparent pointer-events-none opacity-50" />
                    <div className="hero-glow opacity-10" />

                    <div className="space-y-6 relative z-10">
                        <h2 className="text-5xl md:text-7xl font-black text-white leading-tight tracking-tighter">
                            Prefer to Just <br />
                            Talk First?
                        </h2>
                        <p className="text-slate-400 max-w-2xl mx-auto text-xl font-medium">
                            Skip the form and reach out directly. Sometimes a quick conversation is the fastest way to understand your situation.
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
                            Message on WhatsApp
                        </a>
                        <a
                            href="tel:+923474825228"
                            className="bg-transparent text-white px-12 py-6 rounded-3xl font-black text-xl hover:bg-white/5 transition-all border border-white/20"
                        >
                            Call: +92 347 4825228
                        </a>
                    </div>

                    <div className="pt-12 flex flex-wrap justify-center gap-12 relative z-10 opacity-40">
                        <div className="flex flex-col items-center">
                            <Clock className="w-10 h-10 mb-2 text-white" />
                            <p className="text-[10px] font-black uppercase text-white">24-48 Hour Turnaround</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <Users className="w-10 h-10 mb-2 text-white" />
                            <p className="text-[10px] font-black uppercase text-white">Personal Review</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <CheckCircle2 className="w-10 h-10 mb-2 text-white" />
                            <p className="text-[10px] font-black uppercase text-white">No Obligation</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <Award className="w-10 h-10 mb-2 text-white" />
                            <p className="text-[10px] font-black uppercase text-white">Since 2021</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}