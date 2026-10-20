import productsIniciales from '../../data/Products'
import { ProductCard } from '../molecules/ProductCard'
import '../../pages/Productos.css'
import { useState, useEffect } from 'react'


export function ProductosDestacados() {

    const [listaProductos, setListaProductos] = useState([])

    useEffect(() => {
        const inventarioGuardado = localStorage.getItem('cartas_inventario')
        if (inventarioGuardado) {
            setListaProductos(JSON.parse(inventarioGuardado))
        } else {
            localStorage.setItem('cartas_inventario', JSON.stringify(productsIniciales))
            setListaProductos(productsIniciales)
        }
    }, [])

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

    if (listaProductos.length === 0) return null

    return (
        <section className="productos-page container py-5">
            <h2 className="text-warning text-center mb-4">
                Productos destacados
            </h2>

            <div className="row g-4">
                {[0, 1, 2].map((index) => {
                    const producto = listaProductos[index]
                    if (!producto) return null

                    return (
                        <div key={producto.id || index} className="col-12 col-md-4">
                            <ProductCard
                                image={producto.image}
                                name={producto.name}
                                description={producto.description}
                                price={producto.price}
                                stock={producto.stock}
                            />
                        </div>
                    )
                })}
            </div>
        </section>
    )
}