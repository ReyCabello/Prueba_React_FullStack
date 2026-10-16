export function CardImage({ 
  src, 
  alt = 'Imagen', 
  fallbackSrc = '/assets/placeholder.png', // Imagen por defecto genérica
  className = '', 
  ...props 
}) {
  return (
    <img
      src={src || fallbackSrc}
      alt={alt}
      className={`card-image ${className}`.trim()}
      onError={(e) => {
        if (e.target.src !== fallbackSrc) e.target.src = fallbackSrc;
      }}
      {...props}
    />
  );
}