
import React from 'react';
import { render, screen } from '@testing-library/react';
import { Card } from '../../../components/atoms/Card';

describe('Pruebas del componente Card', () => {

    it('Debe mostrar correctamente el contenido de la tarjeta', () => {
        render(<Card>Noticias de Mitos y Leyendas</Card>);

        const card = screen.getByText('Noticias de Mitos y Leyendas');

        expect(card).toBeTruthy();
    });

    it('Debe aplicar la clase CSS card-box', () => {
        render(<Card>Historia</Card>);

        const card = screen.getByText('Historia');

        expect(card.classList.contains('card-box')).toBe(true);
    });

    it('Debe aplicar una clase CSS personalizada', () => {
        render(<Card className="mi-clase">Desarrolladores</Card>);

        const card = screen.getByText('Desarrolladores');

        expect(card.classList.contains('mi-clase')).toBe(true);
    });

});
