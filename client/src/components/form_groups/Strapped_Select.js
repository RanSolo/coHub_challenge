import React from 'react';
import { SelectField } from 'react-components-form';

export default function StrappedSelect({label, options}) {
  return <div className="form-group">
    <label htmlFor={label}>{label}
      <SelectField name={label}
                   options={options}
                   className="form-control"
      />
    </label>
  </div>
}
