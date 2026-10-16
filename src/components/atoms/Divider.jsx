export function Divider({ className = '', ...props }) {
  return <hr className={`divider ${className}`.trim()} {...props} />;
}

/* renderizar una línea horizontal para separar secciones. */