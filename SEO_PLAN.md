# Semantic SEO Authority Framework - Local SEO Agency

## 1. Entity Definition & Relationship Map
- **Primary Entity**: Local SEO Dominator (Brand)
- **Service Entities**: 
    - Google Business Profile (GBP) Optimization
    - Local Citations
    - Reputation Management
    - Map Pack Ranking
- **Geographic Entities**:
    - USA (Katy TX, NYC, Dallas, etc.)
    - UK (Manchester, Stockport, London)
    - Canada (Toronto, Vancouver)
    - Australia (Sydney, Melbourne)

## 2. URL Hierarchy (Semantic Folder Structure)
- `/` (Homepage: Brand + Topical Authority Summary)
- `/services/` (Service Pillar Page)
    - `/services/google-business-profile-optimization`
    - `/services/local-citations-building`
    - `/services/reputation-management`
- `/locations/` (Geographic Pillar Page)
    - `/locations/usa/katy-tx`
    - `/locations/uk/manchester`
    - `/locations/uk/stockport`
    - `/locations/australia/sydney`
- `/blog/` (Topical Authority Hub)
    - `/blog/gbp-ranking-factors/` (Cluster)
    - `/blog/local-seo-technical/` (Cluster)

## 3. Topical Map (Hub & Spoke Model)
| Cluster | Pillar Topic | Supporting Subtopics |
|---------|--------------|----------------------|
| GBP | GBP Optimization | NAP Consistency, Photo Optimization, Q&A Strategy |
| Reviews | Reputation Mgmt | Review velocity, Response templates, Negative review handling |
| Tech SEO | Local Technical | Schema markup, Page speed for local, Core Web Vitals |

## 4. Schema Strategy (JSON-LD)
- **Organization**: Brand details, SameAs links.
- **LocalBusiness**: Dynamic per city page.
- **Service**: Specific schemas for GBP, Citations.
- **FAQPage**: For semantic query coverage.

## 6. On-Page SEO Checklist (Semantic Style)
- [ ] **Entity Priority**: Primary entity must be in the first 100 words.
- [ ] **Semantic Salience**: Use secondary related entities to increase topic weight.
- [ ] **Schema Coverage**: Org, LocalBusiness, and FAQ schemas on every city page.
- [ ] **Internal Gravity**: Link to the Service Pillar and 2 City Hubs.
- [ ] **Image Entities**: Descriptive ALT text including Geo-coordinates and City names.
- [ ] **Core Web Vitals**: LCP < 2.5s, CLS < 0.1 (Next.js 15 default).

## 7. Technical SEO System
- **Next.js Metadata API**: Dynamic generation of tags based on [country]/[city].
- **Crawl Efficiency**: Optimized navigation tree in `Navbar`.
- **Content Freshness**: Automated timestamping for Local SEO updates.
- **E-E-A-T Signals**: Author profiles linked to LinkedIn/Twitter entities.
