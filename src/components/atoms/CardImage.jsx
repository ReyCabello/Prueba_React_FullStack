// src/components/atoms/CardImage.jsx
export function CardImage({ src, alt, className = '', onClick }) {
  return (
    <img 
      src={src} 
      alt={alt} 
      className={`rounded border border-secondary ${className}`} 
      onClick={onClick}
      style={{ width: '120px', height: '170px', objectFit: 'contain', cursor: 'pointer' }} 
    />
  );
}