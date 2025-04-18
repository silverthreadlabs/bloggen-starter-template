import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Sparkles, Code, Shield } from "lucide-react";

export function ProductPosts() {
  const placeholderPosts = [
    {
      slug: "seo-optimization",
      metadata: {
        title: "SEO Optimization",
        summary: "Advanced SEO techniques with pre-built components",
        image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80"
      },
      icon: Sparkles
    },
    {
      slug: "json-ld-schemas",
      metadata: {
        title: "JSON-LD Integration",
        summary: "Automated schema generation for better SEO",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80"
      },
      icon: Code
    },
    {
      slug: "security-features",
      metadata: {
        title: "Security Features",
        summary: "Built-in security best practices for Next.js",
        image: "https://images.unsplash.com/photo-1562813733-b31f71025d54?auto=format&fit=crop&q=80"
      },
      icon: Shield
    }
  ];

  return (
    <div className="h-screen flex flex-col">
      {/* Background Elements */}
      <div className="fixed inset-0 z-[-1]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(17,24,39,0.7),rgba(2,6,23,0.8))]" />
      </div>

      <div className="relative z-10 max-w-[90%] xl:max-w-[1280px] mx-auto flex flex-col flex-1 justify-center py-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="text-blue-500 text-sm font-medium tracking-wider uppercase mb-3 block">
            Features
          </span>
          <h1 className="text-3xl lg:text-5xl font-bold text-white leading-tight mb-4">
            Explore Our
            <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-purple-600 text-transparent bg-clip-text"> Components </span>
          </h1>
          <p className="text-slate-400 text-base">
            Discover our collection of pre-built components
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {placeholderPosts.map((post, index) => (
            <Link 
              key={post.slug}
              href={`/products/${post.slug}`}
              className="block group"
            >
              <div className="h-full p-5 rounded-lg bg-slate-900/50 backdrop-blur-sm border border-slate-800 hover:border-slate-600 transition-all duration-300">
                <div className="flex flex-col h-full">
                  <div className="p-2.5 bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg w-fit group-hover:scale-110 transition-transform duration-300">
                    <post.icon className="w-4 h-4 text-blue-400 group-hover:text-blue-300 transition-colors duration-300" />
                  </div>
                  
                  <div className="mt-4">
                    <h3 className="text-lg font-medium text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                      {post.metadata.title}
                    </h3>
                    <p className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors duration-300">
                      {post.metadata.summary}
                    </p>
                  </div>
                  
                  <div className="mt-auto pt-4 flex items-center gap-2 text-sm text-blue-400 group-hover:text-blue-300 transition-colors">
                    <span className="text-xs font-medium">Learn more</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
