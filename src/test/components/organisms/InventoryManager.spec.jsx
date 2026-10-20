import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { InventoryManager } from '../../../components/organisms/InventoryManager';

describe('Pruebas del componente InventoryManager', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('1. renderiza el título del formulario y el recuento inicial de inventario', () => {
    render(<InventoryManager />);

    const tituloForm = screen.getByText(/Agregar Nueva Carta/i);
    expect(tituloForm).toBeTruthy();

    const recuentoInventario = screen.getByText(/Inventario Actual \(2\)/i);
    expect(recuentoInventario).toBeTruthy();
  });

  it('2. agrega una nueva carta al enviar el formulario con datos válidos', () => {
    render(<InventoryManager />);

    // Se utiliza expresión regular flexibilizada para coincidir con o sin tilde ("límite" / "limite")
    const inputNombre = screen.getByPlaceholderText(/Ej: Fe sin l[íi]mite/i);
    const inputPrecio = screen.getByPlaceholderText(/Ej: 15000/i);
    const botonGuardar = screen.getByRole('button', { name: /Guardar en Inventario/i });

    fireEvent.change(inputNombre, { target: { name: 'name', value: 'Dragón Blanco' } });
    fireEvent.change(inputPrecio, { target: { name: 'price', value: '25000' } });

    fireEvent.click(botonGuardar);

    const contadorActualizado = screen.getByText(/Inventario Actual \(3\)/i);
    expect(contadorActualizado).toBeTruthy();
  });

  it('3. renderiza los encabezados de la tabla de inventario correctamente', () => {
    render(<InventoryManager />);

    expect(screen.getByRole('columnheader', { name: /Carta/i })).toBeTruthy();
    expect(screen.getByRole('columnheader', { name: /Raridad/i })).toBeTruthy();
    expect(screen.getByRole('columnheader', { name: /Precio/i })).toBeTruthy();
    expect(screen.getByRole('columnheader', { name: /Stock/i })).toBeTruthy();
    expect(screen.getByRole('columnheader', { name: /Acciones/i })).toBeTruthy();
  });
});