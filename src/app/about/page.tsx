"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Award, Users, Search, Target, Heart, MessageCircle, Globe, CheckCircle2, Clock, TrendingUp, Building2, MapPin, Star } from "lucide-react";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function AboutPage() {
    return (
        <div className="flex flex-col gap-32 pb-32">
            {/* Header / Hero */}
            <section className="relative py-32 overflow-hidden bg-slate-50 border-b border-slate-100">
                <div className="hero-glow opacity-30" />
                <div className="max-w-7xl mx-auto px-4 relative z-10">
                    <Breadcrumbs />
                    <div className="grid lg:grid-cols-2 gap-16 items-center mt-12">
                        <div className="space-y-10">
                            <div className="audit-chip">ABOUT US</div>
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-6xl md:text-8xl font-black leading-[0.9] tracking-tighter text-slate-900"
                            >
                                Meet Your <br />
                                <span className="text-primary italic">Local SEO</span> Partner
                            </motion.h1>
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.2 }}
                                className="text-xl text-slate-600 leading-relaxed font-medium max-w-xl"
                            >
                                I'm <strong>Razacheena</strong>, and I've been helping local businesses improve their online visibility since 2021. When you work with me, you get direct access to the person actually doing the work—no account managers, no sales teams.
                            </motion.p>

                            <div className="flex items-center gap-6 pt-4 border-t border-slate-200">
                                <div className="p-4 bg-white rounded-2xl border border-slate-200 flex-1 shadow-sm">
                                    <p className="text-3xl font-black text-slate-900">3+</p>
                                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Years Helping <br />Local Businesses</p>
                                </div>
                                <div className="p-4 bg-white rounded-2xl border border-slate-200 flex-1 shadow-sm">
                                    <p className="text-3xl font-black text-slate-900">250+</p>
                                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Business Projects <br />Completed</p>
                                </div>
                                <div className="p-4 bg-white rounded-2xl border border-slate-200 flex-1 shadow-sm">
                                    <p className="text-3xl font-black text-slate-900">40+</p>
                                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Cities Worldwide <br />Served</p>
                                </div>
                            </div>
                        </div>

                        <div className="relative group">
                            <div className="absolute inset-0 bg-primary blur-[100px] opacity-10 group-hover:opacity-20 transition-opacity" />
                            <div className="aspect-[4/5] bg-white rounded-[4rem] border border-slate-200 relative overflow-hidden shadow-2xl p-4">
                                <img
                                    src="/razacheena.png"
                                    alt="Razacheena - Local SEO Consultant serving businesses in Katy and worldwide"
                                    className="w-full h-full object-cover rounded-[3rem]"
                                />
                                <div className="absolute bottom-10 left-10 right-10 p-6 bg-white/95 backdrop-blur border border-slate-100 rounded-3xl flex items-center justify-between">
                                    <div>
                                        <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Your Direct Contact</p>
                                        <p className="text-xl font-black text-slate-900">Razacheena</p>
                                        <p className="text-xs text-slate-600 font-bold mt-1">Local SEO Specialist</p>
                                    </div>
                                    <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-white">
                                        <ShieldCheck className="w-6 h-6" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* My Story */}
            <section className="max-w-4xl mx-auto w-full px-4">
                <div className="space-y-12">
                    <div className="text-center space-y-4">
                        <div className="section-label justify-center before:hidden after:content-[''] after:w-8 after:h-[2px] after:bg-primary">MY STORY</div>
                        <h2 className="text-5xl font-black text-slate-900">Why I Focus on <br /><span className="text-primary italic">Local SEO</span></h2>
                    </div>

                    <div className="space-y-8 text-slate-600 text-lg leading-relaxed font-medium">
                        <p>
                            I started specializing in local SEO in 2021 after seeing too many local business owners struggle with their online visibility. Plumbers losing customers to competitors, dentists with empty appointment books despite being excellent practitioners, restaurants with great food but no foot traffic.
                        </p>
                        <p>
                            The problem wasn't that these businesses weren't good at what they did—they were great. The problem was that potential customers couldn't <strong>find them</strong> when searching on Google.
                        </p>
                        <p>
                            I realized that most local businesses don't need complicated SEO strategies. They need someone who understands how Google Maps rankings work, how to optimize a Google Business Profile properly, and how to build the online presence that brings real customers through the door.
                        </p>
                        <p>
                            That's what I do. I help local service businesses show up when customers in their area are searching. No complicated jargon, no long-term contracts you can't get out of, and no strategies that could get your business penalized by Google.
                        </p>
                    </div>
                </div>
            </section>

            {/* How I Work */}
            <section className="bg-slate-50 py-24 border-y border-slate-100">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16 space-y-4">
                        <div className="section-label mx-auto">MY APPROACH</div>
                        <h2 className="text-5xl font-black text-slate-900">How I Help <br /><span className="text-primary italic">Your Business</span></h2>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto font-medium">
                            My process is straightforward and transparent. You'll always know what I'm doing and why it matters for your business.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                        <div className="space-y-8">
                            <div className="p-8 bg-white border border-slate-100 rounded-3xl">
                                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                                    <Search className="w-6 h-6 text-primary" />
                                </div>
                                <h3 className="text-2xl font-black text-slate-900 mb-4">I Listen First</h3>
                                <p className="text-slate-600 leading-relaxed font-medium">
                                    Before recommending anything, I take time to understand your business, your goals, and your market. What works for a restaurant doesn't work for a law firm, and what works in New York doesn't always work in Katy.
                                </p>
                            </div>

                            <div className="p-8 bg-white border border-slate-100 rounded-3xl">
                                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                                    <Target className="w-6 h-6 text-primary" />
                                </div>
                                <h3 className="text-2xl font-black text-slate-900 mb-4">I Focus on What Matters</h3>
                                <p className="text-slate-600 leading-relaxed font-medium">
                                    I don't waste time on tactics that won't move the needle. My recommendations are based on what will actually bring you more customers—better Google Maps rankings, more positive reviews, consistent business information online.
                                </p>
                            </div>
                        </div>

                        <div className="space-y-8">
                            <div className="p-8 bg-white border border-slate-100 rounded-3xl">
                                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                                    <ShieldCheck className="w-6 h-6 text-primary" />
                                </div>
                                <h3 className="text-2xl font-black text-slate-900 mb-4">I Keep It Ethical</h3>
                                <p className="text-slate-600 leading-relaxed font-medium">
                                    Every strategy I use follows Google's guidelines. No black-hat tactics, no risky shortcuts, no strategies that could get you penalized. I build sustainable online presence that lasts.
                                </p>
                            </div>

                            <div className="p-8 bg-white border border-slate-100 rounded-3xl">
                                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                                    <TrendingUp className="w-6 h-6 text-primary" />
                                </div>
                                <h3 className="text-2xl font-black text-slate-900 mb-4">I Track Results</h3>
                                <p className="text-slate-600 leading-relaxed font-medium">
                                    You get monthly reports showing your rankings, traffic, and most importantly—how many customer inquiries you're getting from local search. You'll always know if the investment is paying off.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* What Makes Me Different */}
            <section className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-16 space-y-4">
                    <div className="section-label mx-auto">WHY CHOOSE ME</div>
                    <h2 className="text-5xl font-black text-slate-900">What Makes Working <br />with Me <span className="text-primary italic">Different</span></h2>
                </div>

                <div className="grid md:grid-cols-3 gap-10">
                    {[
                        {
                            title: "Direct Communication",
                            desc: "You work directly with me—the person doing the actual work. No account managers, no teams, no being passed around. You have my WhatsApp number and can reach out whenever you need.",
                            icon: MessageCircle
                        },
                        {
                            title: "No Long Contracts",
                            desc: "I work month-to-month because I believe I should earn your business every month by delivering results. If you're not happy, you can stop at any time. No locked-in contracts.",
                            icon: CheckCircle2
                        },
                        {
                            title: "Transparent Pricing",
                            desc: "You'll know exactly what you're paying for before we start. No hidden fees, no surprise charges, no upsells for 'premium features.' Just honest, straightforward pricing.",
                            icon: Award
                        },
                        {
                            title: "Real Experience",
                            desc: "I've worked with plumbers, dentists, lawyers, restaurants, real estate agents, and dozens of other business types. I understand the unique challenges each industry faces.",
                            icon: Building2
                        },
                        {
                            title: "Global but Local",
                            desc: "I serve businesses in 40+ cities across the USA, UK, Canada, Australia, and Dubai. This experience helps me understand different market dynamics and competitive landscapes.",
                            icon: Globe
                        },
                        {
                            title: "Education-Focused",
                            desc: "I explain what I'm doing and why it matters. You won't be left wondering what's happening with your SEO—you'll understand it and be able to make informed decisions.",
                            icon: Heart
                        }
                    ].map((item, i) => (
                        <div key={i} className="p-10 bg-white border border-slate-100 rounded-[3rem] shadow-lg hover:shadow-2xl transition-all group">
                            <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center border border-slate-100 mb-8 group-hover:bg-primary transition-all">
                                <item.icon className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
                            </div>
                            <h3 className="text-2xl font-black text-slate-900 mb-4">{item.title}</h3>
                            <p className="text-slate-600 leading-relaxed font-medium">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Industries I Serve */}
            <section className="bg-slate-50 py-24 border-y border-slate-100">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16 space-y-4">
                        <div className="section-label mx-auto">WHO I HELP</div>
                        <h2 className="text-5xl font-black text-slate-900">Local Businesses <br />I Work <span className="text-primary italic">With</span></h2>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto font-medium">
                            I've helped businesses across all industries improve their local search visibility and attract more customers.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            "Plumbers & HVAC",
                            "Dentists & Medical",
                            "Restaurants & Cafes",
                            "Real Estate Agents",
                            "Lawyers & Law Firms",
                            "Auto Repair Shops",
                            "Electricians",
                            "Contractors",
                            "Veterinary Clinics",
                            "Property Management",
                            "Insurance Agencies",
                            "Beauty & Wellness",
                            "Professional Services",
                            "Home Services",
                            "Hospitality",
                            "And Many More"
                        ].map((industry, i) => (
                            <div key={i} className="p-6 bg-white border border-slate-100 rounded-2xl text-center hover:border-primary/30 transition-all">
                                <p className="font-black text-slate-900">{industry}</p>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <p className="text-slate-700 font-medium">
                            If you serve customers in a specific area, I can help you rank better in local search—regardless of your industry.
                        </p>
                    </div>
                </div>
            </section>

            {/* Where I Serve */}
            <section className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-16 space-y-4">
                    <div className="section-label mx-auto">WHERE I WORK</div>
                    <h2 className="text-5xl font-black text-slate-900">Helping Businesses <br /><span className="text-primary italic">Worldwide</span></h2>
                </div>

                <div className="grid md:grid-cols-5 gap-8">
                    {[
                        {
                            region: "USA",
                            cities: "11 major cities including Katy, Houston, New York, LA, Chicago",
                            icon: MapPin
                        },
                        {
                            region: "UK",
                            cities: "7 cities including London, Manchester, Birmingham",
                            icon: MapPin
                        },
                        {
                            region: "Canada",
                            cities: "6 cities including Toronto, Vancouver, Calgary",
                            icon: MapPin
                        },
                        {
                            region: "Australia",
                            cities: "6 cities including Sydney, Melbourne, Brisbane",
                            icon: MapPin
                        },
                        {
                            region: "Dubai",
                            cities: "6 districts including Dubai Marina, Business Bay",
                            icon: MapPin
                        }
                    ].map((item, i) => (
                        <div key={i} className="p-8 bg-white border border-slate-100 rounded-3xl hover:shadow-lg transition-all text-center">
                            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                                <item.icon className="w-6 h-6 text-primary" />
                            </div>
                            <h3 className="text-2xl font-black text-slate-900 mb-3">{item.region}</h3>
                            <p className="text-sm text-slate-600 font-medium leading-relaxed">{item.cities}</p>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12 p-8 bg-slate-50 rounded-3xl border border-slate-100">
                    <p className="text-slate-700 font-medium">
                        <strong>Don't see your city?</strong> I work with businesses in cities beyond those listed. <Link href="/locations" className="text-primary font-black hover:underline">View all locations</Link> or reach out to discuss your area.
                    </p>
                </div>
            </section>

            {/* Testimonial / Social Proof */}
            <section className="bg-slate-50 py-24 border-y border-slate-100">
                <div className="max-w-4xl mx-auto px-4 text-center space-y-12">
                    <div className="section-label mx-auto">TRACK RECORD</div>
                    <div className="space-y-8">
                        <div className="flex justify-center gap-2">
                            {[1, 2, 3, 4, 5].map((i) => (
                                <Star key={i} className="w-8 h-8 fill-primary text-primary" />
                            ))}
                        </div>
                        <blockquote className="text-3xl font-black text-slate-900 leading-tight">
                            "I believe in building long-term relationships with business owners, not just collecting monthly retainer fees. If I can help you get more customers and grow your business, we both win."
                        </blockquote>
                        <div className="flex items-center justify-center gap-4">
                            <img
                                src="/razacheena.png"
                                alt="Razacheena"
                                className="w-16 h-16 rounded-full border-4 border-white shadow-lg object-cover"
                            />
                            <div className="text-left">
                                <p className="font-black text-slate-900">Razacheena</p>
                                <p className="text-sm text-slate-600 font-bold">Founder, Local SEO Experts Katy</p>
                            </div>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 pt-12">
                        <div className="p-6 bg-white rounded-2xl border border-slate-100">
                            <p className="text-4xl font-black text-primary mb-2">250+</p>
                            <p className="text-sm font-bold text-slate-600">Local Business Projects</p>
                        </div>
                        <div className="p-6 bg-white rounded-2xl border border-slate-100">
                            <p className="text-4xl font-black text-primary mb-2">40+</p>
                            <p className="text-sm font-bold text-slate-600">Cities Worldwide</p>
                        </div>
                        <div className="p-6 bg-white rounded-2xl border border-slate-100">
                            <p className="text-4xl font-black text-primary mb-2">3+</p>
                            <p className="text-sm font-bold text-slate-600">Years of Experience</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="max-w-7xl mx-auto w-full px-4">
                <div className="bg-slate-900 rounded-[4rem] p-16 md:p-32 text-center space-y-12 relative overflow-hidden shadow-2xl">
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/10 to-transparent pointer-events-none opacity-50" />
                    <div className="hero-glow opacity-10" />

                    <div className="space-y-6 relative z-10">
                        <h2 className="text-5xl md:text-7xl font-black text-white leading-tight tracking-tighter">
                            Let's Talk About <br />
                            Your Business
                        </h2>
                        <p className="text-slate-400 max-w-2xl mx-auto text-xl font-medium">
                            No sales pitch, no pressure. Just an honest conversation about your business goals and how local SEO can help you reach more customers.
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
                            Message Me on WhatsApp
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
                            <Users className="w-10 h-10 mb-2 text-white" />
                            <p className="text-[10px] font-black uppercase text-white">Direct Access</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <Clock className="w-10 h-10 mb-2 text-white" />
                            <p className="text-[10px] font-black uppercase text-white">No Contracts</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <ShieldCheck className="w-10 h-10 mb-2 text-white" />
                            <p className="text-[10px] font-black uppercase text-white">Ethical Methods</p>
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