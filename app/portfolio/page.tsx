import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio - mxcrbn",
  description: "Amazing open source software companies you should check out: Pandas AI, Twenty, Keep, White Circle, Mastra, Better-Auth, and more.",
  keywords: ["Max Corbani portfolio", "open source investments", "VC portfolio", "Pandas AI", "Twenty", "Keep", "White Circle", "Mastra", "Better-Auth"],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://mxcrbn.com/portfolio',
    siteName: 'Max Corbani',
    title: 'Portfolio - mxcrbn',
    description: 'Amazing open source software companies you should check out: Pandas AI, Twenty, Keep, White Circle, Mastra, Better-Auth, and more.',
    images: [{
      url: '/og-portfolio.png',
      width: 1200,
      height: 627,
      alt: 'Max Corbani Portfolio',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@mxcrbn',
    creator: '@mxcrbn',
    title: 'Portfolio - mxcrbn',
    description: 'Amazing open source software companies you should check out.',
    images: ['/og-portfolio.png'],
  },
};

export default function Portfolio() {
  const companies = [
    {
      name: "Pandas AI",
      category: "Data Analysis",
      url: "https://pandas-ai.com",
      logo: "/logos/pandasai.png",
    },
    {
      name: "Twenty",
      category: "CRM",
      url: "https://twenty.com",
      logo: "/logos/twenty.png",
    },
    {
      name: "Keep (acq. Elastic)",
      category: "AIOps",
      url: "https://keephq.dev",
      logo: "/logos/keep.png",
    },
    {
      name: "White Circle",
      category: "AI Red Teaming",
      url: "https://whitecircle.ai",
      logo: "/logos/whitecircle.png",
    },
    {
      name: "Mastra",
      category: "AI Agents",
      url: "https://mastra.ai",
      logo: "/logos/mastra.png",
    },
    {
      name: "Better-Auth",
      category: "Authentication",
      url: "https://better-auth.com",
      logo: "/logos/betterauth.png",
    },
    {
      name: "Pangolin",
      category: "Reverse Proxy",
      url: "https://pangolin.dev",
      logo: "/logos/pangolin.png",
    },
    {
      name: "Stealth",
      category: "AI Infra",
      url: null,
      logo: "/logos/stealth.png",
    },
    {
      name: "Stealth",
      category: "Infra Ops",
      url: null,
      logo: "/logos/stealth.png",
    },
    {
      name: "Stealth",
      category: "Code Search",
      url: null,
      logo: "/logos/stealth.png",
    },
  ];

  return (
    <div style={{ opacity: 0.75 }}>
      <div className="mb-16">
        <h1 className="font-bold mb-6" style={{ fontSize: '26px', color: '#eee' }}>Portfolio</h1>
        <p style={{ fontSize: '14px', color: '#ddd', lineHeight: '1.6' }}>
          Over the years, I got lucky enough to back talented folks building the amazing companies below.
        </p>
      </div>

      <div className="grid gap-6 mb-16" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(175px, 225px))', justifyContent: 'center' }}>
        {companies.map((company, index) => {
          const content = (
            <div className="group flex flex-col items-center text-center p-8 rounded-lg transition-all hover:bg-gray-800/50">
              <div className="w-20 h-20 mb-4 flex items-center justify-center">
                <Image
                  src={company.logo}
                  alt={company.name}
                  width={80}
                  height={80}
                  className="object-contain"
                />
              </div>
              <h3 className="font-normal mb-1" style={{ fontSize: '14px', color: '#ddd' }}>
                {company.name}
              </h3>
              <p style={{ fontSize: '14px', color: '#aaa' }}>{company.category}</p>
            </div>
          );

          if (company.url) {
            return (
              <a
                key={index}
                href={company.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                {content}
              </a>
            );
          }

          return (
            <div key={index} className="opacity-60">
              {content}
            </div>
          );
        })}
      </div>
    </div>
  );
}
