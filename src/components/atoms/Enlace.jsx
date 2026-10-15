export function Enlace ({texto, destino = '#', className = '', ...props}) {
    return (
        <a 
            href= {destino}
            className={className}
            {...props}
            >
                {texto}
            </a>
    )
}