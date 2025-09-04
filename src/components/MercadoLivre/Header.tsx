import React from 'react';

const Header = () => {
  return (
    <header className="bg-secondary sticky top-0 z-50 shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-center">
          <img 
            src="/images/mercado-livre-logo-1-2.png" 
            alt="Mercado Livre" 
            className="h-10 w-auto"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;