import React from 'react';

const Logo: React.FC = () => {
  return (
    <svg width="40" height="24" viewBox="0 0 40 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M0 12 Q10 4, 20 12 T40 12"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M0 12 Q10 20, 20 12 T40 12"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        opacity="0.5"
      />
    </svg>
  );
};

export default Logo;
