function Button({texto, onClick, tipo = "button", variante = "primary"}) {
    return (
        <button
            type={tipo}
            className={`btn btn-${variante}`}
            onClick={onClick}
            >
                {texto}
            </button>
    )
}

export default Button