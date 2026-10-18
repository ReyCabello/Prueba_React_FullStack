
export function PriceTag({ amount, className = '' }) {
  return (
    <p className={`price-tag ${className}`.trim()}>
      ${Number(amount).toLocaleString('es-CL')}
    </p>
  );
}
