import Link from "next/link";
import Image from "next/image";
import { getPostsByYear } from "@/lib/posts";
import ScrambleText from "@/components/ScrambleText";

export default function Home() {
  const postsByYear = getPostsByYear();
  const years = Object.keys(postsByYear).sort((a, b) => parseInt(b) - parseInt(a));

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };

  return (
    <div style={{ opacity: 0.75 }}>
      <div className="mb-16">
        <h1 className="font-bold mb-8" style={{ fontSize: '26px', color: '#eee' }}>
          Hey, I&apos;m <ScrambleText from="Max" to="mxcrbn" />
        </h1>
        <p style={{ fontSize: '14px', color: '#ddd', lineHeight: '1.6' }}>
          I&apos;m a YC alum turned VC, focused on commercial open source software, infra and devtools (<Link href="/portfolio" className="underline hover:text-white">portfolio</Link>). I publish some of my thoughts here, mostly about open source & startups.
        </p>
      </div>

      <div className="space-y-16">
        {years.map(year => (
          <div key={year}>
            <h2 className="font-bold mb-8" style={{ fontSize: '22px', color: '#eee' }}>{year}</h2>
            <div className="space-y-6">
              {postsByYear[year].map(post => (
                <Link
                  key={post.slug}
                  href={`/posts/${post.slug}`}
                  className="block group"
                >
                  <div className="flex gap-12 items-center justify-between transition-all duration-200 p-4 rounded-lg group-hover:bg-gray-800/50 max-[920px]:bg-gray-800/50">
                    <div className="flex gap-12 items-baseline max-[920px]:flex-col max-[920px]:gap-2">
                      <time className="font-normal min-w-[80px] max-[920px]:min-w-0" style={{ fontSize: '14px', color: '#aaa' }}>
                        {formatDate(post.date)}
                      </time>
                      <h3 className="font-normal group-hover:text-white" style={{ fontSize: '14px', color: '#ddd' }}>
                        {post.title}
                      </h3>
                    </div>
                    <Image
                      src="/arrow.svg"
                      alt=""
                      width={20}
                      height={20}
                      className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 max-[920px]:hidden"
                    />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-24 mb-8" style={{ fontSize: '14px', color: '#ddd' }}>
        Thanks for visiting!
      </div>
    </div>
  );
}
