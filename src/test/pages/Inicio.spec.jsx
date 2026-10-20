
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Inicio } from '../../pages/Inicio';

describe('Pruebas unitarias de Inicio', () => {
    const renderInicio = () =>
        render(
            <MemoryRouter>
                <Inicio />
            </MemoryRouter>
        );

    it('debe renderizar la página de inicio', () => {
        const { container } = renderInicio();
        expect(container.querySelector('main')).not.toBeNull();
    });

    it('debe mostrar las tres secciones principales', () => {
        const { container } = renderInicio();
        expect(container.querySelector('main').children.length).toBe(3);
    });

    it('debe renderizar la sección de bienvenida', () => {
        const { container } = renderInicio();
        expect(container.querySelector('main').children[0]).not.toBeNull();
    });

    it('debe renderizar los productos destacados', () => {
        const { container } = renderInicio();
        expect(container.querySelector('main').children[1]).not.toBeNull();
    });

    it('debe aplicar las clases principales de la página', () => {
        const { container } = renderInicio();
        const main = container.querySelector('main');
        expect(main.className).toContain('bg-dark');
        expect(main.className).toContain('min-vh-100');
    });
});
