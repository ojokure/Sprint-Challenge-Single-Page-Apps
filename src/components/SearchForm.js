import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage, FieldArray } from "formik";
import * as yup from "yup";

export default function SearchForm() {
 
  return (
    <section className="search-form">

      <Formik
      initialValues
      validationSchema
      onSubmit
      render={props => {
        return (
          <Form>
            <div>
              <label> </label>
              <Field name="name" type="text" placeholder="Search by name" />
              <ErrorMessage name="name" component="div" />
            </div>
            </Form>
        )}
        }
    />
    </section>)
}
