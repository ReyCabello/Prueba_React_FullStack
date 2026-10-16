import { Card } from '../atoms/Card';
import { Text } from '../atoms/Text';
import { PriceTag } from '../atoms/PriceTag';

export function CartSummaryCard({ totalItems = 0, totalPrice = 0, className = '' }) {
  return (
    <Card variant="dark" className={`cart-summary ${className}`.trim()}>
      <Text variant="h3" className="cart-summary__title">Resumen del carrito</Text>
      <Text variant="p">Productos: {totalItems}</Text>
      <Text variant="p">
        Total: <PriceTag amount={totalPrice} />
      </Text>
    </Card>
  );
}