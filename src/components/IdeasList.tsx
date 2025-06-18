import React from 'react';
import IdeaCard from './IdeaCard';

type Idea = {
  id?: string;
  title: string;
  description: string;
  contentType: string;
};

type IdeasListProps = {
  ideas: Idea[];
  onSaveIdea?: (idea: Idea) => void;
  savedIdeas?: Idea[];
  emptyMessage?: string;
};

const IdeasList: React.FC<IdeasListProps> = ({ 
  ideas, 
  onSaveIdea, 
  savedIdeas = [], 
  emptyMessage = 'No ideas available' 
}) => {
  
  if (!ideas.length) {
    return (
      <div className="py-4 text-center">
        <p className="text-gray-500 italic">{emptyMessage}</p>
      </div>
    );
  }
  
  const isIdeaSaved = (idea: Idea) => {
    if (!idea.id) return false;
    return savedIdeas.some(savedIdea => savedIdea.id === idea.id);
  };
  
  return (
    <div className="space-y-4">
      {ideas.map((idea, index) => (
        <IdeaCard 
          key={idea.id || index}
          idea={idea}
          onSave={onSaveIdea ? () => onSaveIdea(idea) : undefined}
          isSaved={isIdeaSaved(idea)}
        />
      ))}
    </div>
  );
};

export default IdeasList;
