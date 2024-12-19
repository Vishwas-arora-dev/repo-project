import React from 'react';

export function CodeAntLogo({ className = "" }: { className?: string }) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 40 40" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path 
        d="M20 40c11.046 0 20-8.954 20-20S31.046 0 20 0 0 8.954 0 20s8.954 20 20 20z" 
        fill="#000"
      />
      <path 
        d="M28.5 15.5c0 4.5-3.5 8-8.5 8s-8.5-3.5-8.5-8 3.5-8 8.5-8 8.5 3.5 8.5 8z" 
        fill="#FFF"
      />
      <path 
        d="M25 25.5c0 2.5-2 4.5-4.5 4.5s-4.5-2-4.5-4.5 2-4.5 4.5-4.5 4.5 2 4.5 4.5z" 
        fill="#FFF"
      />
    </svg>
  );
}