"use client";

import { useState, FormEvent } from 'react';
import { toast } from 'react-hot-toast';

type Idea = {
  id?: string;
  title: string;
  description: string;
  contentType: string;
};

type GeneratorProps = {
  onIdeasGenerated: (ideas: Idea[]) => void;
  setIsLoading: (loading: boolean) => void;
};

const IdeaGenerator: React.FC<GeneratorProps> = ({ onIdeasGenerated, setIsLoading }) => {
  const [formData, setFormData] = useState({
    contentType: 'blog',
    industry: '',
    audience: '',
    keywords: '',
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.industry.trim() || !formData.audience.trim()) {
      toast.error('Please fill in all required fields');
      return;
    }
    
    try {
      setIsLoading(true);
      
      // In a real app, this would call your API
      // For demo purposes, we'll simulate a response with mock data
      
      // Simulating API call delay
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Mock response data
      const mockIdeas = [
        {
          title: `Top 10 ${formData.industry} Trends for ${new Date().getFullYear()}`,
          description: `A comprehensive guide to the latest trends in ${formData.industry} tailored for ${formData.audience}.`,
          contentType: formData.contentType,
        },
        {
          title: `How ${formData.audience} Can Benefit from New ${formData.industry} Solutions`,
          description: `Explore innovative ways ${formData.audience} can leverage emerging technologies in ${formData.industry}.`,
          contentType: formData.contentType,
        },
        {
          title: `The Ultimate ${formData.industry} Guide for ${formData.audience}`,
          description: `Everything ${formData.audience} needs to know about navigating the ${formData.industry} landscape successfully.`,
          contentType: formData.contentType,
        },
        {
          title: `${formData.industry} Mistakes That ${formData.audience} Should Avoid`,
          description: `Learn from common pitfalls and errors that ${formData.audience} often encounter in ${formData.industry}.`,
          contentType: formData.contentType,
        },
        {
          title: `${formData.industry} Success Stories: Inspiration for ${formData.audience}`,
          description: `Case studies and examples of successful ${formData.industry} strategies that ${formData.audience} can learn from.`,
          contentType: formData.contentType,
        },
      ];
      
      onIdeasGenerated(mockIdeas);
      toast.success('Ideas generated successfully!');
      
    } catch (error) {
      console.error('Error generating ideas:', error);
      toast.error('Failed to generate ideas. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block mb-2 font-medium">Content Type <span className="text-red-500">*</span></label>
        <select 
          name="contentType" 
          value={formData.contentType} 
          onChange={handleChange}
          className="input-field w-full"
        >
          <option value="blog">Blog Post</option>
          <option value="video">Video</option>
          <option value="social">Social Media</option>
        </select>
      </div>
      
      <div>
        <label className="block mb-2 font-medium">Industry/Niche <span className="text-red-500">*</span></label>
        <input 
          type="text" 
          name="industry" 
          value={formData.industry} 
          onChange={handleChange}
          className="input-field w-full" 
          placeholder="e.g., Technology, Fitness, Finance" 
        />
      </div>
      
      <div>
        <label className="block mb-2 font-medium">Target Audience <span className="text-red-500">*</span></label>
        <input 
          type="text" 
          name="audience" 
          value={formData.audience} 
          onChange={handleChange}
          className="input-field w-full" 
          placeholder="e.g., Beginners, Professionals, Parents" 
        />
      </div>
      
      <div>
        <label className="block mb-2 font-medium">Keywords (optional)</label>
        <input 
          type="text" 
          name="keywords" 
          value={formData.keywords} 
          onChange={handleChange}
          className="input-field w-full" 
          placeholder="Separate keywords with commas" 
        />
      </div>
      
      <button type="submit" className="btn-primary w-full">
        Generate Ideas
      </button>
    </form>
  );
};

export default IdeaGenerator;
