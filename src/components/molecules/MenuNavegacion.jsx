import { Enlace } from '../atoms/Enlace';

export function MenuNavegacion({ estaAutenticado, onCerrarSesion }) {
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
          <Enlace texto="Inventario" destino="/inventario" className="text-white text-decoration-none text-warning fw-bold" />
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
        <div className="mx-3">
          {estaAutenticado ? (
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