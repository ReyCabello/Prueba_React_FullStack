import { Card } from '../atoms/Card';
import { CardImage } from '../atoms/CardImage';
import { Text } from '../atoms/Text';
import { PriceTag } from '../atoms/PriceTag';
import { Button } from '../atoms/Button';

export function ProductCard({ image, name, price, onAdd, className = '' }) {
  return (
    <Card variant="dark" className={`product-card ${className}`.trim()}>
      <CardImage src={image} alt={name} />
      <Text variant="h3" className="product-card__title">{name}</Text>
      <PriceTag amount={price} className="product-card__price" />
      <Button onClick={onAdd} className="product-card__button">
        agregar
      </Button>
    </Card>
  );
}

/* Molecula para las cartas de la tienda */