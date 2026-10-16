export function TextArea({ id, nombre, placeholder, filas = 5 }) {
    return (
        <textarea
            id={id}
            name={nombre}
            placeholder={placeholder}
            rows={filas}
            className="form-control bg-dark text-white"
            required
        />
    )
}