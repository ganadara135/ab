import * as React from 'react'
import { Field } from "formik";
import { InputField } from "../../../shared/InputField";

export const Page2 = () => (
    <React.Fragment>
        <Field name="price" placeholder="Price" component={InputField} />
        <Field name="beds" placeholder="Beds" component={InputField} />
        <Field name="guests" placeholder="Guests" component={InputField} />
    </React.Fragment>
);