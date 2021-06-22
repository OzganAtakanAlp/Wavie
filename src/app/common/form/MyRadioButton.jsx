import { Field, useField } from "formik";
import React from "react";
import { useSelector } from "react-redux";
import { FormField, Label } from "semantic-ui-react";

export default function MyRadioButton({ versions, label, ...props }) {
  const [field, meta] = useField(props);

  return (
    <FormField error={meta.touched && !!meta.error}>
      <label>{label}</label>
      <Field type='radio' name='picked' value={versions.id} />
      {meta.touched && meta.error ? (
        <Label basic color='red'>
          {meta.error}
        </Label>
      ) : null}
    </FormField>
  );
}
