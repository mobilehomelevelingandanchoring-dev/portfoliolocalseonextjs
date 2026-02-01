import { generatePageMetadata } from "@/lib/seo";
import BlogPostContent from "@/components/BlogPostContent";
import { BLOG_POSTS } from "@/lib/constants";
import { Metadata } from "next";

interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return BLOG_POSTS.map((post) => ({
        slug: post.slug,
    }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    if (!slug) return {};

    const post = BLOG_POSTS.find(p => p.slug === slug);
    const title = post ? post.title : slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

    return generatePageMetadata({
        title: `${title} | Local SEO Journal`,
        description: post?.excerpt || `Deep dive into ${title} with Razacheena.`,
        path: `/blog/${slug}`,
    });
}

export default async function BlogPostPage({ params }: PageProps) {
    const { slug } = await params;
    if (!slug) return null;

    const postTitle = slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

    return (
        <BlogPostContent slug={slug} postTitle={postTitle} />
    );
}
