"use client";

import { useState } from 'react';
import IdeaGenerator from '@/components/IdeaGenerator';
import IdeasList from '@/components/IdeasList';
import TrendingTopics from '@/components/TrendingTopics';

type Idea = {
  id?: string;
  title: string;
  description: string;
  contentType: string;
};

export default function IdeaGeneratorPage() {
  const [generatedIdeas, setGeneratedIdeas] = useState<Idea[]>([]);
  const [savedIdeas, setSavedIdeas] = useState<Idea[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedIndustry, setSelectedIndustry] = useState('technology');
  
  const handleIdeasGenerated = (ideas: Idea[]) => {
    setGeneratedIdeas(ideas);
  };
  
  const handleSaveIdea = (idea: Idea) => {
    // In a real app, this would call your API to save the idea
    const ideaWithId = { ...idea, id: Date.now().toString() };
    setSavedIdeas(prev => [...prev, ideaWithId]);
  };
  
  return (
    <main className="flex min-h-screen flex-col p-8">
      <div className="w-full max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Content Idea Generator</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <div className="card">
              <h2 className="text-xl font-bold mb-4">Generate New Ideas</h2>
              <IdeaGenerator 
                onIdeasGenerated={handleIdeasGenerated}
                setIsLoading={setIsLoading}
              />
            </div>
            
            <div className="mt-6">
              <TrendingTopics industry={selectedIndustry} />
            </div>
          </div>
          
          <div className="lg:col-span-2">
            <div className="card">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">Generated Ideas</h2>
                {isLoading && (
                  <span className="text-sm text-gray-500">Generating ideas...</span>
                )}
              </div>
              
              {isLoading ? (
                <div className="animate-pulse space-y-4">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="border border-gray-200 rounded-lg p-4">
                      <div className="h-5 bg-gray-200 rounded w-3/4 mb-4"></div>
                      <div className="h-4 bg-gray-200 rounded mb-2"></div>
                      <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                    </div>
                  ))}
                </div>
              ) : (
                <IdeasList 
                  ideas={generatedIdeas} 
                  onSaveIdea={handleSaveIdea}
                  savedIdeas={savedIdeas}
                  emptyMessage="No ideas generated yet. Use the form to create your first ideas!"
                />
              )}
            </div>
            
            {savedIdeas.length > 0 && (
              <div className="card mt-6">
                <h2 className="text-xl font-bold mb-4">Saved Ideas</h2>
                <IdeasList 
                  ideas={savedIdeas} 
                  savedIdeas={savedIdeas}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
