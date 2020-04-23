import * as React from 'react'
import { Field } from "formik";
import { InputField } from "../../../shared/InputField";

export const Page1 = () => (
    <React.Fragment>
        <Field 
           
            name="name"
            placeholder="Name"
            component={InputField}
        />
        <Field  
           
            name="category"
            placeholder="Category"
            component={InputField}
        />
        <Field  
            // label="Latitude"
            name="description"
            placeholder="Description"
            component={InputField}
        />
    </React.Fragment>
);