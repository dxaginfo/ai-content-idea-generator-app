import { NextRequest, NextResponse } from 'next/server';

// Mock trend data for demonstration purposes
const mockTrends = {
  technology: [
    { topic: 'Artificial Intelligence', volume: 89 },
    { topic: 'Quantum Computing', volume: 72 },
    { topic: 'Cybersecurity', volume: 68 },
    { topic: '5G Technology', volume: 65 },
    { topic: 'Blockchain', volume: 61 }
  ],
  health: [
    { topic: 'Mental Health', volume: 92 },
    { topic: 'Plant-based Diets', volume: 85 },
    { topic: 'Home Fitness', volume: 77 },
    { topic: 'Mindfulness', volume: 73 },
    { topic: 'Sleep Optimization', volume: 68 }
  ],
  business: [
    { topic: 'Remote Work', volume: 94 },
    { topic: 'Digital Transformation', volume: 87 },
    { topic: 'Sustainability', volume: 82 },
    { topic: 'E-commerce', volume: 79 },
    { topic: 'Gig Economy', volume: 71 }
  ],
  entertainment: [
    { topic: 'Streaming Services', volume: 91 },
    { topic: 'Virtual Events', volume: 83 },
    { topic: 'Gaming', volume: 80 },
    { topic: 'Podcasts', volume: 78 },
    { topic: 'Short-form Video', volume: 74 }
  ],
  education: [
    { topic: 'Online Learning', volume: 93 },
    { topic: 'Skill Development', volume: 84 },
    { topic: 'Educational Technology', volume: 76 },
    { topic: 'Lifelong Learning', volume: 72 },
    { topic: 'Alternative Credentials', volume: 67 }
  ]
};

export async function GET(req: NextRequest) {
  try {
    const searchParams = req.nextUrl.searchParams;
    const industry = searchParams.get('industry')?.toLowerCase() || 'technology';
    
    // In a real app, you would call a real API to get trending topics
    // For demo purposes, we're using mock data
    const trends = mockTrends[industry as keyof typeof mockTrends] || mockTrends.technology;
    
    return NextResponse.json({
      trends,
      industry,
      updatedAt: new Date().toISOString()
    });
    
  } catch (error) {
    console.error('Error fetching trends:', error);
    return NextResponse.json(
      { error: 'Failed to fetch trends' },
      { status: 500 }
    );
  }
}
