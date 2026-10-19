import { useState } from 'react';
import { Card } from '../atoms/Card';
import { CardImage } from '../atoms/CardImage';
import { Text } from '../atoms/Text';
import { PriceTag } from '../atoms/PriceTag';
import Button from '../atoms/Button';

export function ProductCard({
  image,
  name,
  description,
  price,
  stock,
  onAdd,
  className = ''
}) {
  const [mostrarDetalle, setMostrarDetalle] = useState(false);
  const stockNum = Number(stock) || 0;

  return (
    <>
      <Card
        variant="dark"
        className={`product-card ${className}`.trim()}
      >
        <CardImage
          src={image}
          alt={name}
          role="button"
          tabIndex={0}
          aria-label={`Ver detalles de ${name}`}
          style={{ cursor: 'pointer' }}
          onClick={() => setMostrarDetalle(true)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              setMostrarDetalle(true);
            }
          }}
        />

        <Text
          texto={name}
          etiqueta="h3"
          className="product-card__title"
        />

        <PriceTag
          amount={price}
          className="product-card__price"
        />

        <p className={`product-card__stock small my-1 ${stockNum > 0 ? 'text-muted' : 'text-danger fw-bold'}`}>
          {stockNum > 0 ? `Stock: ${stockNum}` : 'Agotado'}
        </p>
          
        {onAdd && (
          <Button
            texto={Number(stock) <= 0 ? "Agotado" : "Agregar"}
            onClick={onAdd}
            tipo="button"
            variante={Number(stock) <= 0 ? "secondary" : "warning"}
            disabled={Number(stock) <= 0}
          />
        )}
      </Card>

      {mostrarDetalle && (
        <>
          <div
            className="modal-backdrop fade show"
            onClick={() => setMostrarDetalle(false)}
          />

          <div
            className="modal fade show d-block"
            tabIndex="-1"
            role="dialog"
            aria-modal="true"
            aria-labelledby="titulo-detalle-producto"
          >
            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
              <div className="modal-content bg-dark text-light border border-warning">

                <div className="modal-header border-secondary">
                  <h2
                    id="titulo-detalle-producto"
                    className="modal-title fs-5"
                  >
                    {name}
                  </h2>

                  <button
                    type="button"
                    className="btn-close btn-close-white"
                    aria-label="Cerrar"
                    onClick={() => setMostrarDetalle(false)}
                  />
                </div>

                <div className="modal-body text-center">
                  <img
                    src={image}
                    alt={name}
                    className="img-fluid rounded mb-3"
                    style={{
                      maxHeight: '350px',
                      objectFit: 'contain'
                    }}
                  />

                  <p>
                    {description || `Carta ${name} de Mitos y Leyendas.`}
                  </p>

                  <PriceTag amount={price} />
                </div>

                <div className="modal-footer border-secondary">
                  <Button
                    texto="Cerrar"
                    onClick={() => setMostrarDetalle(false)}
                    tipo="button"
                    variante="secondary"
                  />
                </div>

              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}