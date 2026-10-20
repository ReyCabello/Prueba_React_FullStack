import React from 'react';
import { render, screen } from '@testing-library/react';
import { TarjetaDesarrollador } from '../../../components/molecules/TarjetaDesarrollador';

describe('Pruebas del componente TarjetaDesarrollador', () => {
  it('1. renderiza el número de desarrollador recibido por props', () => {
    render(<TarjetaDesarrollador numero={1} nombre="Reynaldo Cabello" />);
    
    const textoNumero = screen.getByText(/Desarrollador 1/i);
    expect(textoNumero).toBeTruthy();
  });

  it('2. despliega el nombre del desarrollador correctamente', () => {
    render(<TarjetaDesarrollador numero={1} nombre="Reynaldo Cabello" />);
    
    const textoNombre = screen.getByText('Reynaldo Cabello');
    expect(textoNombre).toBeTruthy();
  });

  it('3. muestra el texto estático del estudiante DuocUC', () => {
    render(<TarjetaDesarrollador numero={2} nombre="Camila Perez" />);
    
    const textoInstitucion = screen.getByText('Estudiante FullStack II - DuocUC');
    expect(textoInstitucion).toBeTruthy();
  });
});