import products from '../../data/Products'
import { ProductCard } from '../molecules/ProductCard'
import '../../pages/Productos.css'

export function ProductosDestacados() {

    const agregarAlCarrito = (producto) => {
        const carritoGuardado = JSON.parse(
            localStorage.getItem('carrito') || '[]'
        )

        const productoExistente = carritoGuardado.find(
            (item) => item.id === producto.id
        )

        if (productoExistente) {
            productoExistente.cantidad += 1
        } else {
            carritoGuardado.push({
                ...producto,
                cantidad: 1
            })
        }

        localStorage.setItem(
            'carrito',
            JSON.stringify(carritoGuardado)
        )
    }
    return (
        <section className="productos-page container py-5">
            <h2 className="text-warning text-center mb-4">
                Productos destacados
            </h2>

            <div className="row g-4">
                <div className="col-12 col-md-4">
                    <ProductCard
                        image={products[0].image}
                        name={products[0].name}
                        description={products[0].description}
                        price={products[0].price}
                        onAdd={() => agregarAlCarrito(products[0])}
                    />
                </div>

                <div className="col-12 col-md-4">
                    <ProductCard
                        image={products[1].image}
                        name={products[1].name}
                        description={products[1].description}
                        price={products[1].price}
                        onAdd={() => agregarAlCarrito(products[1])}
                    />
                </div>

                <div className="col-12 col-md-4">
                    <ProductCard
                        image={products[2].image}
                        name={products[2].name}
                        description={products[2].description}
                        price={products[2].price}
                        onAdd={() => agregarAlCarrito(products[2])}
                    />
                </div>
            </div>
        </section>
    )
}