
import React from 'react';
import styles from './InfiniteMarquee.module.css';

interface InfiniteMarqueeProps {
  items: (string | React.ReactElement)[];
  speed?: number;
  className?: string;
}

const InfiniteMarquee: React.FC<InfiniteMarqueeProps> = ({ 
  items, 
  speed = 20,
  className = ""
}) => {
  return (
    <div 
      className={`${styles.marqueeContainer} ${className}`}
      style={{
        '--animation-duration': `${speed}s`
      } as React.CSSProperties}
    >
      <div className={styles.marqueeContent}>
        {/* Первый набор элементов */}
        {items.map((item, index) => (
          <span 
            key={`first-${index}`} 
            className={styles.marqueeItem}
          >
            {item}
          </span>
        ))}
        
        {/* Дублированный набор для бесшовного цикла */}
        {items.map((item, index) => (
          <span 
            key={`second-${index}`} 
            className={styles.marqueeItem}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default InfiniteMarquee;
