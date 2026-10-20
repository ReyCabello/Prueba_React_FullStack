import { render, screen } from '@testing-library/react';
import { Noticias } from '../../pages/Noticias';

describe('Pruebas unitarias de Noticias', () => {
    it('debe renderizar la página Noticias', () => {
        const { container } = render(<Noticias />);
        expect(container.querySelector('main')).not.toBeNull();
    });

    it('debe mostrar el título de la página', () => {
        render(<Noticias />);
        expect(
            screen.getByRole('heading', { name: 'Noticias y Datos Curiosos' })
        ).toBeTruthy();
    });

    it('debe renderizar el componente ListaNoticias', () => {
        const { container } = render(<Noticias />);
        expect(container.querySelector('section')).not.toBeNull();
    });

    it('debe contener el título dentro de la sección principal', () => {
        const { container } = render(<Noticias />);
        const section = container.querySelector('section');
        expect(section.querySelector('h1')).not.toBeNull();
    });

    it('debe aplicar las clases principales de la página', () => {
        const { container } = render(<Noticias />);
        const main = container.querySelector('main');
        expect(main.className).toContain('bg-dark');
        expect(main.className).toContain('text-white');
        expect(main.className).toContain('min-vh-100');
    });
});
