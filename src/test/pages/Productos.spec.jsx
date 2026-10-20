import { render, screen, waitFor } from '@testing-library/react';
import { Productos } from '../../pages/Productos';
import { products } from '../../data/Products';

describe('Pruebas unitarias de Productos', () => {
    beforeEach(() => {
        localStorage.clear();
    });

    it('debe mostrar el título del catálogo', async () => {
        render(<Productos />);

        expect(
            screen.getByRole('heading', { name: 'Catálogo de Cartas' })
        ).toBeTruthy();
    });

    it('debe mostrar el contador de productos del carrito', () => {
        render(<Productos />);

        expect(screen.getByText('Productos: 0')).toBeTruthy();
    });

    it('debe mostrar el total inicial del carrito en cero', () => {
        render(<Productos />);

        expect(screen.getByText(/Total: \$0/)).toBeTruthy();
    });

    it('debe cargar los productos iniciales en el inventario', async () => {
        render(<Productos />);

        await waitFor(() => {
            expect(localStorage.getItem('cartas_inventario')).not.toBeNull();
        });

        const inventario = JSON.parse(
            localStorage.getItem('cartas_inventario')
        );

        expect(inventario).toEqual(products);
    });

    it('debe guardar el carrito en localStorage', async () => {
        render(<Productos />);

        await waitFor(() => {
            expect(localStorage.getItem('carrito')).toBe('[]');
        });
    });
});
