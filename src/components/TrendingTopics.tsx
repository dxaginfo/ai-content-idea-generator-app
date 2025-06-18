"use client";

import { useState, useEffect } from 'react';

type TrendTopic = {
  topic: string;
  volume: number;
};

type TrendingTopicsProps = {
  industry?: string;
};

const TrendingTopics: React.FC<TrendingTopicsProps> = ({ industry = 'technology' }) => {
  const [trends, setTrends] = useState<TrendTopic[]>([]);
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    const fetchTrends = async () => {
      setLoading(true);
      
      try {
        // In a real app, this would call your API
        // For demo purposes, we'll use mock data
        
        // Simulate API call delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Mock trend data
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
        };
        
        const industryKey = industry.toLowerCase();
        const trendData = mockTrends[industryKey as keyof typeof mockTrends] || mockTrends.technology;
        
        setTrends(trendData);
      } catch (error) {
        console.error('Error fetching trends:', error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchTrends();
  }, [industry]);
  
  if (loading) {
    return (
      <div className="card">
        <h3 className="text-xl font-bold mb-4">Trending Topics</h3>
        <div className="animate-pulse space-y-2">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="h-6 bg-gray-200 rounded"></div>
          ))}
        </div>
      </div>
    );
  }
  
  return (
    <div className="card">
      <h3 className="text-xl font-bold mb-4">Trending Topics in {industry}</h3>
      <ul className="space-y-2">
        {trends.map((trend, index) => (
          <li key={index} className="flex justify-between items-center">
            <span>{trend.topic}</span>
            <div className="flex items-center">
              <div className="w-24 bg-gray-200 rounded-full h-2.5 mr-2">
                <div 
                  className="bg-primary h-2.5 rounded-full" 
                  style={{ width: `${trend.volume}%` }}
                ></div>
              </div>
              <span className="text-sm text-gray-500">{trend.volume}%</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TrendingTopics;
