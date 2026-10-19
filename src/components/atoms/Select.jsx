export function Select({ options = [], className = '', ...props }) {
  return (
    <select className={`form-select ${className}`.trim()} {...props}>
      {options.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  );
}