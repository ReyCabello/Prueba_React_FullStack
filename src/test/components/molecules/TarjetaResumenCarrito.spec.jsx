import React from 'react';
import { render, screen } from '@testing-library/react';
import { CartSummaryCard } from '../../../components/molecules/CartSummaryCard';

describe('Pruebas del componente CartSummaryCard', () => {
  it('1. renderiza el título "Resumen de compra" y los valores iniciales por defecto', () => {
    render(<CartSummaryCard />);

    const titulo = screen.getByText('Resumen de compra');
    expect(titulo).toBeTruthy();

    const productosTexto = screen.getByText('Productos: 0');
    expect(productosTexto).toBeTruthy();
  });

  it('2. despliega la cantidad exacta de productos recibidos por props', () => {
    render(<CartSummaryCard totalItems={5} totalPrice={15000} />);

    const productosTexto = screen.getByText('Productos: 5');
    expect(productosTexto).toBeTruthy();
  });

  it('3. pasa el precio total al componente PriceTag correctamente', () => {
    const { container } = render(<CartSummaryCard totalItems={2} totalPrice={9990} />);

    // Valida que el contenedor contenga el monto formateado o plano entregado a PriceTag
    expect(container.textContent).toMatch(/9\.?990|9990/);
  });
});