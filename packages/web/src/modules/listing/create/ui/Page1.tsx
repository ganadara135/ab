import * as React from 'react'
import { Field } from "formik";
import { InputField } from "../../../shared/InputField";

export const Page1 = () => (
    <React.Fragment>
        <Field 
            label="Name" 
            name="name"
            placeholder="Name"
            component={InputField}
        />
        <Field  
            label="Category"
            name="category"
            // placeholder="aaaa"
            placeholder="Category"
            component={InputField}
        />
        <Field  
            label="Description" 
            name="description"
            placeholder="Description"
            component={InputField}
        />
    </React.Fragment>
);