import React from 'react';
import { render, screen } from '@testing-library/react';
import { TarjetaNoticia } from '../../../components/molecules/TarjetaNoticia';

describe('Pruebas del componente TarjetaNoticia', () => {
  const noticiaMock = {
    imagen: 'https://via.placeholder.com/150',
    titulo: 'Noticia de Prueba',
    descripcion: 'Descripción detallada de la noticia',
    enlace: 'https://ejemplo.com'
  };

  it('1. muestra correctamente el título y la descripción de la noticia', () => {
    render(<TarjetaNoticia {...noticiaMock} />);
    
    expect(screen.getByText('Noticia de Prueba')).toBeTruthy();
    expect(screen.getByText('Descripción detallada de la noticia')).toBeTruthy();
  });

  it('2. renderiza la imagen con el alt correspondiente al título', () => {
    render(<TarjetaNoticia {...noticiaMock} />);
    
    const imagen = screen.getByAltText('Noticia de Prueba');
    expect(imagen).toBeTruthy();
  });

  it('3. renderiza el enlace "Leer Artículo Completo" con la URL correspondiente', () => {
    render(<TarjetaNoticia {...noticiaMock} />);
    
    // Con /i y tilde opcional para coincidir exactamente con "Leer Artículo Completo"
    const enlace = screen.getByRole('link', { name: /Leer Art[íi]culo Completo/i });
    expect(enlace).toBeTruthy();
    expect(enlace.getAttribute('href')).toBe('https://ejemplo.com');
  });
});