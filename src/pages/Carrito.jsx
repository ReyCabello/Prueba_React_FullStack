
import { useState, useEffect } from 'react';
import { PriceTag } from '../components/atoms/PriceTag';

export function Carrito() {
  const [carrito, setCarrito] = useState(() => {
    try {
      const carritoGuardado = localStorage.getItem('carrito');
      return carritoGuardado ? JSON.parse(carritoGuardado) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem('carrito', JSON.stringify(carrito));
  }, [carrito]);

  
const cambiarCantidad = (id, cambio) => {
  if (cambio > 0) {
    const inventarioGuardado = localStorage.getItem('cartas_inventario');
    const inventario = inventarioGuardado
      ? JSON.parse(inventarioGuardado)
      : [];

    const producto = inventario.find(
      (item) => String(item.id) === String(id)
    );

    const productoCarrito = carrito.find(
      (item) => String(item.id) === String(id)
    );

    const stockDisponible = producto ? Number(producto.stock) || 0 : 0;
    const cantidadActual = productoCarrito
      ? Number(productoCarrito.cantidad) || 0
      : 0;

    if (cantidadActual + cambio > stockDisponible) {
      alert(`No puedes agregar más unidades. Stock disponible: ${stockDisponible}.`);
      return;
    }
  }

  setCarrito((carritoActual) =>
    carritoActual
      .map((item) =>
        String(item.id) === String(id)
          ? { ...item, cantidad: Number(item.cantidad) + cambio }
          : item
      )
      .filter((item) => item.cantidad > 0)
  );
};


  const eliminarProducto = (id) => {
    setCarrito((carritoActual) =>
      carritoActual.filter((item) => item.id !== id)
    );
  };

  const vaciarCarrito = () => {
    setCarrito([]);
  };



  
  const irAPagar = () => {
    const inventarioGuardado = localStorage.getItem('cartas_inventario');

    if (!inventarioGuardado) {
      alert('No se pudo verificar el inventario.');
      return;
    }

    let inventario;

    try {
      inventario = JSON.parse(inventarioGuardado);
    } catch {
      alert('Error al consultar el inventario.');
      return;
    }

    for (const item of carrito) {
      const producto = inventario.find(
        (p) => String(p.id) === String(item.id)
      );

      const stockDisponible = producto ? Number(producto.stock) || 0 : 0;

      if (!producto || Number(item.cantidad) > stockDisponible) {
        alert(`No hay existencias suficientes de ${item.name}. Stock disponible: ${stockDisponible}.`);
        return;
      }
    }

    alert('¡Stock verificado! Tu pedido puede continuar al pago.');
  };


  const totalItems = carrito.reduce(
    (total, item) => total + item.cantidad,
    0
  );

  const totalPrice = carrito.reduce(
    (total, item) => total + item.price * item.cantidad,
    0
  );

  return (
    <main className="container py-5">
      <h1 className="text-center mb-4">
        Mi carrito de compras
      </h1>

      {carrito.length === 0 ? (
        <p className="text-center fs-5">
          Tu carrito está vacío.
        </p>
      ) : (
        <>
          <div className="d-flex justify-content-between align-items-center mb-4">
            <p className="mb-0">
              Productos: {totalItems}
            </p>

            <button
              type="button"
              className="btn btn-outline-danger"
              onClick={vaciarCarrito}
            >
              Vaciar carrito
            </button>
          </div>

          <div className="row g-3">
            {carrito.map((item) => (
              <div className="col-12" key={item.id}>
                <div className="card bg-dark text-light border-warning">
                  <div className="card-body">
                    <div className="row align-items-center g-3">
                      <div className="col-4 col-md-2 text-center">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="img-fluid rounded"
                          style={{
                            maxHeight: '150px',
                            objectFit: 'contain'
                          }}
                        />
                      </div>

                      <div className="col-8 col-md-4">
                        <h2 className="h5">{item.name}</h2>

                        <p className="mb-1">
                          Precio por unidad:
                        </p>
                        <PriceTag amount={item.price} />
                      </div>

                      <div className="col-6 col-md-3">
                        <p className="mb-2">Cantidad</p>

                        <div className="d-flex align-items-center gap-2">
                          <button
                            type="button"
                            className="btn btn-outline-light btn-sm"
                            onClick={() =>
                              cambiarCantidad(item.id, -1)
                            }
                            aria-label={`Disminuir cantidad de ${item.name}`}
                          >
                            −
                          </button>

                          <span>{item.cantidad}</span>

                          <button
                            type="button"
                            className="btn btn-warning btn-sm"
                            onClick={() =>
                              cambiarCantidad(item.id, 1)
                            }
                            aria-label={`Aumentar cantidad de ${item.name}`}
                          >
                            +
                          </button>
                        </div>
                      </div>

                      <div className="col-6 col-md-3">
                        <p className="mb-1">Subtotal</p>

                        <PriceTag
                          amount={item.price * item.cantidad}
                        />

                        <button
                          type="button"
                          className="btn btn-outline-danger btn-sm mt-2"
                          onClick={() =>
                            eliminarProducto(item.id)
                          }
                        >
                          Eliminar
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="card bg-dark text-light border-warning mt-4">
            <div className="card-body d-flex justify-content-between align-items-center flex-wrap gap-3">
              <h2 className="h5 mb-0">Total de la compra</h2>
              <PriceTag amount={totalPrice} />
            </div>
          </div>
          <div className="d-flex justify-content-end mt-3">
            <button
              type="button"
              className="btn btn-success btn-lg"
              onClick={irAPagar}
            >
              Ir a pagar
            </button>
          </div>
        </>
      )}
    </main>
  );
}
