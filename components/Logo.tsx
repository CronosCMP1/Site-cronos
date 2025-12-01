import React, { useState } from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "w-24" }) => {
  const [hasError, setHasError] = useState(false);
  
  // SUBSTITUA ESTA URL PELO LINK DIRETO DA SUA IMAGEM
  // Exemplo de link direto: https://i.ibb.co/9mdgmkcB/sua-imagem.png
  // O link atual provavelmente quebrará pois é uma página web.
  const imageUrl = "https://ibb.co/9mdgmkcB"; 

  if (hasError) {
    return (
      <svg 
        viewBox="0 0 100 70" 
        className={className} 
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Cronos Logo"
        fill="currentColor"
      >
        <text x="50" y="32" fontSize="38" fontFamily="Oswald, sans-serif" fontWeight="bold" textAnchor="middle" letterSpacing="-2">CRO</text>
        <text x="50" y="62" fontSize="38" fontFamily="Oswald, sans-serif" fontWeight="bold" textAnchor="middle" letterSpacing="-2">NOS</text>
      </svg>
    );
  }

  return (
    <img 
      src={imageUrl} 
      alt="Cronos Logo" 
      className={`object-contain ${className}`}
      onError={() => setHasError(true)}
    />
  );
};

export default Logo;