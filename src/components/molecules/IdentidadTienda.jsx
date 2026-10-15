import { Logo } from '../atoms/Logo'
import { Text } from '../atoms/Text'
import logoMitos from '../../assets/logo-mitos.png'

export function IdentidadTienda(){
    return (
        <div className="d-flex flex-column flex-md-row align-items-center w-100">
            <Logo
                src={logoMitos}
                alt="Logo de Mitos y Leyendas"
                style={{ width: '150px', heigth: 'auto'}}
            />

            <div className='flex-grow-1 text-center'>
                <Text
                    texto="El Caldero de la Abundancia"
                    etiqueta='h1'
                    className='m-0 fs-3'
                    style={{
                        color: '#D4AF37',
                        fontSize: '1.8rem',
                        fontWeight: 'bold'
                    }}
                />
            </div>

            <div 
                className='d-none d-md-block'
                style={{ width: '150px'}}>

            </div>

        </div>
    )
}