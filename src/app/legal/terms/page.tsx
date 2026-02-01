"use client";

import { motion } from "framer-motion";

export default function TermsPage() {
    return (
        <div className="max-w-4xl mx-auto px-4 py-24 space-y-12">
            <h1 className="text-5xl font-black">Terms of Service</h1>
            <div className="prose prose-invert prose-lg text-slate-400">
                <p>Welcome to Razacheena Local SEO Expert. By accessing this website, you agree to the following terms.</p>
                <h2>Services</h2>
                <p>We provide Local SEO consulting, GBP optimization, and restoration services. Results vary based on market competition and initial entity trust.</p>
                <h2>No Guarantees</h2>
                <p>While we use industry-leading frameworks (Koray Tuğberk GÜBÜR), we do not guarantee specific ranking positions as Google's algorithms are subject to change.</p>
            </div>
        </div>
    );
}
