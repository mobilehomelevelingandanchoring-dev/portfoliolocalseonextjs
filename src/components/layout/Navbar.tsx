"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Menu, Shield, Zap, ChevronDown, X } from "lucide-react";

const services = [
    { name: "Local SEO", href: "/services/local-seo" },
    { name: "GBP Optimization", href: "/services/google-business-profile-optimization" },
    { name: "Map Pack Ranking", href: "/services/map-pack-ranking" },
    { name: "Citation Building", href: "/services/citation-building" },
    { name: "GMB Suspension Recovery", href: "/services/gmb-suspension-recovery" },
    { name: "Reputation Management", href: "/services/reputation-management" },
];

const locations = [
    { name: "USA", href: "/locations/usa" },
    { name: "UK", href: "/locations/uk" },
    { name: "Canada", href: "/locations/canada" },
    { name: "Australia", href: "/locations/australia" },
    { name: "Dubai", href: "/locations/dubai" },
];

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

    return (
        <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-xl border-b border-slate-100 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 h-24 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-3 group shrink-0">
                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center group-hover:rotate-6 transition-transform shadow-xl shadow-slate-200 overflow-hidden border border-slate-100 p-1">
                        <img src="/logo.png" alt="Local SEO Experts Katy Logo" className="w-full h-full object-contain" />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-xl font-black tracking-tighter text-slate-900 leading-none">
                            KATY SEO
                        </span>
                        <span className="text-[10px] font-black tracking-widest text-primary uppercase leading-tight">
                            Authority Hub
                        </span>
                    </div>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden lg:flex gap-2 items-center">
                    <Link href="/" className="nav-link px-4 font-black">Home</Link>

                    {/* Services Dropdown */}
                    <div
                        className="relative"
                        onMouseEnter={() => setActiveDropdown("services")}
                        onMouseLeave={() => setActiveDropdown(null)}
                    >
                        <button className="nav-link px-4 flex items-center gap-1 group font-black">
                            Services <ChevronDown className={`w-4 h-4 transition-transform group-hover:rotate-180 ${activeDropdown === "services" ? "rotate-180" : ""}`} />
                        </button>
                        <AnimatePresence>
                            {activeDropdown === "services" && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 10 }}
                                    className="absolute top-full left-0 w-72 bg-white border border-slate-100 rounded-3xl p-4 shadow-2xl mt-2 overflow-hidden"
                                >
                                    <div className="grid gap-1">
                                        {services.map((s) => (
                                            <Link key={s.href} href={s.href} className="p-3 rounded-2xl hover:bg-slate-50 transition-colors text-sm font-bold text-slate-500 hover:text-primary">
                                                {s.name}
                                            </Link>
                                        ))}
                                        <div className="h-[1px] bg-slate-100 my-2" />
                                        <Link href="/services" className="p-3 rounded-2xl bg-primary text-white text-xs font-black text-center shadow-lg shadow-primary/20">
                                            VIEW ALL CLUSTERS
                                        </Link>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Locations Dropdown */}
                    <div
                        className="relative"
                        onMouseEnter={() => setActiveDropdown("locations")}
                        onMouseLeave={() => setActiveDropdown(null)}
                    >
                        <button className="nav-link px-4 flex items-center gap-1 group font-black">
                            Locations <ChevronDown className={`w-4 h-4 transition-transform group-hover:rotate-180 ${activeDropdown === "locations" ? "rotate-180" : ""}`} />
                        </button>
                        <AnimatePresence>
                            {activeDropdown === "locations" && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 10 }}
                                    className="absolute top-full left-0 w-72 bg-white border border-slate-100 rounded-3xl p-4 shadow-2xl mt-2 overflow-hidden"
                                >
                                    <div className="grid gap-1">
                                        {locations.map((l) => (
                                            <Link key={l.href} href={l.href} className="p-3 rounded-2xl hover:bg-slate-50 transition-colors text-sm font-bold text-slate-500 hover:text-primary">
                                                {l.name}
                                            </Link>
                                        ))}
                                        <div className="h-[1px] bg-slate-100 my-2" />
                                        <Link href="/locations" className="p-3 rounded-2xl bg-slate-900 text-white text-xs font-black text-center shadow-lg">
                                            SYSTEM ACCESS HUB
                                        </Link>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    <Link href="/case-studies" className="nav-link px-4 font-black">Case Studies</Link>
                    <Link href="/blog" className="nav-link px-4 font-black">Blog</Link>
                    <Link href="/pricing" className="nav-link px-4 font-black">Pricing</Link>
                    <Link href="/about" className="nav-link px-4 font-black">About Us</Link>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-4">
                    <button className="p-3 hover:bg-slate-50 rounded-2xl transition-colors text-slate-400 hover:text-primary hidden sm:block border border-transparent hover:border-slate-100">
                        <Search className="w-5 h-5" />
                    </button>
                    <Link href="/audit" className="hidden sm:flex items-center gap-2 bg-primary text-white px-8 py-3.5 rounded-2xl font-black hover:scale-105 transition-all shadow-xl shadow-primary/20 active:scale-95 text-xs uppercase tracking-widest">
                        <Zap className="w-4 h-4 fill-white" /> Free SEO Audit
                    </Link>

                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="lg:hidden p-3 bg-slate-50 rounded-2xl text-slate-900 border border-slate-100"
                    >
                        {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden border-t border-slate-100 bg-white overflow-hidden"
                    >
                        <div className="flex flex-col p-6 gap-2">
                            <Link href="/" className="p-4 rounded-2xl hover:bg-slate-50 font-black text-slate-900 transition-colors">Home</Link>
                            <Link href="/services" className="p-4 rounded-2xl hover:bg-slate-50 font-black text-slate-900 transition-colors">Services</Link>
                            <Link href="/locations" className="p-4 rounded-2xl hover:bg-slate-50 font-black text-slate-900 transition-colors">Locations</Link>
                            <Link href="/case-studies" className="p-4 rounded-2xl hover:bg-slate-50 font-black text-slate-900 transition-colors">Case Studies</Link>
                            <Link href="/pricing" className="p-4 rounded-2xl hover:bg-slate-50 font-black text-slate-900 transition-colors">Pricing</Link>
                            <Link href="/about" className="p-4 rounded-2xl hover:bg-slate-50 font-black text-slate-900 transition-colors">About Us</Link>
                            <Link href="/audit" className="p-5 mt-4 bg-primary text-white text-center rounded-2xl font-black shadow-xl shadow-primary/20">FREE SEO AUDIT</Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
