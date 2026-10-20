import { render } from '@testing-library/react';
import { Inventario } from '../../pages/Inventario';

describe('Pruebas unitarias de Inventario', () => {
    it('debe renderizar la página de inventario', () => {
        const { container } = render(<Inventario />);
        expect(container.querySelector('main')).not.toBeNull();
    });

    it('debe mostrar el componente InventoryManager', () => {
        const { container } = render(<Inventario />);
        expect(container.querySelector('main').children.length).toBe(1);
    });

    it('debe aplicar la clase page-container', () => {
        const { container } = render(<Inventario />);
        expect(container.querySelector('main').className).toBe('page-container');
    });

    it('debe renderizar el contenido dentro de main', () => {
        const { container } = render(<Inventario />);
        expect(container.querySelector('main').firstElementChild).not.toBeNull();
    });

    it('debe contener un único elemento main', () => {
        const { container } = render(<Inventario />);
        expect(container.querySelectorAll('main').length).toBe(1);
    });
});
