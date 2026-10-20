import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ContactForm } from '../../../components/organisms/ContactForm';

describe('ContactForm Organism (Karma)', () => {

  it('renderiza los campos y el formulario correctamente', () => {
    render(<ContactForm />);

    // Verifica que el formulario esté en el DOM usando queries flexibles estilo átomos
    const inputs = screen.getAllByRole('textbox');
    expect(inputs.length).toBeGreaterThan(0);
  });

  it('permite modificar el campo de texto', () => {
    render(<ContactForm />);

    const inputNombre = screen.getAllByRole('textbox')[0];
    fireEvent.change(inputNombre, { target: { value: 'Juan Pérez' } });

    expect(inputNombre.value).toBe('Juan Pérez');
  });

  it('ejecuta la alerta al enviar con datos inválidos', () => {
    const alertSpy = spyOn(window, 'alert');
    render(<ContactForm />);

    const inputNombre = screen.getAllByRole('textbox')[0];
    fireEvent.change(inputNombre, { target: { value: 'A' } });

    // Prevenimos la recarga buscando la etiqueta form o enviando desde el input
    const formElement = inputNombre.closest('form');
    if (formElement) {
      fireEvent.submit(formElement);
    }

    expect(alertSpy).toHaveBeenCalled();
  });

});