import { Card } from '../atoms/Card';
import { Text } from '../atoms/Text';
import { PriceTag } from '../atoms/PriceTag';

export function CartSummaryCard({
  totalItems = 0,
  totalPrice = 0,
  className = ''
}) {
  return (
    <Card
      variant="dark"
      className={`cart-summary ${className}`.trim()}
    >
      <Text
        texto="Resumen de compra"
        etiqueta="h3"
        className="cart-summary__title"
      />

      <Text
        texto={`Productos: ${totalItems}`}
        etiqueta="p"
      />

      <div className="d-flex align-items-center gap-2">
        <Text texto="Total:" etiqueta="p" />
        <PriceTag amount={totalPrice} />
      </div>
    </Card>
  );
}