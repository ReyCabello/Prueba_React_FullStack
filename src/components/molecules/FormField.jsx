import { Label } from '../atoms/Label';
import { Input } from '../atoms/Input';

export function FormField({ label, required, id, className = '', ...inputProps }) {
  return (
    <div className={`form-field ${className}`.trim()}>
      {label && (
        <Label htmlFor={id}>
          {label} {required && <span className="required-star">*</span>}
        </Label>
      )}
      <Input id={id} required={required} className="form-control w-100" {...inputProps} />
    </div>
  );
}