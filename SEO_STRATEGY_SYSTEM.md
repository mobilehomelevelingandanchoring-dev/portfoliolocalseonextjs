# Razacheena Local SEO Expert - Branding & Content System

This document outlines the Semantic SEO architecture and branding system for the Razacheena Local SEO Expert agency website.

## 1. Page Hierarchy & URL Structure

| Page | URL | Purpose |
| :--- | :--- | :--- |
| **Homepage** | `/` | Entity definition, trust signals, conversion hub. |
| **About** | `/about` | Brand story, experience (3+ years), and transparency. |
| **Services Overview** | `/services` | Service cluster hub. |
| **GMB Optimization** | `/services/google-business-profile-optimization` | Core service page. |
| **Local SEO Strategy** | `/services/local-seo` | Core service page. |
| **Map Pack Ranking** | `/services/map-pack-ranking` | Core service page. |
| **GMB Recovery** | `/services/gmb-suspension-recovery` | High-intent solution page. |
| **Citation Building** | `/services/citation-building` | Technical foundation page. |
| **Reputation Management** | `/services/reputation-management` | Social proof strategy page. |
| **Pricing** | `/pricing` | Transparent investment models. |
| **Case Studies** | `/case-studies` | Proof of authority. |
| **Contact** | `/contact` | Direct communication channel (WhatsApp/Form). |
| **Blog Hub** | `/blog` | Topical authority expansion (Internal Linking). |
| **City Hubs** | `/locations/[country]/[city]` | Geo-targeted entity landing pages. |

---

## 2. Keyword Clusters (Semantic Groups)

### Cluster A: GBP Authority
- Google Business Profile optimization
- GMB audit services
- GMB suspension recovery
- Google Maps ranking strategy
- Local 3-pack penetration

### Cluster B: Semantic Local SEO
- Local SEO topical maps
- Semantic entity optimization
- Geo-targeted content clusters
- Local search intent mapping
- Knowledge Graph for small business

### Cluster C: Local Technical SEO
- LocalBusiness Schema markup
- NAP consistency audit
- Geo-tagged metadata
- Local link building strategies
- Citation cleanup services

---

## 3. Internal Linking Map (Koray Framework)

- **Homepage** links to all **Core Services** and **Top Region Hubs** (USA, UK, etc.).
- **Service Pages** link to related **City Pages** (e.g., "See our Local SEO results in London").
- **City Pages** link back to the **Core Service** utilized (e.g., "Learn more about our Map Pack Ranking service").
- **Blog Posts** link to **Services** to provide educational context (Problem -> Solution linking).
- **Footer** contains a global navigation matrix for rapid entity discovery by crawlers.

---

## 4. Entity Relationship Map (Example: Razacheena)

- **Subject Entity:** Razacheena (Person)
- **Role:** Local SEO Expert
- **Organization:** Razacheena Local SEO Expert (Agency)
- **Service Categories:** Google Business Profile Optimization, Map Pack Ranking, GMB Recovery.
- **Geographic Nodes:** USA, UK, Canada, Australia, Dubai.
- **Associations:** Koray Tuğberk GÜBÜR (Framework Provider), Google Business Profile (Tool), BERT (Algorithm Logic).

---

## 5. Schema Samples (JSON-LD)

Implemented in `src/components/seo/JsonLd.tsx`:
- **Person Schema:** Defines Razacheena.
- **Organization Schema:** Defines the Agency.
- **LocalBusiness Schema:** Applied to City Pages.
- **FAQ Schema:** Applied to Homepage and Service pages.
- **Service Schema:** Applied to specific service blueprints.

---

## 6. On-Page SEO Checklist (Helpful Content Compliant)

- [ ] **Entity Definition:** Does the first paragraph clearly define what/who the page is about?
- [ ] **BERT Optimization:** Are sentences natural, human-readable, and answering specific questions?
- [ ] **Topical Depth:** Does the page cover 3-5 sub-topics related to the main entity?
- [ ] **Trust Signals:** Are reviews, years of experience, and certifications visible?
- [ ] **Geo-Signals:** Are city names and region context integrated into the content?
- [ ] **Schema Validation:** Is the JSON-LD correctly targeting the specific page entity?
- [ ] **CTA Clarity:** Is the WhatsApp/Contact action frictionless?

---

## 7. Blog Topical Map (Authority Building)

1. **Foundational:** "What is a Semantic Entity in Local SEO?"
2. **Problem/Solution:** "How to Fix Your GMB Suspension in 5 Steps."
3. **Advanced:** "Building a Local Topical Map using Koray's Framework."
4. **Trends:** "The Future of Google Maps Ranking in 2026."
5. **Comparison:** "Organic SEO vs. Map Pack Ranking: Which Does Your Business Need?"
