export function Card({ children, variant = 'dark', className = '', ...props }) {
  return (
    <div className={`card-box ${className}`.trim()} {...props}>
      {children}
    </div>
  );
}

/*Esta Card la utilizamos para contener la sección de noticias, Nuestra historia y mision y para las tarjetas de Desarrolladores*/