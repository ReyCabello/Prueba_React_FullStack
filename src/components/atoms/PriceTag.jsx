export function PriceTag({ price, amount, className = '' }) {
  const valor = amount ?? price ?? 0;

  return (
    <span className={`fw-bold text-warning ${className}`}>
      ${Number(valor).toLocaleString('es-CL')}
    </span>
  );
}

export default PriceTag;