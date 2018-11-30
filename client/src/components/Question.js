import React from 'react';

export default function Question({ question: { position,
                                               label,
                                               field_type,
                                               options,
                                               multiselect } }) {
  return (
    <div>
      if (field_type == string)
      Position: {position}
      Label: {label}
      Field Type: {field_type}
      Options: {options}
      Multiselect: {multiselect}
    </div>
  )
}
