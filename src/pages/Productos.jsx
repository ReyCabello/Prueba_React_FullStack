import { useState, useEffect } from 'react';
import { products } from '../data/products';
import { ProductCard } from '../components/molecules/ProductCard';

export function Productos() {
  const [listaProductos, setListaProductos] = useState([]);
  const [carrito, setCarrito] = useState(() => {
    const carritoGuardado = localStorage.getItem('carrito');
    return carritoGuardado ? JSON.parse(carritoGuardado) : [];
  });

  useEffect(() => {
    const cargarProductos = () => {
      const inventarioGuardado = localStorage.getItem('cartas_inventario');
      if (inventarioGuardado) {
        setListaProductos(JSON.parse(inventarioGuardado));
      } else {
        setListaProductos(products);
        localStorage.setItem('cartas_inventario', JSON.stringify(products));
      }
    };

    cargarProductos();
    window.addEventListener('storage', cargarProductos);
    return () => window.removeEventListener('storage', cargarProductos);
  }, []);

  useEffect(() => {
    localStorage.setItem('carrito', JSON.stringify(carrito));
  }, [carrito]);

  const agregarAlCarrito = (producto) => {
    const stockDisponible = Number(producto.stock) || 0;
    if (stockDisponible <= 0) return;

    setCarrito((carritoActual) => {
      const existe = carritoActual.find(
        (item) => String(item.id) === String(producto.id)
      );
      const cantidadEnCarrito = existe ? Number(existe.cantidad) || 0 : 0;

      if (cantidadEnCarrito + 1 > stockDisponible) {
        alert(`No puedes agregar más unidades. El stock máximo disponible es ${stockDisponible}.`);
        return carritoActual;
      }

      if (existe) {
        return carritoActual.map((item) =>
          String(item.id) === String(producto.id)
            ? { ...item, cantidad: (Number(item.cantidad) || 0) + 1 }
            : item
        );
      }

      return [...carritoActual, { ...producto, cantidad: 1 }];
    });
  };

  const obtenerCantidadEnCarrito = (id) => {
    const item = carrito.find((i) => String(i.id) === String(id));
    return item ? Number(item.cantidad) || 0 : 0;
  };


  const totalItems = carrito.reduce((acc, item) => acc + (Number(item.cantidad) || 0), 0);
  const totalPrecio = carrito.reduce((acc, item) => acc + (Number(item.price) * (Number(item.cantidad) || 0)), 0);

  return (
    <div className="container my-4">
      <div className="d-flex justify-content-between align-items-center mb-4 p-3 bg-dark text-white rounded border border-secondary shadow-sm">
        <h2 className="text-warning m-0">Catálogo de Cartas</h2>
        <div className="text-end">
          <span className="badge bg-secondary me-2 fs-6">
            Productos: {totalItems}
          </span>
          <span className="fs-5 fw-bold text-success">
            Total: ${totalPrecio.toLocaleString('es-CL')}
          </span>
        </div>
      </div>
      <div className="row g-4">
        {listaProductos.map((producto) => {
          const stockBase = Number(producto.stock) || 0;
          const enCarrito = obtenerCantidadEnCarrito(producto.id);
          const stockRestante = Math.max(0, stockBase - enCarrito);

          return (
            <div className="col-12 col-sm-6 col-lg-3" key={producto.id}>
              <ProductCard
                image={producto.image}
                name={producto.name}
                description={producto.description}
                price={producto.price}
                stock={stockRestante}
                onAdd={() => agregarAlCarrito(producto)}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Productos;