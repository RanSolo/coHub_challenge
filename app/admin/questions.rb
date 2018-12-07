ActiveAdmin.register Question do
  permit_params :position, :label, :field_type, :options, :multiselect
end
