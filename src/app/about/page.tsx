export default function About() {
  return (
    <main className="flex min-h-screen flex-col items-center p-8">
      <div className="w-full max-w-4xl">
        <h1 className="text-3xl font-bold mb-6">About AI Content Idea Generator</h1>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="mb-4">
            The AI Content Idea Generator was created to solve the most common problem content creators face: coming up with fresh, engaging ideas consistently. Our mission is to empower creators with AI-driven tools that spark creativity and streamline their content production process.
          </p>
          <p>
            We believe that by combining human creativity with artificial intelligence, we can help content creators produce more engaging, relevant, and successful content across all digital platforms.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">How It Works</h2>
          <p className="mb-4">
            Our platform leverages advanced natural language processing and machine learning algorithms to generate content ideas tailored to your specific niche, audience, and goals.
          </p>
          <p className="mb-4">
            The system analyzes trending topics, successful content patterns, and user engagement data to suggest ideas that have the highest potential for success. As you use the platform, it learns your preferences and refines its suggestions to better match your unique style and audience needs.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>AI-powered idea generation for blogs, videos, and social media</li>
            <li>Trend analysis to keep your content relevant and timely</li>
            <li>Keyword optimization to improve content discoverability</li>
            <li>Content calendar planning to maintain a consistent schedule</li>
            <li>Performance analytics to track content success</li>
            <li>Personalized recommendations based on your audience and goals</li>
          </ul>
        </section>
      </div>
    </main>
  )
}
