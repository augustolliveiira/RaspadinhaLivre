import React from 'react';
import { LucideIcon } from 'lucide-react';

interface BenefitCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
}

const BenefitCard: React.FC<BenefitCardProps> = ({ 
  icon: Icon, 
  title, 
  description, 
  delay = 0 
}) => {
  return (
    <div 
      className="bg-card p-6 rounded-lg text-center shadow-sm transition-all duration-300 border border-border relative overflow-hidden group hover:shadow-md hover:-translate-y-1 hover:border-secondary animate-fadeInUp"
      style={{ animationDelay: `${delay}s` }}
    >
      {/* Top accent line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-secondary transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
      
      <div className="mb-4 flex justify-center text-primary transition-all duration-300 group-hover:text-secondary group-hover:scale-110">
        <Icon className="w-8 h-8" />
      </div>
      
      <h3 className="text-base font-semibold text-foreground mb-2">
        {title}
      </h3>
      
      <p className="text-sm text-muted-foreground leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default BenefitCard;