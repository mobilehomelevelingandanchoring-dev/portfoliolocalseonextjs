"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight, Home } from "lucide-react";
import { JsonLd, generateBreadcrumbSchema } from "./seo/JsonLd";

export default function Breadcrumbs() {
    const pathname = usePathname();
    if (pathname === "/") return null;

    const pathSegments = pathname.split("/").filter((segment) => segment !== "");

    const breadcrumbs = pathSegments.map((segment, index) => {
        const path = `/${pathSegments.slice(0, index + 1).join("/")}`;
        const name = segment
            .replace(/-/g, " ")
            .split(" ")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ");

        return { name, item: path };
    });

    const schemaItems = [
        { name: "Home", item: "/" },
        ...breadcrumbs
    ];

    return (
        <>
            <JsonLd data={generateBreadcrumbSchema(schemaItems)} />
            <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 text-sm font-medium text-slate-500">
                <Link href="/" className="hover:text-primary transition-colors flex items-center gap-1">
                    <Home className="w-4 h-4" />
                    <span className="sr-only">Home</span>
                </Link>
                {breadcrumbs.map((crumb, index) => (
                    <div key={crumb.item} className="flex items-center gap-2">
                        <ChevronRight className="w-4 h-4 text-slate-400" />
                        {index === breadcrumbs.length - 1 ? (
                            <span className="text-slate-900 font-bold" aria-current="page">
                                {crumb.name}
                            </span>
                        ) : (
                            <Link href={crumb.item} className="hover:text-primary transition-colors">
                                {crumb.name}
                            </Link>
                        )}
                    </div>
                ))}
            </nav>
        </>
    );
}
