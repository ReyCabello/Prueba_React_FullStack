
import React from 'react';
import { render, screen } from '@testing-library/react';
import { TextArea } from '../../../components/atoms/TextArea';

describe('Pruebas del componente TextArea', () => {

    it('Debe mostrar correctamente el placeholder', () => {
        render(<TextArea placeholder="Escribe tu comentario" />);

        const textarea = screen.getByPlaceholderText('Escribe tu comentario');

        expect(textarea).toBeTruthy();
    });

    it('Debe utilizar 5 filas por defecto', () => {
        render(<TextArea />);

        const textarea = screen.getByRole('textbox');

        expect(textarea.rows).toBe(5);
    });

    it('Debe ser un campo obligatorio', () => {
        render(<TextArea />);

        const textarea = screen.getByRole('textbox');

        expect(textarea.required).toBe(true);
    });

});
