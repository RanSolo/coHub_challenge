import React from 'react';
import { CheckboxField, ListField, ObjectField } from 'react-components-form';

export default function StrappedMulti({label, options}) {
  return <div className="form-group">
    <label htmlFor={label}>{label}
      <CheckboxField name={label} label="Yes"
                     className="form-control checkbox-inline" />
    </label>
  </div>
}
