import logoMitos from '../../assets/logo-mitos.png'

export function HistoriaMision(){
    return (
        <section className="container py-5">

            <div className="card bg-dark border-warning">
                <div className="card-body p-4">

                    <h2 className="text-warning text-center mb-4">
                        Nuestra Historia y Misión
                    </h2>

                    <div className="row align-items-center">

                        <div className="col-12 col-md-4 text-center mb-3 mb-md-0">
                            <img
                                src={logoMitos}
                                alt="Logo Mitos y Leyendas"
                                className="img-fluid"
                            />

                        </div>

                        <div className="col-12 col-md-8 text-white">
                            <p>
                                El Caldero de la Abundancia es una tienda 
                                dedicada a los fanáticos de Mitos y Leyendas.
                                Nos dedicamos a conseguir cartas únicas, 
                                mazos de estrategia y ediciones coleccionables.
                            </p>

                            <p>
                                Nuestra misión es fomentar el juego limpio,
                                revivir la nostalgia de las mitologías y entregar
                                una experiencia de compra rápida y segura para
                                todos nuestros clientes.
                            </p>

                        </div>

                    </div>
                    
                </div>

            </div>
        </section>
    )
}