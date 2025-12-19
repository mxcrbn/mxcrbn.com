import { getAllPosts, getPostBySlug } from "@/lib/posts";
import ReactMarkdown from "react-markdown";
import { notFound } from "next/navigation";
import React from "react";
import type { Metadata } from "next";

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: 'Post Not Found - mxcrbn',
    };
  }

  // Custom meta descriptions for each post
  const customDescriptions: Record<string, string> = {
    'about-me': "YC alum building >commit, a fund focused on commercial open source. Former founder of Symolia & Dashblock (YC S19) passionated about open source, infra, devtools and startups.",
    'dashblock': "How lack of focus killed our YC startup. The importance of choosing a specific use case over building a generic tool. Lessons from shutting down Dashblock.",
    'oss-makers-mehdi-osman-openreplay': "Interview with OpenReplay founder on selling open-source software to enterprise. Enterprise sales strategies, licensing, and product-led growth for OSS startups.",
    'ppf': "Project-Product Fit framework for commercial open-source startups. How to monetize your OSS project without alienating your community.",
    'project-to-market': "Visual guide to aligning your open-source project, community, product, and market. The journey from OSS project to commercial success.",
    'systematism-over-personalization': "Why I automate pass emails as a VC. Thoughts on being respectful, efficient, and transparent in the investment process while maintaining systematic communication.",
    'the-rise-of-oss-startups-in-france': "Analysis of French open-source startups from 2015-2023. The rise of COSS companies in France, contextual factors, and cultural influences driving growth."
  };

  const description = customDescriptions[slug] || post.content
    .replace(/\[.*?\]/g, '') // Remove markdown syntax
    .replace(/[#*_]/g, '') // Remove markdown formatting
    .substring(0, 160)
    .trim() + '...';

  // Map slug to OG image
  const ogImage = `/og-${slug}.png`;

  return {
    title: `${post.title} - mxcrbn`,
    description: description,
    keywords: ["Max Corbani", "mxcrbn", post.title, "open source", "startups", "VC"],
    authors: [{ name: "Max Corbani" }],
    openGraph: {
      type: 'article',
      locale: 'en_US',
      url: `https://mxcrbn.com/posts/${slug}`,
      siteName: 'Max Corbani',
      title: post.title,
      description: description,
      publishedTime: post.date,
      authors: ['Max Corbani'],
      images: [{
        url: ogImage,
        width: 1200,
        height: 627,
        alt: post.title,
      }],
    },
    twitter: {
      card: 'summary_large_image',
      site: '@mxcrbn',
      creator: '@mxcrbn',
      title: post.title,
      description: description,
      images: [ogImage],
    },
  };
}

export default async function Post({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "datePublished": post.date,
    "dateModified": post.date,
    "author": {
      "@type": "Person",
      "name": "Max Corbani",
      "url": "https://mxcrbn.com"
    },
    "publisher": {
      "@type": "Person",
      "name": "Max Corbani",
      "url": "https://mxcrbn.com"
    },
    "description": post.content.replace(/\[.*?\]/g, '').replace(/[#*_]/g, '').substring(0, 160).trim(),
    "url": `https://mxcrbn.com/posts/${slug}`,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://mxcrbn.com/posts/${slug}`
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <article style={{ opacity: 0.75 }}>
        <header className="mb-12">
          <h1 className="font-bold mb-4" style={{ fontSize: '26px', color: '#eee' }}>{post.title}</h1>
          <time style={{ fontSize: '14px', color: '#aaa' }}>{formattedDate}</time>
        </header>

      <div className="prose prose-lg max-w-none">
        <ReactMarkdown
          components={{
            h1: ({ children }) => <h1 className="font-bold mt-8 mb-4" style={{ fontSize: '26px', color: '#eee' }}>{children}</h1>,
            h2: ({ children }) => <h2 className="font-bold mt-8 mb-4" style={{ fontSize: '22px', color: '#eee' }}>{children}</h2>,
            h3: ({ children }) => <h3 className="font-bold mt-6 mb-3" style={{ fontSize: '18px', color: '#eee' }}>{children}</h3>,
            p: ({ children }) => {
              // Check if this paragraph contains an iframe marker
              const childText = String(children);
              if (childText.startsWith('[iframe:')) {
                const iframeSrc = childText.match(/\[iframe:\s*([^\]]+)\]/)?.[1];
                if (iframeSrc) {
                  return (
                    <div className="my-8">
                      <iframe
                        src={iframeSrc}
                        frameBorder="0"
                        width="100%"
                        height="533"
                        style={{ background: 'transparent', border: 'none' }}
                      />
                    </div>
                  );
                }
              }
              // Check if this paragraph contains an image marker
              if (childText.startsWith('[image:')) {
                // Match pattern: [image: /path/to/image.png | 50%] or [image: /path/to/image.png]
                const imageMatch = childText.match(/\[image:\s*([^\|\]]+)(?:\s*\|\s*([^\]]+))?\]/);
                if (imageMatch) {
                  const imageSrc = imageMatch[1].trim();
                  const width = imageMatch[2]?.trim() || '100%';
                  return (
                    <div className="my-8 flex justify-center">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={imageSrc}
                        alt=""
                        style={{ width: width, height: 'auto' }}
                      />
                    </div>
                  );
                }
              }
              // Check if this paragraph contains a whiteBorder marker
              if (childText.includes('[whiteBorder:')) {
                // Recursively process all children to handle mixed content (text, links, etc.)
                const processContent = (items: React.ReactNode): React.ReactNode => {
                  return React.Children.map(items, (child) => {
                    if (typeof child === 'string') {
                      // Remove markers and split by linebreak
                      const text = child.replace(/^\[whiteBorder:\s*/, '').replace(/\]$/, '');
                      const lines = text.split('|||LINEBREAK|||');
                      return lines.map((line, i) => (
                        <React.Fragment key={i}>
                          {line}
                          {i < lines.length - 1 && <br />}
                        </React.Fragment>
                      ));
                    }
                    return child;
                  });
                };

                return (
                  <div className="mb-6" style={{
                    background: '#ddd',
                    padding: '1px',
                    borderRadius: '6px'
                  }}>
                    <p className="text-justify" style={{
                      fontSize: '14px',
                      color: '#ddd',
                      background: '#0a0a14',
                      padding: '12px',
                      borderRadius: '6px',
                      lineHeight: '1.6',
                      margin: 0
                    }}>{processContent(children)}</p>
                  </div>
                );
              }
              // Check if this paragraph contains a multicolorBorder marker
              if (childText.includes('[multicolorBorder:')) {
                // Recursively process all children to handle mixed content (text, links, etc.)
                const processContent = (items: React.ReactNode): React.ReactNode => {
                  return React.Children.map(items, (child) => {
                    if (typeof child === 'string') {
                      // Remove markers and split by linebreak
                      const text = child.replace(/^\[multicolorBorder:\s*/, '').replace(/\]$/, '');
                      const lines = text.split('|||LINEBREAK|||');
                      return lines.map((line, i) => (
                        <React.Fragment key={i}>
                          {line}
                          {i < lines.length - 1 && <br />}
                        </React.Fragment>
                      ));
                    }
                    return child;
                  });
                };

                return (
                  <div className="mb-6" style={{
                    background: 'linear-gradient(315deg, rgba(131, 58, 180, 0.35), rgba(253, 29, 29, 0.35), rgba(252, 176, 69, 0.35))',
                    padding: '1px',
                    borderRadius: '6px'
                  }}>
                    <p style={{
                      fontSize: '14px',
                      color: '#ddd',
                      background: '#0a0a14',
                      padding: '12px',
                      borderRadius: '6px',
                      lineHeight: '1.6',
                      margin: 0
                    }}>{processContent(children)}</p>
                  </div>
                );
              }
              // Handle line breaks in regular paragraphs
              const processedChildren = React.Children.map(children, (child) => {
                if (typeof child === 'string') {
                  // Split by \n and create React elements with <br /> tags
                  return child.split('\\n').map((line, i, arr) => (
                    <React.Fragment key={i}>
                      {line}
                      {i < arr.length - 1 && <br />}
                    </React.Fragment>
                  ));
                }
                return child;
              });
              return <p className="mb-6" style={{ fontSize: '14px', color: '#ddd', lineHeight: '1.6' }}>{processedChildren}</p>;
            },
            ul: ({ children }) => <ul className="list-disc list-inside mb-6 space-y-2" style={{ fontSize: '14px', color: '#ddd' }}>{children}</ul>,
            ol: ({ children }) => <ol className="list-decimal list-inside mb-6 space-y-2" style={{ fontSize: '14px', color: '#ddd' }}>{children}</ol>,
            li: ({ children }) => <li style={{ fontSize: '14px', color: '#ddd' }}>{children}</li>,
            a: ({ href, children }) => (
              <a href={href} className="underline hover:text-white transition-colors text-[#ddd]" target="_blank" rel="noopener noreferrer">
                {children}
              </a>
            ),
            code: ({ children }) => (
              <code className="bg-gray-800 px-2 py-1 rounded font-mono" style={{ fontSize: '14px', color: '#ddd' }}>{children}</code>
            ),
            pre: ({ children }) => (
              <pre className="bg-gray-800 p-4 rounded overflow-x-auto mb-6" style={{ fontSize: '14px', color: '#ddd' }}>{children}</pre>
            ),
            blockquote: ({ children }) => (
              <blockquote className="border-l-4 border-gray-600 pl-4 italic my-6" style={{ fontSize: '14px', color: '#aaa' }}>{children}</blockquote>
            ),
            strong: ({ children }) => <strong className="font-semibold" style={{ color: '#eee' }}>{children}</strong>,
          }}
        >
          {post.content}
        </ReactMarkdown>
      </div>
    </article>
    </>
  );
}
