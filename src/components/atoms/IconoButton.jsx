export function IconButton({ children, className = '', ...props }) {
  return (
    <button type="button" className={`icon-btn ${className}`.trim()} {...props}>
      {children}
    </button>
  );
}