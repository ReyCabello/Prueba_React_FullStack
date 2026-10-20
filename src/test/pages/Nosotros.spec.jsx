import { render } from '@testing-library/react';
import { Nosotros } from '../../pages/Nosotros';

describe('Pruebas unitarias de Nosotros', () => {
    it('debe renderizar la página Nosotros', () => {
        const { container } = render(<Nosotros />);
        expect(container.querySelector('main')).not.toBeNull();
    });

    it('debe mostrar las dos secciones principales', () => {
        const { container } = render(<Nosotros />);
        expect(container.querySelector('main').children.length).toBe(2);
    });

    it('debe renderizar la sección HistoriaMision', () => {
        const { container } = render(<Nosotros />);
        expect(container.querySelector('main').children[0]).not.toBeNull();
    });

    it('debe renderizar la sección EquipoDesarrollo', () => {
        const { container } = render(<Nosotros />);
        expect(container.querySelector('main').children[1]).not.toBeNull();
    });

    it('debe aplicar las clases principales de la página', () => {
        const { container } = render(<Nosotros />);
        const main = container.querySelector('main');
        expect(main.className).toContain('bg-dark');
        expect(main.className).toContain('text-white');
        expect(main.className).toContain('min-vh-10');
    });
});
