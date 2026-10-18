import { IdentidadTienda } from "../molecules/IdentidadTienda";
import { MenuNavegacion } from "../molecules/MenuNavegacion";
import { IconButton} from "../atoms/IconoButton"
import { useNavigate } from 'react-router-dom';


export function Header() {
    const navegar = useNavigate();
    return (
        <header
            className="container-fluid py-3"
            style={{ backgroundColor: '#242424'}}
            >
                <div className="container-fluid">
                    <div className="d-flex justify-content-start align-items-center">
                        <IdentidadTienda />

                    </div>

                    <div className="d-flex flex-column flex-md-row justify-content-center align-items-center mt-3">
                        <MenuNavegacion />

                        <div className="mt-3 mt-md-0 ms-md-4">
                            <IconButton
                                onClick={() => navegar('/carrito')}
                                className="text-white fs-4"
                                aria-label="Carrito de compras"
                                style={{
                                    backgroundColor:'transparent',
                                    border: 'none',
                                    padding: '0'
                                }}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="28"
                                    heigth="28"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    viewBox="0 0 24 24"
                                    aria-hidden="true"
                                >
                                    <circle cx="9" cy="21" r="1" />
                                    <circle cx="20" cy="21" r="1" />
                                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                                </svg>
                            </IconButton>
                        </div>

                    </div>

                </div>
                
            </header>
    )
}
