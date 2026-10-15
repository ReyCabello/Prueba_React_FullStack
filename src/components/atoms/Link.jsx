export function Link({ children, as: Tag = 'a', className = '', ...props }) {
  return (
    <Tag className={`custom-link ${className}`.trim()} {...props}>
      {children}
    </Tag>
  );
}

/* átomo específico llamado Link para manejar hipervínculos con estilos interactivos (color dorado, cambio al pasar el mouse */