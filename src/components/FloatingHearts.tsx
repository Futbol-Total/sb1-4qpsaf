import React, { useEffect, useState } from 'react';

interface Heart {
  id: number;
  left: number;
  size: number;
  rotation: number;
  delay: number;
}

const FloatingHearts: React.FC = () => {
  const [hearts, setHearts] = useState<Heart[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setHearts(current => {
        const newHeart = {
          id: Date.now(),
          left: Math.random() * 100,
          size: Math.random() * (2 - 0.5) + 0.5,
          rotation: Math.random() * 360,
          delay: Math.random() * 2
        };
        return [...current, newHeart].slice(-20);
      });
    }, 800);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {hearts.map(heart => (
        <div
          key={heart.id}
          className="absolute animate-float"
          style={{
            left: `${heart.left}%`,
            transform: `scale(${heart.size}) rotate(${heart.rotation}deg)`,
            animation: `float 5s ease-in forwards ${heart.delay}s`
          }}
        >
          {['❤️', '💕', '💖', '💗', '💘', '💝'][Math.floor(Math.random() * 6)]}
        </div>
      ))}
    </div>
  );
};

export default FloatingHearts;