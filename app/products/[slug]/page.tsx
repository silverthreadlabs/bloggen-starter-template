import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, ArrowLeft } from 'lucide-react';
import { CustomMDX } from "@/components/mdx";
// import BackgroundGrid from "@/components/layout/BackgroundGrid";
import { formatDate, getProductPosts } from "../utils";
import { createPageMetadata } from "@/lib/seo/metadata/createPageMetadata";
import { defaultMetadata } from "@/lib/seo/metadata/createBaseMetadata";
import { getURL } from "@/lib/utils/helpers";







export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getProductPosts().find((post) => post.slug === slug);
  if (!post) {
    return;
  }

  // Destructure the blog post metadata.
  const {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
  } = post.metadata;
  // Use the blog post slug as the path for the helper (or prepend "blog/" if desired).
  // const title="fu1k";
  const baseMeta = createPageMetadata({
    path: title, // could also be `blog/${slug}` if you want that prefix in the URL
    description,
    baseMetadata: defaultMetadata,
  });
  
  const ogImage = image
  ? image
  : `${getURL()}/og?title=${encodeURIComponent(title)}`;
  
  // console.log("FUCK2: ", slug);
  return {
    ...baseMeta,
    // Override the title with the blog post's title.
    // title,
    openGraph: {
      ...baseMeta.openGraph,
      // title,
      // description,
      type: "article",
      publishedTime,
      url: `${getURL()}/blog/${post.slug}`,
      images: [
        {
          url: ogImage,
          alt: title,
        },
      ],
    },
    twitter: {
      ...baseMeta.twitter,
      
      // title,
      // description,
      images: [
        {
          url: ogImage,
          alt: title,
        },
      ],
    },
  };
}




export async function generateStaticParams() {
  const posts = getProductPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const posts = getProductPosts();
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: post.metadata.title,
    description: post.metadata.summary,
    image: post.metadata.image ? `${getURL()}${post.metadata.image}` : `${getURL()}/og?title=${encodeURIComponent(post.metadata.title)}`,
    url: `${getURL()}/products/${post.slug}`,
    brand: {
      "@type": "Organization",
      name: "Silverthread Labs",
      url: getURL(),
      logo: {
        "@type": "ImageObject",
        url: `${getURL()}/logo.png`
      }
    },
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      price: "0",
      priceCurrency: "USD",
    },
    datePublished: post.metadata.publishedAt,
    dateModified: post.metadata.lastUpdated || post.metadata.publishedAt,
    category: post.metadata.category,
    version: post.metadata.version
  };
  return (
    <section className="relative w-full min-h-screen bg-black">
      {/* <BackgroundGrid /> */}
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd)
        }}
      />
      <div className="max-w-[90%] xl:max-w-[1280px] mx-auto pt-24 px-4 sm:px-6">
        {/* Header Section */}
        <div className="space-y-6 mb-8 sm:mb-12">
          <div className="flex items-center space-x-3">
            <div className="h-px w-12 bg-white/30" />
            <span className="text-white/50 text-sm uppercase tracking-wider">Product Details</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-7xl font-bold text-white leading-[1.1]">
            {post.metadata.title}
          </h1>
          <p className="text-lg sm:text-xl text-white/60 max-w-3xl">
            {post.metadata.summary}
          </p>
        </div>

        {/* Hero Image */}
        {post.metadata.image && (
          <div className="relative w-full aspect-video mb-12 sm:mb-16 rounded-xl overflow-hidden">
            <Image
              src={post.metadata.image}
              alt={post.metadata.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        {/* Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-16 mb-20">
          {/* Main Description */}
          <div className="lg:col-span-2 space-y-8">
            <div className="prose prose-invert max-w-none">
              <CustomMDX source={post.content} />
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6 sm:space-y-8">
              {post.metadata.link && (
                <Link
                  href={post.metadata.link}
                  target="_blank"
                  className="flex items-center justify-center space-x-2 bg-white hover:bg-white/90 text-black px-6 py-4 rounded-lg transition-all duration-300 w-full group"
                >
                  <span className="font-medium">Try {post.metadata.title} Now</span>
                  <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              )}
              
              {/* Additional Info */}
              <div className="bg-white/5 rounded-lg p-6 space-y-4">
                <h3 className="text-lg font-semibold text-white">Product Information</h3>
                <div className="space-y-3">
                  {post.metadata.version && (
                    <div className="flex justify-between text-sm">
                      <span className="text-white/60">Version</span>
                      <span className="text-white">{post.metadata.version}</span>
                    </div>
                  )}
                  {post.metadata.lastUpdated && (
                    <div className="flex justify-between text-sm">
                      <span className="text-white/60">Last Updated</span>
                      <span className="text-white">{post.metadata.lastUpdated}</span>
                    </div>
                  )}
                  {post.metadata.category && (
                    <div className="flex justify-between text-sm">
                      <span className="text-white/60">Category</span>
                      <span className="text-white">{post.metadata.category}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
