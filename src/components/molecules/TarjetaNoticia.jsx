export function TarjetaNoticia({imagen, titulo, descripcion, enlace}){
    return (
        <div className="card bg-dark border-warning h-100">
            <img
                src={imagen}
                className="card-img-top"
                alt={titulo}
                style={{
                    height: "290px",
                    objectFit: "cover"
                }}
            />

            <div className="card-body d-flex flex-column">

                <h5 className="card-title text-warning">
                    {titulo}
                </h5>

                <p className="card-text text-white">
                    {descripcion}
                </p>

                <a 
                    href={enlace}
                    className="btn btn-warning mt-auto align-selg-start"
                >
                    Leer Artículo Completo
                </a>
            </div>

        </div>
    )
}