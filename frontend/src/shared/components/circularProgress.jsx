import React from 'react';

const CircularProgressIndicator = ({ progress, radius = 50, stroke = 8 }) => {
  
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (progress / 100) * circumference;
  

  return (
    <svg
      height={radius * 2}
      width={radius * 2}
      className="block mx-auto animate-spin"
      style={{ animation: progress !== undefined ? 'none' : 'spin 1s linear infinite' }}
    >
      <circle
        stroke="gray"
        fill="transparent"
        strokeWidth={stroke}
        r={normalizedRadius}
        cx={radius}
        cy={radius}
      />
      {progress !== undefined ? (
        <circle
          stroke="blue"
          fill="transparent"
          strokeWidth={stroke}
          strokeDasharray={circumference + ' ' + circumference}
          style={{ strokeDashoffset }}
          strokeLinecap="round"
          r={normalizedRadius}
          cx={radius}
          cy={radius}
          className="transition-all duration-300"
        />
      ) : (
        <circle
          stroke="blue"
          fill="transparent"
          strokeWidth={stroke}
          strokeDasharray={circumference + ' ' + circumference}
          strokeLinecap="round"
          r={normalizedRadius}
          cx={radius}
          cy={radius}
          className="opacity-75"
        />
      )}
    </svg>
  );
};

export default CircularProgressIndicator;
