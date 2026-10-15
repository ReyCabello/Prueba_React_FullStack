export function Text({texto, etiqueta = 'span', className = '', ...props}) {
    const Etiqueta = etiqueta
    
    return (
        <Etiqueta className={className} {...props}>
            {texto}
        </Etiqueta>
    )
}