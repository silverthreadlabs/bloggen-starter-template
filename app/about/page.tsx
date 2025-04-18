import Link from "next/link";
import {
  ArrowUpRight,
  FileJson,
  Search,
  Layout,
  Code
} from "lucide-react";
import { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo/metadata/createPageMetadata";

export const metadata: Metadata = createPageMetadata({
  path: "about",
  description:
    "A comprehensive Next.js SEO starter template created by Bloggen and Silverthread Labs, featuring built-in metadata optimization, JSON-LD schemas, and MDX blog support.",
});

interface Feature {
  icon: React.ReactElement;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: <Search className="w-5 h-5" />,
    title: "SEO Optimized",
    description: "Complete metadata and Open Graph configuration for maximum visibility.",
  },
  {
    icon: <FileJson className="w-5 h-5" />,
    title: "JSON-LD Ready",
    description: "Built-in structured data support for better search engine understanding.",
  },
  {
    icon: <Layout className="w-5 h-5" />,
    title: "Page Templates",
    description: "Pre-built pages with SEO best practices implemented.",
  },
  {
    icon: <Code className="w-5 h-5" />,
    title: "MDX Support",
    description: "Full MDX blog system with automatic SEO optimization.",
  },
];

export default function AboutPage() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Keep your existing schema script */}
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            // Your existing JSON-LD content
          }),
        }}
      />

      <div className="max-w-[90%] xl:max-w-[1280px] mx-auto py-24">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-6">
            <span className="text-slate-400">Created by</span>
            <Link href="https://bloggen.dev" target="_blank" className="text-blue-400 hover:text-blue-300 transition-colors">
              Bloggen
            </Link>
            <span className="text-slate-400">×</span>
            <Link href="https://silverthreadlabs.com" target="_blank" className="text-blue-400 hover:text-blue-300 transition-colors">
              Silverthread Labs
            </Link>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Next.js SEO Template
          </h1>
          <p className="text-lg text-slate-400">
            A comprehensive starter template with everything you need for SEO success. Built with modern best practices and ready for production.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="p-6 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-slate-700 transition-all duration-300 group"
            >
              <div className="flex items-start gap-4">
                <div className="p-2 bg-slate-800 rounded-lg group-hover:text-blue-400 transition-colors duration-300">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-slate-400 group-hover:text-slate-300">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link 
            href="/docs" 
            className="inline-flex items-center justify-center gap-2 rounded-sm border border-slate-700 px-6 py-3 text-sm font-medium text-slate-200 transition-colors hover:border-slate-50 hover:bg-slate-800"
          >
            View Documentation
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
