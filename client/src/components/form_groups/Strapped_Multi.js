import React from 'react';
import { CheckboxField, ListField, ObjectField } from 'react-components-form';

export default function StrappedMulti({label, options}) {
  return <div className="form-group">
    <label htmlFor={label}>{label}
      <ListField name={label}>
        <ObjectField>
          {options.map(selection => (
          <CheckboxField key={selection} name={selection} label={selection}/>
        ))}
        </ObjectField>
      </ListField>
    </label>
  </div>
}
