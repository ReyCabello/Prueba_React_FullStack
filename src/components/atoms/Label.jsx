export function Label({ children, className = '', ...props }) {
  return (
    <label className={`form-label ${className}`.trim()} {...props}>
      {children}
    </label>
  );
}