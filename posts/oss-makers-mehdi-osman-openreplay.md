---
title: "OSS Makers #1: Selling to Enterprise"
date: "2023-01-30"
---

[whiteBorder: Welcome to a series of posts delving into the stories and insights of OSS builders. After analysing [the rise of OSS startups in France](https://www.mxcrbn.com/posts/the-rise-of-oss-startups-in-france), I wanted to share some of the good practices developed by makers from the open-source community.

Wanna get involved? I would love to hear your thoughts and learn about any OSS company that excels in a particular area.]

This article is a transcript of my discussion with Mehdi Osman of OpenReplay, about how to sell open-source software to businesses.

Mehdi and I first met in May 2019, just after getting accepted into YC. At that time, he was working on a closed-source session replay tool. Since then, he rebranded and open-sourced the product, changed his go-to-market by narrowing his focus on developers and gained a ton of experience, along the way, in enterprise sales.

## \> OpenReplay in a nutshell
### What is OpenReplay?
It’s an open-source session replay suite for developers. It helps them reproduce and fix issues faster. OpenReplay is also self-hosted, which is a huge benefit in terms of data privacy and security compliance.

The company raised $6m+ from Y Combinator, Runa Capital, Expa, Kima Ventures, and more.

### Why Open Source?
OpenReplay started as a closed-source, SaaS-only product. We tried selling it to big cos following a top-down approach by reaching out to team leads (engineering, product and design). It didn’t work. We made a ton of mistakes, the main one being a lack of focus when it comes to picking the right use-case and user profile. We were preaching the product’s benefits to everyone but ended up selling to no one.

We decided to focus on bug reproduction and frontend developers. In fact, we all were frontend developers at some point in our careers, so the use-case made sense to the entire team. Needless to say it was much simpler to build something we could use ourselves. Fast-forward a couple of years and many iterations later, we came up with a new positioning (self-hosted session replay for frontend developers) and adapted our go-to-market.

From there, it became clear that a bottom-up approach, with developers in mind, would work best for us. Developers want to tinker with your product and build things around it.  So the most natural way to reach this audience was to simply open-source it. Besides, even though our core technology was proprietary and built from the ground up, we are heavy users of many open-source libraries and tools, so it felt fair to contribute back to the OSS community.

### Which license do you use?
Elastic v2, a non-copyleft license, which allows you to do basically anything with our product, except selling a hosted (SaaS) version of it and therefore competing with us.

Licensing is tricky, especially at the beginning of an OSS adventure: do you optimize for growth and therefore pick a permissive license (like Apache 2 or MIT) or do you protect your business at the expense of early adoption? We chose the latter.

A lot of late-stage OSS companies ended up switching licenses at some point. Think Elastic, Sentry, MongoDB and Redis to name a few. Market forces and VC influence will be at play. This is known as “rug-pulling”. We decided to rather do it early even if it may hurt traction.

### How do you make money?
We generate revenues from enterprise licenses. Customers self-host the enterprise edition of OpenReplay, which includes additional features such as:
- Scalability and high-availability ;
- Advanced security ;
- Reporting, roles and user management and audit ;
- Data connectors ;
- Personalized onboarding, upgrades and support.

You can learn more about OpenReplay's enterprise edition by visiting our website.

[multicolorBorder: 💡 There are three main ways to make money from an open-source product:
- Offering a SaaS version like MongoDB ;
- Selling enterprise licenses like OpenReplay ;
- Providing paid support like RedHat.

Paid support became less common among startups, probably because of the challenges in scaling it.]

## \> Selling to Enterprise
The following questions are organized in a way that follows the user’s journey, from discovering the product to becoming a customer.

### How do people hear about OpenReplay?
People discover us through the content we produce. Developers typically find us on Google or through our numerous blog posts.

If you're using a bottom-up approach that relies on content and SEO, it's important to have a clear understanding of:
- The types of content (formats, topics, etc.) that your target audience consumes ;
- The specific pain points that your solution can address directly or indirectly ;
- The specific search terms that prospects are using on Google ;
- The products or alternatives that they are currently considering ;
- The key moments when your audience is most likely to be open to trying your product (e.g. when they're building a new version of their app).

Even though we do it to grow our funnel, it’s fulfilling to know we’re creating quality content and therefore bringing value to all developers whether they’re part of the OpenReplay community or not.

Having said that, this marketing channel remains challenging to scale while keeping the same quality.

[multicolorBorder: 💡 There are several key bottom-up channels for OSS companies, including:
- Creating valuable content and optimizing it for search engines (SEO) ;
- Encouraging community-led growth, often through word-of-mouth recommendations ;
- Building an ecosystem through integration with other services and co-marketing partnerships ;
- Sponsoring other open-source initiatives, events or influencers ;
- Offering free products or features, sometimes completing existing products (also known as "engineering as marketing") ;
- Designing viral loops to increase growth within the teams or organizations of your users ;
- Leveraging social media, personal or company reputation to reach new prospects.]

### What do you do around Content and SEO?
Simply put, we focus on creating quality content for frontend developers to attract them to our blog. From there, they get familiar with our brand and end up one day visiting our Github repository and trying out our product.

We put a lot of effort into tuning up our content engine.

We’re also constantly improving our writing and publishing processes, reviewing topics, optimizing SEO and most importantly building a community of authors.

### How do you identify and qualify prospects?
We qualify prospects by focusing on activation (the "aha moment") and usage. To track this, we use our custom built-in telemetry that measures the number of recordings, users and enabled integrations.

These metrics help us understand how an enterprise prospect is using the product and how it is being adopted within their organization. Currently, we don't have any product-led sales motion in place, but we are working on adding this layer.

[multicolorBorder: 💡 Setting up telemetry and gathering the right data can be challenging for open-source companies, especially when building products deployed on-prem.

The goal is to understand user behavior without gathering too much data. This approach is very different from SaaS products, which often track a wide range of data to gain extensive insights on users.]

### So your prospects reach out to you organically?
Yes indeed.They are typically from engineering and product teams who have been using our community edition for a while and want to learn about the additional features the enterprise edition can bring them, such as scalability, reporting and advanced security.

These leads are warm. They’re already qualified because they have a specific need that aligns with the capabilities of our product. For large prospects, we may conduct a proof-of-concept to demonstrate the value of our product.

A last word about PoCs. We have come a long way to carefully planning, documenting and animating these pilots. Our experience shows that well structured PoCs have substantially increased our product’s perceived value and drove more conversions.

### How did you define the enterprise edition features?
Gated features are one of the most important aspects of open-source monetization.

The challenge is to offer a public version that is generous enough to create lots of value for your community, while also providing gated features to push some of them to upgrade and become customers. We did this by building our paid edition around enterprise-specific needs, such as scalability, single-sign-on, roles and permissions, data export capabilities, and other extra features.

[multicolorBorder: 💡 Including core features in the public version of your open-source software provides value to a larger user base, so you can attract more potential customers.]

### What are your 3 main challenges for the coming months?
First, expand our top-of-funnel by building an ecosystem of integrations. It will increase our reach by adding another acquisition channel.

Second, add a product-led sales motion by proactively targeting highly qualified users.

Third, begin promoting our SaaS offering to SMBs. Until now, we solely focused on the self-hosted version for enterprise accounts.

### Any advice on sales for other OSS founders?
If you’re an early stage founder, work on your positioning and revisit it every now and then. Positioning and focus have been instrumental to our progress.

## \> Conclusion
Mehdi's experience building OpenReplay showcases the power of a structured and iterative approach, combined with great execution and strong resilience.

Here are the key takeaways of our discussion:
1. Positioning: Iterate until finding a clear, detailed pain for a specific persona. It might take time, but you will eventually gain a lot of focus and clarity to develop your product and build your go to market.
2. Go to market: Find the best channel for your product and nail it. Once you are top notch on this, add new ones to expand your top of funnel.
3. Product design: Include core, high value added features in your community edition while gating features that are ideally essential just for your ICP. Invest on telemetry to gather key metrics on product usage without being intrusive.

Thanks for reading,\n
Mehdi & Max