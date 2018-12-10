import React from 'react';
import { CheckboxField, ListField, ObjectField } from 'react-components-form';

export default function StrappedMulti({label, options}) {
  return <div className="form-group">
      <ListField label={label} name={label}>
        <ObjectField>
          {options.map(selection => (
          <CheckboxField key={selection} name={selection} label={selection}/>
        ))}
        </ObjectField>
      </ListField>
  </div>
}
