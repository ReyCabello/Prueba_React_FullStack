import { TarjetaDesarrollador } from "../molecules/TarjetaDesarrollador"

export function EquipoDesarrollo(){
    return (
        <section className="container py-5">
            <h2 className="text-warning text-center mb-4">
                Equipo de Desarrollo
            </h2>

            <div className="row g-3">

                <div className="col-12 col-md-6 col-lg-3">
                    <TarjetaDesarrollador 
                        numero="1" 
                        nombre="Eduardo Barrera"  
                    />
                </div>
                <div className="col-12 col-md-6 col-lg-3">
                    <TarjetaDesarrollador 
                        numero="2" 
                        nombre="Reynaldo Cabello"  
                    />
                </div>
                <div className="col-12 col-md-6 col-lg-3">
                    <TarjetaDesarrollador 
                        numero="3" 
                        nombre="Ángela Robles"  
                    />
                </div>
                <div className="col-12 col-md-6 col-lg-3">
                    <TarjetaDesarrollador 
                        numero="4" 
                        nombre="Francisco Vera"  
                    />
                </div>

            </div>
        </section>
    )
}