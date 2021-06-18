import { Form, Formik, yupToFormErrors } from "formik";
import React from "react";
import { Button, Header, Label, Segment } from "semantic-ui-react";
import * as Yup from "yup";
import MyTextInput from "../../app/common/form/MyTextInput";

export default function AccountPage() {
  return (
    <Segment>
      <Header dividing size='large' content='Account' />
      <div>
        <Header color='teal' sub content='Change Password' />
        <p>Use this for to change your password</p>
        <div>
          <Formik
            initialValues={{ newPassword1: "", newPassword2: "" }}
            validationSchema={Yup.object({
              newPassword1: Yup.string().required("Password is required"),
              newPassword2: Yup.string().oneOf(
                [Yup.ref("newPassword1"), null],
                "Passwords do not match"
              ),
            })}
            onSubmit={(values) => {
              console.log(values);
            }}
          >
            {({ errors, isSubmitting, isValid, dirty }) => (
              <Form className='ui form'>
                <MyTextInput
                  name='newPassword1'
                  type='password'
                  placeholder='New Password'
                />
                <MyTextInput
                  name='newPassword1'
                  type='password'
                  placeholder='Confirm password'
                />
                {errors.auth && (
                  <Label
                    basic
                    color='red'
                    style={{ marginBottom: 10 }}
                    content={errors.auth}
                  />
                )}
                <Button
                  type='submit'
                  disabled={!isValid || isSubmitting || !dirty}
                  size='large'
                  positive
                  content='Update password'
                />
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </Segment>
  );
}
