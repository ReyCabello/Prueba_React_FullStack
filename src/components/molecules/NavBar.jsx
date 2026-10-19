import { NavLink } from '../atoms/NavLink.jsx';
import Boton from '../atoms/Button.jsx';

export function Navbar({ links = [], className = '', totalCards = 0, onResetInventory }) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-dark bg-black border-bottom border-warning shadow-lg sticky-top mb-4 px-3 ${className}`.trim()}>
      <div className="container-fluid">
        {/* Logo / Título de la app */}
        <span className="navbar-brand text-warning fw-bold d-flex align-items-center gap-2">
          <span className="fs-4">⚔️</span>
          <span>Mitos y Leyendas TCG</span>
        </span>
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex flex-row gap-3 navbar__list">
          {links.map((link, index) => (
            <li key={index} className="nav-item navbar__item">
              <NavLink href={link.href}>
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="d-flex align-items-center gap-3">
          <span className="badge bg-dark border border-warning text-warning px-3 py-2 fs-6">
            Total Cartas: {totalCards}
          </span>

          <div style={{ width: 'auto' }}>
            <Boton 
              texto="Restablecer Datos" 
              variante="outline-warning" 
              onClick={onResetInventory} 
            />
          </div>
        </div>
      </div>
    </nav>
  );
}