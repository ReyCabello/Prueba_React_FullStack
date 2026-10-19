import { Enlace } from '../atoms/Enlace';

export function MenuNavegacion({ estaAutenticado, onCerrarSesion }) {

  const usuarioSesion = JSON.parse(sessionStorage.getItem('usuarioActual') || '{}');
  const haySesionActiva = Boolean(estaAutenticado || usuarioSesion.correo);

  const esAdmin = usuarioSesion.correo === 'admin@gmail.com';

  return (
    <nav aria-label="Navegación principal">
      <div className="d-flex flex-wrap justify-content-center align-items-center">
        <div className="mx-3">
          <Enlace texto="Inicio" destino="/" className="text-white text-decoration-none" />
        </div>
        <div className="mx-3">
          <Enlace texto="Productos" destino="/productos" className="text-white text-decoration-none" />
        </div>
        <div className="mx-3">
          <Enlace texto="Nosotros" destino="/nosotros" className="text-white text-decoration-none" />
        </div>
        <div className="mx-3">
          <Enlace texto="Noticias" destino="/noticias" className="text-white text-decoration-none" />
        </div>
        <div className="mx-3">
          <Enlace texto="Contacto" destino="/contacto" className="text-white text-decoration-none" />
        </div>
        {esAdmin && (
          <div className="mx-3">
            <Enlace 
              texto="Inventario" 
              destino="/inventario" 
              className="text-warning fw-bold text-decoration-none" 
            />
          </div>
        )}
        <div className="mx-3">
          {estaAutenticado || sessionStorage.getItem('usuarioActual') ? (
            <Enlace 
              texto="Cerrar Sesión" 
              destino="/login" 
              onClick={onCerrarSesion} 
              className="text-danger fw-bold text-decoration-none" 
            />
          ) : (
            <Enlace 
              texto="Iniciar Sesión" 
              destino="/login" 
              className="text-white text-decoration-none" 
            />
          )}
        </div>
      </div>
    </nav>
  );
}