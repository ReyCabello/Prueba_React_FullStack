function Boton({ children, texto, onClick, tipo = "button", variante = "primary" }) {
  return (
    <button
      type={tipo}
      className={`btn btn-${variante} w-100 fw-bold`}
      onClick={onClick}
    >
      {children || texto}
    </button>
  );
}

export default Boton;
