"use client";

import Link from "next/link";
import { Shield, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Github, ExternalLink } from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-slate-900 pt-24 pb-12 text-slate-300">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-16 mb-24">
                    {/* Brand Section */}
                    <div className="col-span-1 lg:col-span-2 space-y-8">
                        <Link href="/" className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center p-1 shadow-xl">
                                <img src="/logo.png" alt="Local SEO Experts Katy Logo" className="w-full h-full object-contain" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-2xl font-black tracking-tighter text-white leading-none">
                                    KATY SEO
                                </span>
                                <span className="text-[10px] font-black tracking-widest text-primary uppercase leading-tight">
                                    Authority Hub
                                </span>
                            </div>
                        </Link>
                        <p className="max-w-sm text-slate-400 text-lg leading-relaxed font-medium">
                            Katy's leading Semantic SEO authority. We specialize in turning local entities into market-dominating brands through technical precision and topical authority.
                        </p>
                        <div className="flex gap-4">
                            {[Twitter, Linkedin, Facebook].map((Icon, i) => (
                                <a key={i} href="#" className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center hover:bg-primary hover:text-white transition-all border border-white/10 group">
                                    <Icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Solutions */}
                    <div className="space-y-8">
                        <h4 className="text-white font-black uppercase tracking-widest text-xs">Solutions</h4>
                        <ul className="space-y-4">
                            {["Local SEO", "GBP Optimization", "Map Pack Ranking", "Citation Building", "Suspension Recovery"].map((item) => (
                                <li key={item}>
                                    <Link href={`/services/${item.toLowerCase().replace(/\s+/g, '-')}`} className="text-slate-400 hover:text-primary text-sm font-bold transition-colors flex items-center gap-2">
                                        <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100" /> {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Resources */}
                    <div className="space-y-8">
                        <h4 className="text-white font-black uppercase tracking-widest text-xs">Authority</h4>
                        <ul className="space-y-4">
                            <li><Link href="/blog" className="text-slate-400 hover:text-primary text-sm font-bold transition-colors">Semantic Blog</Link></li>
                            <li><Link href="/case-studies" className="text-slate-400 hover:text-primary text-sm font-bold transition-colors">Case Studies</Link></li>
                            <li><Link href="/audit" className="text-slate-400 hover:text-primary text-sm font-bold transition-colors">Free SEO Audit</Link></li>
                            <li><Link href="/guides" className="text-slate-400 hover:text-primary text-sm font-bold transition-colors">Technical Guides</Link></li>
                            <li><Link href="/pricing" className="text-slate-400 hover:text-primary text-sm font-bold transition-colors">Pricing Hub</Link></li>
                        </ul>
                    </div>

                    {/* Global Hubs */}
                    <div className="space-y-8">
                        <h4 className="text-white font-black uppercase tracking-widest text-xs">Global Hubs</h4>
                        <ul className="space-y-4">
                            <li><Link href="/locations/usa" className="text-slate-400 hover:text-primary text-sm font-bold transition-colors">United States</Link></li>
                            <li><Link href="/locations/uk" className="text-slate-400 hover:text-primary text-sm font-bold transition-colors">United Kingdom</Link></li>
                            <li><Link href="/locations/canada" className="text-slate-400 hover:text-primary text-sm font-bold transition-colors">Canada</Link></li>
                            <li><Link href="/locations/australia" className="text-slate-400 hover:text-primary text-sm font-bold transition-colors">Australia</Link></li>
                            <li><Link href="/locations/dubai" className="text-slate-400 hover:text-primary text-sm font-bold transition-colors">Dubai</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex items-center gap-8">
                        <div className="flex items-center gap-3">
                            <Phone className="w-5 h-5 text-primary" />
                            <p className="text-sm font-black">+92 347 4825228</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <Mail className="w-5 h-5 text-primary" />
                            <p className="text-sm font-black">localseoexpertskaty@gmail.com</p>
                        </div>
                    </div>

                    <p className="text-slate-500 text-xs font-bold">
                        © {currentYear} Local SEO Experts Katy. Built with Semantic Precision.
                    </p>
                </div>
            </div>
        </footer>
    );
}
