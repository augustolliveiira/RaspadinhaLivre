import React, { useState } from 'react';

interface ScratchCardProps {
  onClick: () => void;
}

const ScratchCard: React.FC<ScratchCardProps> = ({ onClick }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    
    // Vibration effect if supported
    if (navigator.vibrate) {
      navigator.vibrate(80);
    }

    setTimeout(() => {
      setIsClicked(false);
      onClick();
    }, 150);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleClick();
    }
  };

  return (
    <div className="flex justify-center p-2">
      <div 
        className={`relative w-full max-w-sm aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-primary to-primary/80 border-4 border-secondary shadow-xl transition-all duration-300 cursor-pointer hover:shadow-2xl hover:-translate-y-1 ${
          isClicked ? 'scale-95' : ''
        }`}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        tabIndex={0}
        role="button"
        aria-label="Clique para iniciar a raspadinha"
      >
        {/* Hidden prize content */}
        <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-lg px-4 text-center z-10 text-shadow-lg">
          🎉 Parabéns! Você ganhou FRETE GRÁTIS
        </div>
        
        {/* Scratch foil overlay */}
        <div 
          className="absolute inset-0 z-20 rounded-xl flex items-center justify-center"
          style={{
            background: `
              linear-gradient(120deg, rgba(255,255,255,0) 35%, rgba(255,255,255,0.25) 50%, rgba(255,255,255,0) 65%) 0/300% 100%,
              repeating-linear-gradient(135deg, #e9e9e9 0 10px, #d9d9d9 10px 20px),
              radial-gradient(120% 100% at 50% 0%, rgba(0,0,0,0.08), rgba(0,0,0,0) 50%)
            `,
            backgroundSize: '300% 100%, 20px 20px, 100% 100%',
            animation: 'scratchShimmer 3.5s linear infinite',
            boxShadow: 'inset 0 0 0 1px rgba(0,0,0,0.05), inset 0 -10px 25px rgba(0,0,0,0.08)'
          }}
        >
          <span className="inline-block bg-secondary text-foreground px-5 py-2.5 rounded-full font-bold text-sm uppercase tracking-wider shadow-lg">
            RASPE AQUI
          </span>
        </div>
      </div>
    </div>
  );
};

export default ScratchCard;