import React from 'react';
import { CheckboxField } from 'react-components-form';

export default function StrappedCheckbox({label, options}) {
  return <div className="form-group">
    <label htmlFor={label}>{label}
      <CheckboxField name={label} label="Yes"
                     className="form-control checkbox-inline" />
    </label>
  </div>
}
