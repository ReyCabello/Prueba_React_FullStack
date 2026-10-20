import { render, screen, fireEvent } from '@testing-library/react';
import { Carrito } from '../../pages/Carrito';

describe('Pruebas unitarias de Carrito', () => {
    beforeEach(() => {
        localStorage.clear();
    });

    it('debe mostrar el título del carrito', () => {
        render(<Carrito />);
        expect(screen.getByText('Mi carrito de compras')).toBeTruthy();
    });

    it('debe mostrar un mensaje si el carrito está vacío', () => {
        render(<Carrito />);
        expect(screen.getByText('Tu carrito está vacío.')).toBeTruthy();
    });

    it('debe mostrar los productos guardados en el carrito', () => {
        localStorage.setItem('carrito', JSON.stringify([
            { id: 1, name: 'Carta Dragón', price: 1000, cantidad: 2, image: '' }
        ]));

        render(<Carrito />);
        expect(screen.getByText('Carta Dragón')).toBeTruthy();
        expect(screen.getByText('Productos: 2')).toBeTruthy();
    });

    it('debe eliminar un producto del carrito', () => {
        localStorage.setItem('carrito', JSON.stringify([
            { id: 1, name: 'Carta Dragón', price: 1000, cantidad: 1, image: '' }
        ]));

        render(<Carrito />);
        fireEvent.click(screen.getByRole('button', { name: 'Eliminar' }));

        expect(screen.getByText('Tu carrito está vacío.')).toBeTruthy();
    });

    it('debe vaciar el carrito al presionar Vaciar carrito', () => {
        localStorage.setItem('carrito', JSON.stringify([
            { id: 1, name: 'Carta Dragón', price: 1000, cantidad: 1, image: '' }
        ]));

        render(<Carrito />);
        fireEvent.click(screen.getByRole('button', { name: 'Vaciar carrito' }));

        expect(screen.getByText('Tu carrito está vacío.')).toBeTruthy();
    });
});
