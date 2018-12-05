import React from 'react';
import { TextField } from 'react-components-form';

export default function StrappedInput({label}) {
  return <div className="form-group">
    <label htmlFor={label}>{label}</label>
    <TextField name={label} className="form-control" />
  </div>
}
