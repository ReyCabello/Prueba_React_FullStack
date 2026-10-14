export function Logo({ src, alt = 'El Caldero de la Abundancia', className = '', ...props }) {
  return (
    <img 
      src={src} 
      alt={alt} 
      className={`logo ${className}`.trim()} 
      {...props} 
    />
  );
}