import React from 'react';

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
  const starSmallShadow = React.useMemo(() => generateRandomBoxShadow(700), []);
  const starMediumShadow = React.useMemo(() => generateRandomBoxShadow(200), []);
  const starBigShadow = React.useMemo(() => generateRandomBoxShadow(100), []);

  const dynamicStyle = `
    #stars1,
    #stars1::after {
      box-shadow: ${starSmallShadow};
    }
    #stars2,
    #stars2::after {
      box-shadow: ${starMediumShadow};
    }
    #stars3,
    #stars3::after {
      box-shadow: ${starBigShadow};
    }
  `;

  return (
    <div className="parallax">
      <style>{dynamicStyle}</style>
      <div id="stars1" />
      <div id="stars2" />
      <div id="stars3" />
    </div>
  );
};

export default ParallaxBackground;