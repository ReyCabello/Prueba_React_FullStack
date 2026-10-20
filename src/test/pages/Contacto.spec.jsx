import { render, screen } from '@testing-library/react';
import { Contacto } from '../../pages/Contacto';

describe('Pruebas unitarias de Contacto', () => {
    it('debe mostrar el título del formulario', () => {
        render(<Contacto />);
        expect(screen.getByText('Formulario de Contacto')).toBeTruthy();
    });

    it('debe mostrar el texto de ayuda', () => {
        render(<Contacto />);
        expect(screen.getByText(/¿Tienes dudas sobre algún producto/)).toBeTruthy();
    });

    it('debe mostrar la pregunta sobre productos', () => {
        render(<Contacto />);
        expect(screen.getByText(/buscas una carta en específico/)).toBeTruthy();
    });

    it('debe mostrar la indicación para enviar un mensaje', () => {
        render(<Contacto />);
        expect(screen.getByText(/Envíanos un mensaje por interno/)).toBeTruthy();
    });

    it('debe renderizar el formulario de contacto', () => {
        const { container } = render(<Contacto />);
        expect(container.querySelector('form')).not.toBeNull();
    });
});
