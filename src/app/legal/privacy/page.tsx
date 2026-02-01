"use client";

import { motion } from "framer-motion";

export default function PrivacyPage() {
    return (
        <div className="max-w-4xl mx-auto px-4 py-24 space-y-12">
            <h1 className="text-5xl font-black">Privacy Policy</h1>
            <div className="prose prose-invert prose-lg text-slate-400">
                <p>At Razacheena Local SEO Expert, we take your privacy seriously. This policy describes how we collect and use your data when you request an audit or contact us.</p>
                <h2>Data Collection</h2>
                <p>We collect your business name, email, and website URL solely for the purpose of performing local SEO audits and providing consultation services.</p>
                <h2>Data Usage</h2>
                <p>Your data is never sold to third parties. We use it internally to communicate with you about your SEO project.</p>
            </div>
        </div>
    );
}
