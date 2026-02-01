"use client";

import { motion } from "framer-motion";
import { Search, Home, ArrowLeft, MessageCircle } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
    return (
        <div className="min-h-[80vh] flex items-center justify-center px-4">
            <div className="max-w-3xl w-full text-center space-y-12">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="relative"
                >
                    <div className="text-[12rem] md:text-[20rem] font-black text-slate-50 leading-none select-none">
                        404
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-24 h-24 bg-primary/10 rounded-full blur-3xl" />
                        <Search className="w-20 h-20 text-primary animate-bounce-slow" />
                    </div>
                </motion.div>

                <div className="space-y-6 relative z-10">
                    <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
                        Entity Not Found
                    </h1>
                    <p className="text-xl text-slate-500 font-medium max-w-lg mx-auto leading-relaxed">
                        The resource you're looking for has either been moved, deleted, or never existed in our topical map. Let's get you back on track.
                    </p>
                </div>

                <div className="flex flex-wrap justify-center gap-6 pt-8">
                    <Link
                        href="/"
                        className="bg-primary text-white px-10 py-5 rounded-2xl font-black flex items-center gap-3 shadow-xl shadow-primary/20 hover:scale-105 transition-all"
                    >
                        <Home className="w-5 h-5" /> Back to Base
                    </Link>
                    <Link
                        href="/services"
                        className="bg-slate-900 text-white px-10 py-5 rounded-2xl font-black flex items-center gap-3 hover:bg-slate-800 transition-all shadow-xl"
                    >
                        View Solutions
                    </Link>
                </div>

                <div className="pt-12 flex justify-center gap-8">
                    <div className="flex items-center gap-2 text-slate-400 font-bold text-xs uppercase tracking-widest">
                        <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                        Still Lost?
                    </div>
                    <a href="https://wa.me/923474825228" className="text-primary font-black text-xs uppercase tracking-widest hover:underline">
                        Message Razacheena
                    </a>
                </div>
            </div>
        </div>
    );
}
