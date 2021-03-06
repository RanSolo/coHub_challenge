import React from 'react';
import { SelectField } from 'react-components-form';

export default function StrappedSelect({label, options}) {
  return <div className="form-group">
    <SelectField name={label}
                 label={label}
                 options={options}
                 className="form-control"
      />
  </div>
}
