import { TarjetaNoticia } from '../molecules/TarjetaNoticia'
import trauco from '../../assets/trauco.png'
import estrategia from '../../assets/estrategia.png'

export function ListaNoticias(){
    return (
        <section className='row g-4'>
            <div className='col-12 col-md-6'>
                <TarjetaNoticia
                    imagen={trauco}
                    titulo="Dato curioso #1: El Trauco en Mitos y Leyendas"
                    descripcion="¿Sabías que la carta El Trauco es una de las más emblemáticas de las primeras ediciones? 
                                    Conoce su historia en la mitología chilota y cómo impactó el metajuego"
                    enlace="#"
                />
            </div>

            <div className='col-12 col-md-6'>
                <TarjetaNoticia
                    imagen={estrategia}
                    titulo="¿Vuelve 'Dragón Control al Meta?"
                    descripcion="El útlimo BanList de Octubre está marcado por el regreso de la tercera copia 
                                del Aliado Dragón Lady Calvaur ¿Volverá al metajuego actual de Primer Bloque la estrategia Dragón Control?"
                    enlace="#"
                />
            </div>

        </section>
    )
}