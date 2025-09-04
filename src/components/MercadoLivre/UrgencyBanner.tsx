import React, { useState, useEffect } from 'react';
import { CheckCircle } from 'lucide-react';

const UrgencyBanner = () => {
  const [timeLeft, setTimeLeft] = useState({ hours: 3, minutes: 22 });

  useEffect(() => {
    const updateTimer = () => {
      const now = new Date();
      const endOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 0, 0, 0);
      const timeDiff = endOfDay.getTime() - now.getTime();
      
      const hours = Math.floor(timeDiff / (1000 * 60 * 60));
      const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
      
      setTimeLeft({ hours, minutes });
    };

    updateTimer();
    const interval = setInterval(updateTimer, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gradient-to-r from-ml-warning to-ml-danger text-white py-3 px-6 text-center text-sm font-semibold relative overflow-hidden">
      <div 
        className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"
        style={{ left: '-100%' }}
      />
      <div className="flex items-center justify-center gap-2">
        <CheckCircle className="w-4 h-4" />
        <span>ÚLTIMAS {timeLeft.hours}h {timeLeft.minutes}min - Raspadinha com prêmios incríveis!</span>
      </div>
    </div>
  );
};

export default UrgencyBanner;