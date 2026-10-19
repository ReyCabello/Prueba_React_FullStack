import { IdentidadTienda } from '../molecules/IdentidadTienda'
import { MenuNavegacion } from '../molecules/MenuNavegacion'
import { IconButton } from '../atoms/IconoButton.jsx'
import { useNavigate } from 'react-router-dom'

export function Header({ isAdmin, onLogout }) {
  const navegar = useNavigate()

  let usuario = null
  try {
    usuario = JSON.parse(sessionStorage.getItem('usuarioActual') || 'null')
  } catch {
    usuario = null
  }

  const estaAutenticado = isAdmin || Boolean(usuario) || localStorage.getItem('is_admin') === 'true'

  const cerrarSesion = (e) => {
    if (e && e.preventDefault) e.preventDefault();
    
    if (onLogout) onLogout();

    localStorage.removeItem('is_admin');
    
    sessionStorage.removeItem('usuarioActual');
    sessionStorage.clear();
    navegar('/login');
  };

  return (
    <header
      className="container-fluid py-3"
      style={{ backgroundColor: '#242424' }}
    >
      <div className="container-fluid">
        <div className="d-flex justify-content-start align-items-center">
          <IdentidadTienda />
        </div>

        <div className="d-flex flex-column flex-md-row justify-content-center align-items-center mt-3">
          <MenuNavegacion estaAutenticado={estaAutenticado} onCerrarSesion={cerrarSesion} />

          <div className="d-flex align-items-center gap-3 mt-3 mt-md-0 ms-md-4">
            <IconButton
              onClick={() => navegar('/carrito')}
              className="text-white fs-4"
              aria-label="Carrito de compras"
              style={{
                backgroundColor: 'transparent',
                border: 'none',
                padding: 0,
              }}
            >
              🛒
            </IconButton>
          </div>
        </div>
      </div>
    </header>
  )
}