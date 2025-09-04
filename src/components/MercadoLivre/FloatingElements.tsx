import React, { useEffect, useState } from 'react';
import { ShoppingBag, Star, Gift } from 'lucide-react';

const FloatingElements = () => {
  const [sparkles, setSparkles] = useState<Array<{ id: number; left: number; top: number; delay: number }>>([]);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const addSparkle = () => {
      const newSparkle = {
        id: Date.now(),
        left: Math.random() * 100,
        top: Math.random() * 100,
        delay: Math.random() * 2
      };

      setSparkles(prev => [...prev, newSparkle]);

      setTimeout(() => {
        setSparkles(prev => prev.filter(s => s.id !== newSparkle.id));
      }, 2000);
    };

    const sparkleInterval = setInterval(addSparkle, 6000);
    
    return () => clearInterval(sparkleInterval);
  }, []);

  return (
    <>
      {/* Floating background icons */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="floating-icon">
          <ShoppingBag className="w-12 h-12" />
        </div>
        <div className="floating-icon">
          <Star className="w-12 h-12" />
        </div>
        <div className="floating-icon">
          <Gift className="w-12 h-12" />
        </div>
      </div>

      {/* Dynamic sparkles */}
      {sparkles.map(sparkle => (
        <div
          key={sparkle.id}
          className="sparkle fixed pointer-events-none z-10"
          style={{
            left: `${sparkle.left}%`,
            top: `${sparkle.top}%`,
            animationDelay: `${sparkle.delay}s`
          }}
        />
      ))}
    </>
  );
};

export default FloatingElements;