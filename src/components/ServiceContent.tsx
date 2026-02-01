"use client";

import { motion } from "framer-motion";
import {
    CheckCircle2, ArrowRight, MessageCircle, Phone, Clock, Award, Users, Building2,
    Target, Activity, Globe, ShieldCheck, Zap, MapPin, Search, Star, Layers, Settings
} from "lucide-react";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";

// Icon lookup table
const IconMap: Record<string, any> = {
    "globe": Globe,
    "shield-check": ShieldCheck,
    "zap": Zap,
    "map-pin": MapPin,
    "search": Search,
    "star": Star,
    "layers": Layers,
    "activity": Activity,
    "settings": Settings
};

interface ServiceContentProps {
    data: any;
    relatedServices: any[];
}

export default function ServiceContent({ data, relatedServices }: ServiceContentProps) {
    const Icon = IconMap[data.iconId] || Globe;

    return (
        <div className="flex flex-col gap-32 pb-32">
            {/* Hero Section */}
            <section className="relative py-32 overflow-hidden bg-slate-50 border-b border-slate-100">
                <div className="hero-glow opacity-30" />
                <div className="max-w-7xl mx-auto px-4 relative z-10">
                    <Breadcrumbs />
                    <div className="grid lg:grid-cols-2 gap-16 items-center mt-12">
                        <div className="space-y-8">
                            <div className="audit-chip">
                                <Icon className="w-4 h-4" />
                                PROFESSIONAL SERVICE
                            </div>
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] text-slate-900"
                            >
                                {data.title.split(' ').slice(0, -1).join(' ')} <br />
                                <span className="text-primary italic">{data.title.split(' ').slice(-1)}</span>
                            </motion.h1>
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.1 }}
                                className="text-xl text-slate-600 leading-relaxed font-medium"
                            >
                                {data.desc}
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="flex flex-wrap gap-4 pt-4"
                            >
                                <a
                                    href="https://wa.me/923474825228"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-primary hover:bg-primary/90 text-white px-10 py-5 rounded-2xl font-black flex items-center gap-3 shadow-xl shadow-primary/20 transition-all"
                                >
                                    <MessageCircle className="w-6 h-6" />
                                    Discuss This Service
                                </a>
                                <Link
                                    href="/audit"
                                    className="bg-slate-900 text-white px-10 py-5 rounded-2xl font-black hover:bg-slate-800 transition-all"
                                >
                                    Get Free Analysis
                                </Link>
                            </motion.div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="relative hidden lg:flex justify-center items-center"
                        >
                            <div className="w-80 h-80 bg-primary/10 rounded-full blur-[120px] absolute" />
                            <Icon className="w-64 h-64 text-primary relative z-10 drop-shadow-2xl" />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="bg-slate-50 py-24 border-y border-slate-100">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16 space-y-4">
                        <div className="section-label mx-auto">HOW IT WORKS</div>
                        <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
                            Our {data.shortTitle} <br />
                            Process
                        </h2>
                    </div>

                    <div className="max-w-4xl mx-auto space-y-6">
                        {data.process.map((step: string, i: number) => (
                            <div key={i} className="flex gap-6 items-start p-8 bg-white border border-slate-100 rounded-3xl hover:shadow-lg transition-all group">
                                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0 font-black text-primary group-hover:bg-primary group-hover:text-white transition-all text-lg">
                                    {i + 1}
                                </div>
                                <p className="text-lg text-slate-700 font-medium leading-relaxed pt-2">{step}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Related Services */}
            {relatedServices.length > 0 && (
                <section className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-12 space-y-4">
                        <div className="section-label mx-auto">RELATED SERVICES</div>
                        <h2 className="text-4xl font-black text-slate-900">Other Services</h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {relatedServices.map((service: any) => {
                            const ServiceIcon = IconMap[service.iconId] || Search;
                            return (
                                <Link
                                    key={service.slug}
                                    href={`/services/${service.slug}`}
                                    className="p-10 bg-white border border-slate-100 rounded-3xl hover:border-primary/30 hover:shadow-xl transition-all group"
                                >
                                    <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary transition-all">
                                        <ServiceIcon className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
                                    </div>
                                    <h3 className="text-xl font-black text-slate-900 group-hover:text-primary transition-colors mb-4">
                                        {service.title}
                                    </h3>
                                    <div className="flex items-center gap-2 text-primary font-black text-xs uppercase tracking-widest">
                                        Learn More <ArrowRight className="w-4 h-4" />
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                </section>
            )}

            {/* CTA Section */}
            <section className="max-w-7xl mx-auto px-4">
                <div className="bg-slate-900 rounded-[4rem] p-16 md:p-32 text-center space-y-12 relative overflow-hidden shadow-2xl">
                    <h2 className="text-5xl md:text-7xl font-black text-white leading-tight">Ready to Rank?</h2>
                    <div className="flex flex-wrap justify-center gap-6 relative z-10">
                        <a href="https://wa.me/923474825228" className="bg-primary text-white px-12 py-6 rounded-3xl font-black text-xl">
                            Chat on WhatsApp
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
