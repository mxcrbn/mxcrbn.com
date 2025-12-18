# SEO Setup Documentation

This document describes the comprehensive SEO optimization implemented for mxcrbn.com.

## What's Been Implemented

### 1. Meta Tags & Open Graph

All pages now have:
- **Dynamic page titles** that appear in browser tabs and search results
- **Meta descriptions** (155-160 characters) for search snippets
- **Open Graph tags** for rich social media previews (Facebook, LinkedIn, etc.)
- **Twitter Card tags** for optimized Twitter/X sharing
- **Keywords** relevant to each page's content

### 2. Structured Data (JSON-LD)

Schema.org markup has been added to help search engines and LLMs understand your content:

- **Home page**: Person schema with your name, job title, social profiles, and expertise
- **Blog posts**: BlogPosting schema with title, date, author, and content preview

This structured data helps Google show rich snippets and enables better LLM indexing.

### 3. Sitemap & Robots

- **Sitemap.xml**: Auto-generated at `/sitemap.xml` listing all pages and posts
- **Robots.txt**: Configured at `/robots.txt` to allow:
  - Googlebot (Google Search)
  - GPTBot (ChatGPT)
  - Claude-Web (Claude AI)
  - anthropic-ai (Anthropic AI)
  - Google-Extended (Google's AI training)

### 4. Canonical URLs

Each page has a canonical URL to prevent duplicate content issues.

## Open Graph Images

Currently using `/webclip.png` (180x180px) for all pages.

### To Update OG Images:

1. **Create optimized images**:
   - Recommended size: 1200x630px for large previews
   - Format: PNG or JPG
   - Keep file size under 1MB

2. **Add images to /public/**:
   ```
   /public/
   ├── og-home.png        # Home page
   ├── og-portfolio.png   # Portfolio page
   └── og-blog.png        # Default for blog posts
   ```

3. **Update metadata in code**:

   **Home page** (`/app/layout.tsx`):
   ```typescript
   images: [{
     url: '/og-home.png',
     width: 1200,
     height: 630,
     alt: 'Max Corbani',
   }]
   ```

   **Portfolio** (`/app/portfolio/page.tsx`):
   ```typescript
   images: [{
     url: '/og-portfolio.png',
     width: 1200,
     height: 630,
     alt: 'Max Corbani Portfolio',
   }]
   ```

   **Blog posts** (`/app/posts/[slug]/page.tsx`):
   ```typescript
   // For dynamic per-post images:
   images: [{
     url: `/og-posts/${slug}.png`,
     width: 1200,
     height: 630,
     alt: post.title,
   }]

   // Or use a default:
   images: [{
     url: '/og-blog.png',
     width: 1200,
     height: 630,
     alt: post.title,
   }]
   ```

## Google Search Console Setup

After deploying to production:

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Add property for `mxcrbn.com`
3. Verify ownership (DNS or HTML file method)
4. Copy the verification code
5. Update `/app/layout.tsx`:
   ```typescript
   verification: {
     google: 'your-actual-verification-code',
   }
   ```
6. Submit your sitemap: `https://mxcrbn.com/sitemap.xml`

## Testing Your SEO

### Before Deployment:
- Build succeeds: `npm run build`
- Check metadata in browser dev tools

### After Deployment:

1. **Open Graph Testing**:
   - [OpenGraph.xyz](https://www.opengraph.xyz/)
   - [Twitter Card Validator](https://cards-dev.twitter.com/validator)
   - [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)

2. **Rich Results Testing**:
   - [Google Rich Results Test](https://search.google.com/test/rich-results)
   - Paste your URLs to verify structured data

3. **SEO Analysis**:
   - [PageSpeed Insights](https://pagespeed.web.dev/)
   - [Lighthouse](https://developers.google.com/web/tools/lighthouse) (Chrome DevTools)

## LLM Indexing

The site is optimized for AI crawlers:

- **GPTBot**: ChatGPT can now access and reference your content
- **Claude-Web**: Claude can fetch and analyze your pages
- **Google-Extended**: Your content can be used for Google AI training

All AI crawlers are explicitly allowed in `robots.txt` and can access:
- All pages
- All blog posts
- Sitemap for discovery
- Structured data for context

## Monitoring Performance

After Google Search Console is set up, monitor:
- **Impressions**: How often your site appears in search results
- **Clicks**: How many people visit from Google
- **Average position**: Your ranking for keywords
- **Coverage**: Errors or issues with indexing

## Files Modified

- `/app/layout.tsx` - Root metadata, structured data, canonical URL
- `/app/page.tsx` - Home page (already has metadata from layout)
- `/app/portfolio/page.tsx` - Portfolio metadata
- `/app/posts/[slug]/page.tsx` - Dynamic blog post metadata & structured data
- `/app/sitemap.ts` - Auto-generated sitemap
- `/app/robots.ts` - Robots.txt configuration
- `/README.md` - Updated documentation

## Next Steps

1. ✅ Deploy to production
2. ⏳ Set up Google Search Console
3. ⏳ Create and add optimized OG images (1200x630px)
4. ⏳ Submit sitemap to Google
5. ⏳ Test OG previews on social platforms
6. ⏳ Monitor search performance
