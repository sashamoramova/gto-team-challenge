
import React from 'react';

interface InfiniteMarqueeProps {
  items: string[];
  speed?: number; // скорость в секундах для полного цикла
  className?: string;
}

const InfiniteMarquee: React.FC<InfiniteMarqueeProps> = ({ 
  items, 
  speed = 20,
  className = ""
}) => {
  return (
    <div className={`relative overflow-hidden whitespace-nowrap bg-mir text-white py-2 ${className}`}>
      <div 
        className="inline-flex animate-marquee"
        style={{
          animationDuration: `${speed}s`,
        }}
      >
        {/* Первый набор элементов */}
        {items.map((item, index) => (
          <span 
            key={`first-${index}`} 
            className="mx-8 text-lg font-medium"
          >
            {item}
          </span>
        ))}
        
        {/* Дублированный набор для бесшовного цикла */}
        {items.map((item, index) => (
          <span 
            key={`second-${index}`} 
            className="mx-8 text-lg font-medium"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default InfiniteMarquee;
