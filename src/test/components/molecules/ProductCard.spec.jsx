import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ProductCard } from '../../../components/molecules/ProductCard';

describe('Pruebas del componente ProductCard', () => {
  const mockProps = {
    name: 'Mago Oscuro',
    price: 15000,
    stock: 5,
    image: 'https://via.placeholder.com/150',
    description: 'Carta poderosa'
  };

  it('1. renderiza la tarjeta con la información del producto', () => {
    render(<ProductCard {...mockProps} />);
    
    // Verifica que el nombre del producto se muestre en pantalla
    const titulo = screen.getByText('Mago Oscuro');
    expect(titulo).toBeTruthy();
  });

  it('2. aplica el evento onAdd al presionar el botón de agregar', () => {
    const handleAdd = jasmine.createSpy('handleAdd');
    render(<ProductCard {...mockProps} onAdd={handleAdd} />);

    // Busca el botón "Agregar" que se habilita cuando hay onAdd y stock > 0
    const botonAgregar = screen.getByRole('button', { name: /agregar/i });
    fireEvent.click(botonAgregar);
    
    expect(handleAdd).toHaveBeenCalled();
  });

  it('3. renderiza la imagen de la tarjeta del producto', () => {
    render(<ProductCard {...mockProps} />);
    
    // Busca la imagen por su rol o su alt text
    const imagen = screen.getByAltText('Mago Oscuro');
    expect(imagen).toBeTruthy();
  });
});