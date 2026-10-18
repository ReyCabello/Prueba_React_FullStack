
import { useState, useEffect } from 'react';
import products from '../data/Products';
import { ProductCard } from '../components/molecules/ProductCard';
import { CartSummaryCard } from '../components/molecules/TarjetaResumencarrito';
import './Productos.css';

export function Productos() {
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

  const agregarAlCarrito = (producto) => {
    setCarrito((carritoActual) => {
      const existe = carritoActual.find(
        (item) => item.id === producto.id
      );

      if (existe) {
        return carritoActual.map((item) =>
          item.id === producto.id
            ? { ...item, cantidad: item.cantidad + 1 }
            : item
        );
      }

      return [...carritoActual, { ...producto, cantidad: 1 }];
    });
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
    <main className="productos-page container py-5">
      <h1 className="productos-page__titulo text-center">
        Cartas Mitos y Leyendas
      </h1>

      <CartSummaryCard
        totalItems={totalItems}
        totalPrice={totalPrice}
        className="mb-4"
      />

      <div className="row g-4">
        {products.map((producto) => (
          <div className="col-12 col-sm-6 col-lg-3" key={producto.id}>
            <ProductCard
              image={producto.image}
              name={producto.name}
              description={producto.description}
              price={producto.price}
              onAdd={() => agregarAlCarrito(producto)}
            />
          </div>
        ))}
      </div>
    </main>
  );
}
