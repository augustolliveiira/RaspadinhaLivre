import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-ml-gray-100 text-ml-gray-600 py-8 px-6 text-center">
      <div className="max-w-4xl mx-auto">
        <img 
          src="/images/mercado-livre-logo-1-2.png" 
          alt="Mercado Livre" 
          className="h-10 mx-auto mb-4 w-auto"
        />
        <p className="text-sm opacity-90 leading-relaxed">
          © 2025 Mercado Livre - Todos os direitos reservados<br />
          Líder em e-commerce na América Latina há mais de 20 anos
        </p>
      </div>
    </footer>
  );
};

export default Footer;