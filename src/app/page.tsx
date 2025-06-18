import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      <div className="z-10 w-full max-w-5xl items-center justify-center font-mono text-sm lg:flex">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-4xl font-bold mb-6">AI Content Idea Generator</h1>
          <p className="text-xl mb-8 max-w-2xl">
            Generate creative and engaging content ideas for your blog posts, videos, and social media with the power of AI.
          </p>
          
          <div className="flex gap-4">
            <Link href="/dashboard">
              <button className="btn-primary">Get Started</button>
            </Link>
            <Link href="/about">
              <button className="btn-secondary">Learn More</button>
            </Link>
          </div>
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card">
              <h2 className="text-xl font-bold mb-4">Blog Post Ideas</h2>
              <p>Discover unique blog post ideas that will engage your audience and improve your SEO ranking.</p>
            </div>
            
            <div className="card">
              <h2 className="text-xl font-bold mb-4">Video Content</h2>
              <p>Generate creative video concepts that will capture attention and drive engagement on YouTube and TikTok.</p>
            </div>
            
            <div className="card">
              <h2 className="text-xl font-bold mb-4">Social Media Posts</h2>
              <p>Create social media content ideas that will increase your followers and boost engagement.</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
