import { Label } from '../atoms/Label';
import { Select } from '../atoms/Select';

export function SelectFormField({ label, required, id, options, className = '', ...selectProps }) {
  return (
    <div className={`form-field ${className}`.trim()}>
      {label && (
        <Label htmlFor={id}>
          {label} {required && <span className="required-star">*</span>}
        </Label>
      )}
      <Select id={id} options={options} {...selectProps} />
    </div>
  );
}