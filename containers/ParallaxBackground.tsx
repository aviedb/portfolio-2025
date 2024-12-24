import React, { useEffect, useState } from 'react';

const generateRandomBoxShadow = (nStars: number = 700): string =>{
  const maxDistance = 2000;
  const positions: string[] = [];

  for (let i = 0; i < nStars; i++) {
    const x = Math.floor(Math.random() * maxDistance);
    const y = Math.floor(Math.random() * maxDistance);
    positions.push(`${x}px ${y}px`);
  }

  return positions.join(', ');
}

const ParallaxBackground = () => {
  const [shadows, setShadows] = useState({
    small: '',
    medium: '',
    big: ''
  });

  useEffect(() => {
    setShadows({
      small: generateRandomBoxShadow(700),
      medium: generateRandomBoxShadow(200),
      big: generateRandomBoxShadow(100)
    });
  }, []);

  const dynamicStyle = `
    #stars1,
    #stars1::after {
      box-shadow: ${shadows.small};
    }
    #stars2,
    #stars2::after {
      box-shadow: ${shadows.medium};
    }
    #stars3,
    #stars3::after {
      box-shadow: ${shadows.big};
    }
  `;

  return (
    <div className="parallax" suppressHydrationWarning>
      <style>{dynamicStyle}</style>
      <div id="stars1" />
      <div id="stars2" />
      <div id="stars3" />
    </div>
  );
};

export default ParallaxBackground;