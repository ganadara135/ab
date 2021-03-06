import * as React from "react";
import {   Button, } from 'antd';
import { withFormik,      FormikProps, Field, Form } from 'formik';

import { InputField } from "../../shared/InputField";

import { NormalizedErrorMap, ForgotPasswordChangeMutationVariables } from "@abb/controller";
import { changePasswordSchema } from "@abb/common";

interface FormValues {
    newPassword: string;
}
interface Props {
  //  submit: (values: FormValues) => Promise<FormikErrors<FormValues> | null>;
    onFinish: () => void;
    token: string;
    submit: (values: ForgotPasswordChangeMutationVariables) => Promise<NormalizedErrorMap | null>;
}

class C extends React.PureComponent<FormikProps<FormValues> & Props> {

    render() {
      console.log("props in LoginView : ", this.props)
        return (
          <Form > 
          <div style={{width: 400, margin:'auto'}}>
            <Field  
              name="newPassword"
              type="password"
              placeholder="New Password"
              component={InputField}
            />
            <div>
              <Button type="primary" htmlType="submit" className="login-form-button">
                change Password
              </Button>
            </div>
          </div>
          </Form>
        );
    }
}


export const ChangePasswordView = withFormik<Props, FormValues>({
    validationSchema: changePasswordSchema,
    mapPropsToValues: () => ({ newPassword: ""}),
    handleSubmit: async ({newPassword}, {props, setErrors}) => {
      
        const errors = await props.submit({newPassword, key: props.token});
        if(errors){
            setErrors(errors)
        } else {
          props.onFinish();
        }
    }
})(C);