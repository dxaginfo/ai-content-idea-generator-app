import React from 'react';

type Idea = {
  id?: string;
  title: string;
  description: string;
  contentType: string;
};

type IdeaCardProps = {
  idea: Idea;
  onSave?: () => void;
  isSaved?: boolean;
};

const IdeaCard: React.FC<IdeaCardProps> = ({ idea, onSave, isSaved = false }) => {
  const contentTypeIcon = {
    blog: '📝',
    video: '🎬',
    social: '📱',
  }[idea.contentType] || '💡';
  
  return (
    <div className="card hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-start">
        <div className="flex items-center gap-2">
          <span className="text-2xl">{contentTypeIcon}</span>
          <h3 className="text-lg font-semibold">{idea.title}</h3>
        </div>
        {onSave && !isSaved && (
          <button 
            onClick={onSave}
            className="text-primary hover:text-primary/80 text-sm font-medium"
          >
            Save Idea
          </button>
        )}
        {isSaved && (
          <span className="text-secondary text-sm font-medium">
            Saved ✓
          </span>
        )}
      </div>
      <p className="mt-2 text-gray-600">{idea.description}</p>
    </div>
  );
};

export default IdeaCard;
