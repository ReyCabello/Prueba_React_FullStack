import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import { InventoryTableRow } from '../../../components/molecules/InventoryTableRow';

describe('InventoryTableRow Molecule (Karma)', () => {
  const itemMock = {
    id: 1,
    name: 'Escila',
    rarity: 'Real',
    price: 50000,
    stock: 5,
    image: 'https://via.placeholder.com/150'
  };

  it('1. renderiza los datos del producto en la fila de la tabla', () => {
    render(
      <table>
        <tbody>
          <InventoryTableRow item={itemMock} />
        </tbody>
      </table>
    );

    const elementosNombre = screen.getAllByText(/escila/i);
    expect(elementosNombre.length).toBeGreaterThan(0);
  });

  it('2. ejecuta la función onEdit al hacer clic en el botón de modificar', () => {
    const onEditSpy = jasmine.createSpy('onEdit');
    
    render(
      <table>
        <tbody>
          <InventoryTableRow item={itemMock} onEdit={onEditSpy} />
        </tbody>
      </table>
    );

    // Búsqueda flexible por texto o rol de botón para evitar fallos de formato
    const btnEditar = screen.getByRole('button', { name: /modificar/i }) || screen.getByText(/modificar/i);
    expect(btnEditar).toBeTruthy();

    act(() => {
      fireEvent.click(btnEditar);
    });

    expect(onEditSpy).toHaveBeenCalled();
  });

  it('3. ejecuta la función onDelete al hacer clic en el botón de eliminar', () => {
    const onDeleteSpy = jasmine.createSpy('onDelete');
    
    render(
      <table>
        <tbody>
          <InventoryTableRow item={itemMock} onDelete={onDeleteSpy} />
        </tbody>
      </table>
    );

    const btnEliminar = screen.getByRole('button', { name: /eliminar/i }) || screen.getByText(/eliminar/i);
    expect(btnEliminar).toBeTruthy();

    act(() => {
      fireEvent.click(btnEliminar);
    });

    expect(onDeleteSpy).toHaveBeenCalled();
  });
});