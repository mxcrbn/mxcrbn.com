# mxcrbn.com

```bash
$ whoami
Max Corbani - YC alum → VC @ >commit
Focus: Commercial OSS, infra, devtools
```

Personal website. Built in public. Optimized for humans and LLMs.

## Stack

```
Next.js 16 (App Router) + Tailwind
ReactMarkdown + custom syntax
Cloudflare Pages (static export)
DejaVu Sans Mono (because monospace > *)
```

## Quick Start

```bash
npm install
npm run dev    # http://localhost:3000
npm run build  # → /out
```

## Custom Markdown Syntax

```markdown
[image: /path.png | 50%]
[iframe: https://example.com]
[whiteBorder: Your quote here]
[multicolorBorder: Your callout here]
```

Line breaks in border blocks = automatic `<br>` tags.

## Deploy to GitHub Pages

Automatic deployment via GitHub Actions:

1. Push to `main` branch
2. GitHub Actions builds and deploys automatically
3. Enable GitHub Pages in repo settings:
   - Settings → Pages → Source: "GitHub Actions"

Manual deployment:
```bash
npm run build
# Push the /out directory to gh-pages branch
```

## Adding Posts

Create `/posts/your-slug.md`:

```markdown
---
title: "Your Title"
date: "2025-01-15"
---

Your content...
```

Auto-generates:
- Dynamic route at `/posts/your-slug`
- Sitemap entry
- OG image (expects `/public/og-your-slug.png`)
- Structured data (JSON-LD)

## SEO

All the things:
- Dynamic metadata (titles, descriptions, keywords)
- Open Graph + Twitter Cards (1200x627px)
- JSON-LD structured data (Person + BlogPosting)
- Auto-generated sitemap.xml + robots.txt
- LLM crawler support (GPTBot, Claude-Web, anthropic-ai, Google-Extended)

## File Structure

```
app/
  layout.tsx           # SEO metadata
  page.tsx             # Home
  portfolio/           # Portfolio companies
  posts/[slug]/        # Dynamic blog posts
  sitemap.ts           # Auto-generated sitemap
  robots.ts            # Crawler config
components/            # Header, Footer
lib/posts.ts           # Markdown processing
posts/*.md             # Blog content
public/                # Static assets + OG images
```

## License

© 2025 Max Corbani. All rights reserved.

---

Built with [Claude Code](https://claude.com/claude-code)
