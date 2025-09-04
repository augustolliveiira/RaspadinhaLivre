import React from 'react';
import { Play } from 'lucide-react';

interface CTAButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

const CTAButton: React.FC<CTAButtonProps> = ({ onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className="bg-primary text-primary-foreground px-12 py-4 rounded-lg text-lg font-semibold cursor-pointer transition-all duration-300 shadow-md relative overflow-hidden mb-10 uppercase tracking-wide inline-flex items-center gap-2 hover:bg-primary/90 hover:-translate-y-1 hover:shadow-lg active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
      aria-label="Participar da raspadinha"
    >
      {/* Shimmer effect */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] hover:translate-x-full transition-transform duration-600" />
      
      <Play className="w-5 h-5" />
      {children}
    </button>
  );
};

export default CTAButton;