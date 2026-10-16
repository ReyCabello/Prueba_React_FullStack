export function TarjetaDesarrollador({ numero, nombre }){
    return (
        <div className="card bg-dark border-warning text-center h-100">
            <div className="card-body">
                <h5 className="text-warning">
                    Desarrollador {numero}
                </h5>
                <p className="text-white">
                    {nombre}
                </p>

                <p className="text-white">
                    Estudiante FullStack II - DuocUC
                </p>
            </div>
        </div>
    )

}