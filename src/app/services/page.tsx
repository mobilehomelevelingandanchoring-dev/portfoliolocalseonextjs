"use client";

import { motion } from "framer-motion";
import { ShieldCheck, MapPin, Zap, Search, Award, Activity, ArrowRight, MessageCircle, Star, Target, CheckCircle2, TrendingUp, Users, Clock, Globe } from "lucide-react";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function ServicesPage() {
    const services = [
        {
            title: "Google Business Profile Optimization",
            slug: "google-business-profile-optimization",
            desc: "Your Google Business Profile is the foundation of local visibility. We optimize every element—categories, services, photos, posts, and Q&A—so Google understands exactly what you offer and shows your business when customers search.",
            icon: ShieldCheck,
            features: [
                "Complete profile setup and verification",
                "Strategic category and attribute selection",
                "Regular post scheduling for engagement",
                "Q&A management and monitoring"
            ],
            benefits: "Get found when customers search for businesses like yours in your area"
        },
        {
            title: "Local SEO Strategy",
            slug: "local-seo",
            desc: "Ranking locally requires more than just keywords—it's about establishing your business as the trusted authority in your area and industry. We create content and optimize your site to match what customers actually search for.",
            icon: Activity,
            features: [
                "Location-based keyword research",
                "Service page optimization",
                "Topical content strategy",
                "Internal linking structure"
            ],
            benefits: "Rank higher for the searches that bring you customers and revenue"
        },
        {
            title: "Google Maps Ranking",
            slug: "map-pack-ranking",
            desc: "The Google Map Pack (top 3 local results) gets the most clicks. We optimize the specific factors Google uses to rank businesses in the map pack: proximity signals, relevance, and prominence through reviews and citations.",
            icon: MapPin,
            features: [
                "Map pack ranking optimization",
                "Proximity and relevance signals",
                "Click-through rate improvement",
                "Geographic coverage expansion"
            ],
            benefits: "Appear in the top 3 map results when customers search in your area"
        },
        {
            title: "GMB Suspension Recovery",
            slug: "gmb-suspension-recovery",
            desc: "A suspended Google Business Profile means lost customers and revenue. We specialize in identifying why your profile was suspended, fixing compliance issues, and handling the entire reinstatement process with Google.",
            icon: Zap,
            features: [
                "Suspension cause investigation",
                "Policy compliance fixes",
                "Reinstatement appeal management",
                "Prevention strategy implementation"
            ],
            benefits: "Get your business back online and visible to local customers quickly"
        },
        {
            title: "Local Citation Building",
            slug: "citation-building",
            desc: "Citations are mentions of your business name, address, and phone number on other websites. Consistent, accurate citations across directories build trust with Google and help you rank higher in local search results.",
            icon: Search,
            features: [
                "Major directory submissions (Yelp, Yellow Pages, etc.)",
                "Industry-specific citation building",
                "NAP consistency audits and cleanup",
                "Duplicate listing removal"
            ],
            benefits: "Strengthen your local presence with consistent business information everywhere"
        },
        {
            title: "Online Reputation Management",
            slug: "reputation-management",
            desc: "Reviews directly impact your rankings and customer decisions. We help you generate more positive reviews from satisfied customers, respond professionally to all feedback, and build the reputation that drives business growth.",
            icon: Award,
            features: [
                "Review generation systems",
                "Review monitoring and alerts",
                "Professional response management",
                "Reputation analysis and reporting"
            ],
            benefits: "Turn customer feedback into a competitive advantage that brings more business"
        },
        {
            title: "Multi-Location SEO",
            slug: "multi-location-seo",
            desc: "Serving multiple cities or have multiple office locations? We create location-specific strategies for each area you serve, optimizing separate Google Business Profiles and creating targeted content for every location.",
            icon: Target,
            features: [
                "Individual location profile optimization",
                "Location-specific landing pages",
                "Multi-location tracking and reporting",
                "Franchise and chain SEO strategies"
            ],
            benefits: "Rank in every city you serve without duplicate content issues"
        },
        {
            title: "Local Link Building",
            slug: "local-link-building",
            desc: "Links from other local websites signal to Google that you're an established part of the local business community. We build relationships with relevant local sites, directories, and organizations to earn quality local backlinks.",
            icon: Activity,
            features: [
                "Local business partnership links",
                "Industry-specific directory links",
                "Local sponsorship opportunities",
                "Community and event link building"
            ],
            benefits: "Increase your authority and trust in your local market"
        },
        {
            title: "Local Technical SEO",
            slug: "local-technical-seo",
            desc: "The technical foundation matters. We ensure your website is properly structured with schema markup, fast loading speeds, mobile optimization, and all the technical elements Google needs to understand and rank your local business.",
            icon: Activity,
            features: [
                "LocalBusiness schema implementation",
                "Mobile-first optimization",
                "Page speed improvements",
                "Technical audit and fixes"
            ],
            benefits: "Ensure Google can properly crawl, understand, and rank your website"
        }
    ];

    return (
        <div className="flex flex-col gap-32 pb-32">
            {/* Hero Section */}
            <section className="relative py-32 overflow-hidden bg-slate-50 border-b border-slate-100">
                <div className="hero-glow opacity-30" />
                <div className="max-w-7xl mx-auto px-4 text-center space-y-8 relative z-10">
                    <Breadcrumbs />
                    <div className="audit-chip mx-auto">
                        <Star className="w-4 h-4" />
                        COMPREHENSIVE LOCAL SEO
                    </div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-6xl md:text-8xl font-black tracking-tighter text-slate-900"
                    >
                        Local SEO Services <br />
                        <span className="text-primary italic">That Drive Results</span>
                    </motion.h1>
                    <p className="text-xl text-slate-600 max-w-3xl mx-auto font-medium leading-relaxed">
                        Everything you need to show up when local customers search for businesses like yours. From Google Business Profile optimization to technical SEO, we handle the complete local search strategy.
                    </p>

                    {/* Trust indicators */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="flex flex-wrap justify-center gap-8 pt-8"
                    >
                        <div className="flex items-center gap-3">
                            <CheckCircle2 className="w-5 h-5 text-green-600" />
                            <span className="text-sm font-bold text-slate-700">White-Hat Methods Only</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <CheckCircle2 className="w-5 h-5 text-green-600" />
                            <span className="text-sm font-bold text-slate-700">Transparent Reporting</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <CheckCircle2 className="w-5 h-5 text-green-600" />
                            <span className="text-sm font-bold text-slate-700">No Long-Term Contracts</span>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* What is Local SEO - Educational Section */}
            <section className="max-w-7xl mx-auto px-4 w-full">
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    <div className="space-y-8">
                        <div className="section-label">UNDERSTANDING LOCAL SEO</div>
                        <h2 className="text-5xl font-black text-slate-900 leading-tight">
                            How Local SEO <br />
                            <span className="text-primary italic">Brings You Customers</span>
                        </h2>
                        <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
                            <p>
                                When someone searches "plumber near me" or "dentist in [city]," Google shows businesses in the <strong>local map pack</strong>—those top 3 results with the map. This is where local customers find businesses to call, visit, or book.
                            </p>
                            <p>
                                Local SEO is different from regular SEO. It's specifically designed to help businesses that serve customers in a geographic area. Whether you're a restaurant, law firm, HVAC company, or veterinary clinic—if customers need to visit you or you visit them, local SEO is how they'll find you.
                            </p>
                            <p>
                                Our approach combines <strong>Google Business Profile optimization</strong>, <strong>citation building</strong>, <strong>review management</strong>, and <strong>location-targeted content</strong> to make sure Google shows your business when local customers are searching.
                            </p>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="absolute -inset-4 bg-slate-100 rounded-[4rem] -z-10" />
                        <div className="p-12 bg-white rounded-[3rem] border border-slate-200 shadow-xl space-y-8">
                            <h3 className="text-3xl font-black text-slate-900">What Affects Local Rankings</h3>
                            <div className="space-y-6">
                                {[
                                    {
                                        factor: "Proximity",
                                        desc: "How close your business is to the person searching",
                                        icon: MapPin
                                    },
                                    {
                                        factor: "Relevance",
                                        desc: "How well your profile and content match the search",
                                        icon: Target
                                    },
                                    {
                                        factor: "Prominence",
                                        desc: "Your reputation through reviews, citations, and links",
                                        icon: TrendingUp
                                    }
                                ].map((item: { factor: string, desc: string, icon: any }, i: number) => (
                                    <div key={i} className="flex gap-4 items-start group">
                                        <div className="w-12 h-12 bg-slate-50 rounded-xl shrink-0 flex items-center justify-center border border-slate-100 group-hover:bg-primary group-hover:border-primary transition-all">
                                            <item.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                                        </div>
                                        <div>
                                            <p className="font-black text-slate-900 mb-1">{item.factor}</p>
                                            <p className="text-sm text-slate-600 font-medium">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="bg-slate-50 py-24 border-y border-slate-100">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-20 space-y-4">
                        <div className="section-label mx-auto">WHAT WE DO</div>
                        <h2 className="text-5xl font-black text-slate-900 tracking-tight">
                            Complete Local SEO Services
                        </h2>
                        <p className="text-lg text-slate-600 max-w-3xl mx-auto font-medium">
                            Every service is designed to improve your visibility in local search, bring more customers to your business, and deliver measurable results you can track.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {services.map((s: any, i: number) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -12 }}
                                className="p-10 bg-white rounded-[3rem] border border-slate-100 hover:border-primary/30 transition-all flex flex-col h-full group shadow-lg hover:shadow-2xl shadow-slate-100"
                            >
                                {/* Icon */}
                                <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mb-8 border border-slate-100 group-hover:bg-primary group-hover:border-primary transition-all shadow-sm">
                                    <s.icon className="w-8 h-8 text-primary group-hover:text-white transition-all group-hover:scale-110" />
                                </div>

                                {/* Title */}
                                <h3 className="text-2xl font-black mb-4 text-slate-900 group-hover:text-primary transition-colors leading-tight">
                                    {s.title}
                                </h3>

                                {/* Description */}
                                <p className="text-slate-600 leading-relaxed mb-8 font-medium">
                                    {s.desc}
                                </p>

                                {/* Benefits highlight */}
                                <div className="p-4 bg-green-50 border border-green-100 rounded-2xl mb-6">
                                    <p className="text-sm font-bold text-green-800 flex items-start gap-2">
                                        <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" />
                                        {s.benefits}
                                    </p>
                                </div>

                                {/* Features */}
                                <div className="space-y-3 mb-8 pb-8 border-b border-slate-100 flex-grow">
                                    <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-3">What's Included:</p>
                                    {s.features.map((f: string, fi: number) => (
                                        <div key={fi} className="flex items-start gap-2">
                                            <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                                            <span className="text-sm text-slate-600 font-medium">{f}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* CTA */}
                                <Link
                                    href={`/services/${s.slug}`}
                                    className="inline-flex items-center gap-2 text-slate-900 font-black uppercase text-xs tracking-widest hover:gap-4 transition-all border-b-2 border-primary/20 pb-1 w-fit group-hover:border-primary"
                                >
                                    Learn More <ArrowRight className="w-4 h-4 text-primary" />
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How We Work - Process Section */}
            <section className="max-w-7xl mx-auto px-4 w-full">
                <div className="text-center mb-16 space-y-4">
                    <div className="section-label mx-auto">OUR PROCESS</div>
                    <h2 className="text-5xl font-black text-slate-900 tracking-tight">
                        How We Help Your <br />
                        Business Get Found
                    </h2>
                    <p className="text-lg text-slate-600 max-w-3xl mx-auto font-medium">
                        A transparent, step-by-step approach that focuses on the ranking factors that actually matter for local businesses.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                        {
                            step: "01",
                            title: "Audit & Analysis",
                            desc: "We analyze your current Google Business Profile, citations, reviews, and website to identify what's holding you back and where the biggest opportunities are.",
                            icon: Search
                        },
                        {
                            step: "02",
                            title: "Strategy Development",
                            desc: "Based on your industry, location, and competitors, we create a custom plan prioritizing the services that will have the biggest impact on your visibility.",
                            icon: Target
                        },
                        {
                            step: "03",
                            title: "Implementation",
                            desc: "We execute the strategy—optimizing your profiles, building citations, managing reviews, and creating the content that helps you rank for local searches.",
                            icon: Activity
                        },
                        {
                            step: "04",
                            title: "Reporting & Optimization",
                            desc: "You get monthly reports showing ranking improvements, traffic growth, and lead volume. We continuously optimize based on what's working.",
                            icon: TrendingUp
                        }
                    ].map((item, i) => (
                        <div key={i} className="p-8 bg-white border border-slate-100 rounded-3xl hover:shadow-lg transition-all group">
                            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 text-primary font-black text-xl group-hover:bg-primary group-hover:text-white transition-all">
                                {item.step}
                            </div>
                            <h3 className="text-xl font-black text-slate-900 mb-3">{item.title}</h3>
                            <p className="text-sm text-slate-600 leading-relaxed font-medium">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="bg-slate-50 py-24 border-y border-slate-100">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <div className="space-y-8">
                            <div className="section-label">WHY WORK WITH US</div>
                            <h2 className="text-5xl font-black text-slate-900 leading-tight">
                                Ethical, Transparent <br />
                                <span className="text-primary italic">Local SEO</span>
                            </h2>
                            <div className="space-y-6 text-slate-600 text-lg leading-relaxed font-medium">
                                <p>
                                    We've been helping local businesses improve their online visibility since 2021. Our approach is straightforward: understand what customers search for, optimize your online presence to match, and build the trust signals that make Google show your business first.
                                </p>
                                <p>
                                    Everything we do follows <strong>Google's guidelines</strong>. No shortcuts, no black-hat tactics, no risky strategies that could get your business penalized. Just proven, sustainable local SEO that delivers long-term results.
                                </p>
                                <p>
                                    Most importantly, we're transparent about what we're doing and why. You'll understand exactly how each service helps your business, and you'll see the results in your monthly reports—more rankings, more traffic, more customers.
                                </p>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-6">
                            {[
                                {
                                    icon: Clock,
                                    title: "3+ Years Experience",
                                    desc: "Specialized in local SEO since 2021"
                                },
                                {
                                    icon: Users,
                                    title: "250+ Businesses",
                                    desc: "Helped across multiple industries"
                                },
                                {
                                    icon: Globe,
                                    title: "40+ Cities",
                                    desc: "Serving businesses worldwide"
                                },
                                {
                                    icon: Award,
                                    title: "Ethical Methods",
                                    desc: "100% white-hat, Google-approved"
                                },
                                {
                                    icon: TrendingUp,
                                    title: "Results-Driven",
                                    desc: "Focus on rankings and revenue"
                                },
                                {
                                    icon: MessageCircle,
                                    title: "Direct Access",
                                    desc: "No account managers, work with experts"
                                }
                            ].map((item, i) => (
                                <div key={i} className="p-6 bg-white border border-slate-100 rounded-2xl hover:border-primary/20 transition-all group">
                                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary transition-all">
                                        <item.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                                    </div>
                                    <p className="font-black text-slate-900 mb-1 text-sm">{item.title}</p>
                                    <p className="text-xs text-slate-600 font-medium">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Who We Help Section */}
            <section className="max-w-7xl mx-auto px-4 w-full">
                <div className="text-center mb-16 space-y-4">
                    <div className="section-label mx-auto">WHO WE SERVE</div>
                    <h2 className="text-5xl font-black text-slate-900 tracking-tight">
                        Local Businesses <br />
                        We Help Rank
                    </h2>
                    <p className="text-lg text-slate-600 max-w-3xl mx-auto font-medium">
                        If you serve customers in a specific area, we can help you show up when they search. We work with businesses across all industries.
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
                        "Home Services"
                    ].map((industry, i) => (
                        <div key={i} className="p-6 bg-slate-50 border border-slate-100 rounded-2xl text-center hover:border-primary/30 transition-all">
                            <p className="font-black text-slate-900">{industry}</p>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12 p-8 bg-slate-50 rounded-3xl border border-slate-100">
                    <p className="text-slate-700 font-medium">
                        <strong>And many more.</strong> Any service-based business that relies on local customers can benefit from local SEO.
                    </p>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="bg-slate-50 py-24 border-y border-slate-100">
                <div className="max-w-4xl mx-auto px-4">
                    <div className="text-center mb-16 space-y-4">
                        <div className="section-label mx-auto">COMMON QUESTIONS</div>
                        <h2 className="text-5xl font-black text-slate-900 tracking-tight">
                            Local SEO Service <br />
                            Questions Answered
                        </h2>
                    </div>

                    <div className="space-y-6">
                        {[
                            {
                                q: "Which local SEO service should I start with?",
                                a: "For most businesses, Google Business Profile optimization is the starting point. Your GBP is often the first thing potential customers see, and it's the foundation for ranking in the map pack. From there, we typically add citation building and review management to strengthen your overall local presence."
                            },
                            {
                                q: "How long does it take to see results?",
                                a: "You'll typically see initial improvements within 30-60 days—things like better GBP visibility and more accurate citations. Significant ranking improvements usually take 90 days or more, as Google needs time to recognize and trust the changes. Local SEO is a long-term investment that compounds over time."
                            },
                            {
                                q: "Do I need all these services, or can I pick just one?",
                                a: "You can absolutely start with one service and add more as needed. However, local SEO works best when multiple factors work together—your GBP, citations, reviews, and content all reinforce each other. We'll recommend which services make sense based on your current situation and goals."
                            },
                            {
                                q: "What's the difference between local SEO and regular SEO?",
                                a: "Regular SEO focuses on ranking in organic search results across a wide area. Local SEO specifically targets customers in your geographic area and focuses on appearing in the map pack, local search results, and 'near me' queries. It requires optimizing your Google Business Profile, building local citations, and creating location-specific content."
                            },
                            {
                                q: "Can you guarantee #1 rankings?",
                                a: "No ethical SEO company can guarantee specific rankings—Google's algorithm is complex and constantly changing. What we can guarantee is that we'll follow best practices, provide transparent reporting, and continuously work to improve your visibility. Our track record speaks for itself: most clients see significant improvement in rankings and customer inquiries."
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
                </div>
            </section>

            {/* CTA Section */}
            <section className="max-w-7xl mx-auto px-4 w-full">
                <div className="bg-slate-900 rounded-[4rem] p-16 md:p-32 text-center space-y-12 relative overflow-hidden shadow-2xl">
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/10 to-transparent pointer-events-none opacity-50" />
                    <div className="hero-glow opacity-10" />

                    <div className="space-y-6 relative z-10">
                        <h2 className="text-5xl md:text-7xl font-black text-white leading-tight tracking-tighter">
                            Ready to Get More <br />
                            Local Customers?
                        </h2>
                        <p className="text-slate-400 max-w-2xl mx-auto text-xl font-medium">
                            Let's discuss which services make sense for your business. We'll review your current online presence and recommend a strategy that fits your goals and budget.
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
                            Start a Conversation
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
                            <CheckCircle2 className="w-10 h-10 mb-2 text-white" />
                            <p className="text-[10px] font-black uppercase text-white">White-Hat Only</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <Clock className="w-10 h-10 mb-2 text-white" />
                            <p className="text-[10px] font-black uppercase text-white">No Contracts</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <TrendingUp className="w-10 h-10 mb-2 text-white" />
                            <p className="text-[10px] font-black uppercase text-white">Results Focused</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <Users className="w-10 h-10 mb-2 text-white" />
                            <p className="text-[10px] font-black uppercase text-white">250+ Projects</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}