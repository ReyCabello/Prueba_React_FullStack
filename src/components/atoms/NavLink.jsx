export function NavLink({ children, as: Tag = 'a', className = '', ...props }) {
  return (
    <Tag className={`nav-link ${className}`.trim()} {...props}>
      {children}
    </Tag>
  );
}