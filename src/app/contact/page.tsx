"use client";

import { motion } from "framer-motion";
import { MessageCircle, Phone, Mail, Clock, MapPin, Send, Zap, Star } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function ContactPage() {
    return (
        <div className="flex flex-col gap-32 pb-32">
            <section className="relative py-32 overflow-hidden bg-slate-50 border-b border-slate-100">
                <div className="hero-glow opacity-30" />
                <div className="max-w-7xl mx-auto px-4 text-center space-y-8 relative z-10">
                    <Breadcrumbs />
                    <div className="audit-chip mx-auto">GLOBAL AVAILABILITY</div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-6xl md:text-8xl font-black tracking-tighter text-slate-900"
                    >
                        Get in <span className="text-primary italic">Touch</span>
                    </motion.h1>
                    <p className="text-xl text-slate-500 max-w-2xl mx-auto font-medium leading-relaxed">
                        Looking for a GMB suspension fix or a local authority strategy? Our team is active 24/7 to solve your local market challenges.
                    </p>
                </div>
            </section>

            <section className="max-w-7xl mx-auto w-full px-4 grid lg:grid-cols-2 gap-20">
                {/* Contact Info */}
                <div className="space-y-16">
                    <div className="space-y-6">
                        <div className="section-label">COMMUNICATION HUBS</div>
                        <h2 className="text-5xl font-black text-slate-900 leading-tight">Discuss Your <br />Entity Health.</h2>
                        <p className="text-slate-500 text-lg font-medium">WhatsApp is our primary channel for rapid technical audits and project documentation.</p>
                    </div>

                    <div className="grid gap-6">
                        <a href="https://wa.me/923474825228" target="_blank" rel="noopener noreferrer" className="p-10 bg-white border border-slate-100 rounded-[3rem] shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all flex items-center gap-8 group">
                            <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary transition-all">
                                <MessageCircle className="w-10 h-10 text-primary group-hover:text-white" />
                            </div>
                            <div>
                                <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-1">WhatsApp Direct</p>
                                <p className="text-3xl font-black text-slate-900">+92 347 4825228</p>
                            </div>
                        </a>

                        <div className="p-10 bg-white border border-slate-100 rounded-[3rem] shadow-lg flex items-center gap-8">
                            <div className="w-20 h-20 bg-slate-100 rounded-2xl flex items-center justify-center">
                                <Mail className="w-10 h-10 text-slate-900" />
                            </div>
                            <div>
                                <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-1">Email Strategy</p>
                                <p className="text-3xl font-black text-slate-900">hello@localseoexpertskaty.com</p>
                            </div>
                        </div>

                        <div className="p-10 bg-slate-50 border border-slate-100 rounded-[3rem] flex items-center gap-8 opacity-60">
                            <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center">
                                <MapPin className="w-10 h-10 text-slate-400" />
                            </div>
                            <div>
                                <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-1">Service Footprint</p>
                                <p className="text-xl font-black text-slate-900 uppercase">USA • UK • Canada • AU • UAE</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="bg-white p-12 md:p-16 rounded-[4rem] border border-slate-100 shadow-2xl space-y-12 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
                        <Star className="w-32 h-32 text-primary" />
                    </div>

                    <div className="space-y-4 relative z-10">
                        <h3 className="text-4xl font-black text-slate-900">Strategic Inquiry</h3>
                        <p className="text-slate-500 font-medium">Provide your business URL for a preliminary entity audit.</p>
                    </div>

                    <form className="space-y-8 relative z-10" onSubmit={(e) => e.preventDefault()}>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="space-y-3">
                                <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Full Name</label>
                                <input type="text" placeholder="John Doe" className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-5 text-slate-900 placeholder:text-slate-300 focus:border-primary focus:bg-white outline-none transition-all font-medium" />
                            </div>
                            <div className="space-y-3">
                                <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Business Name</label>
                                <input type="text" placeholder="Katy Dental Hub" className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-5 text-slate-900 placeholder:text-slate-300 focus:border-primary focus:bg-white outline-none transition-all font-medium" />
                            </div>
                        </div>

                        <div className="space-y-3">
                            <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Email Address</label>
                            <input type="email" placeholder="john@company.com" className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-5 text-slate-900 placeholder:text-slate-300 focus:border-primary focus:bg-white outline-none transition-all font-medium" />
                        </div>

                        <div className="space-y-3">
                            <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Service Primary Goal</label>
                            <select className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-5 text-slate-900 focus:border-primary focus:bg-white outline-none transition-all appearance-none cursor-pointer font-bold">
                                <option>Google Business Profile Optimization</option>
                                <option>GMB Suspension Recovery</option>
                                <option>Local SEO Strategy Cluster</option>
                                <option>Map Pack Dominance</option>
                                <option>Semantic Content Mapping</option>
                            </select>
                        </div>

                        <div className="space-y-3">
                            <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Message / Current URL</label>
                            <textarea placeholder="Tell us about your local market visibility challenges..." rows={4} className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-5 text-slate-900 placeholder:text-slate-300 focus:border-primary focus:bg-white outline-none transition-all resize-none font-medium" />
                        </div>

                        <button className="w-full bg-slate-900 hover:bg-primary text-white py-6 rounded-3xl font-black text-xl transition-all flex items-center justify-center gap-3 shadow-2xl shadow-slate-200 group">
                            Send Analysis Request <Send className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </button>
                    </form>
                </div>
            </section>
        </div>
    );
}
