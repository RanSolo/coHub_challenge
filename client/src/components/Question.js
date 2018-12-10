import React from 'react';
import StrappedInput from './form_groups/Strapped_Input';
import StrappedSelect from './form_groups/Strapped_Select';
import StrappedCheckbox from './form_groups/Strapped_Checkbox';
import StrappedMulti from './form_groups/Strapped_Multi';

export default function Question({
  question: { position, label, field_type, options, multiselect }
}) {
  return(
    <div>
      {(() => {
        if (field_type === "select") {
          return <StrappedSelect label={label} options={options} />
        } else if (field_type === "boolean") {
          return <StrappedCheckbox label={label} />
        } else if (field_type === "string") {
          return <StrappedInput label={label} />
        } else if (field_type === "list") {
          return <StrappedMulti label={label} options={options} />
        } else if (field_type === "number") {
          return <StrappedSelect label={label}
                                 options={[...Array(16).keys(), '15+']} />
        }
      })()}
    </div>
  )
}
