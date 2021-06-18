import React from "react";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import MyTextInput from "../../app/common/form/MyTextInput";
import { registerWithFirebase } from "../../app/firestore/firebaseService";
import { setUserProfileData } from "../../app/firestore/firestoreService";
import { Button, Label } from "semantic-ui-react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

export default function SignUpForm() {
  const { currentUser } = useSelector((state) => state.auth);
  const history = useHistory();

  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{
        displayName: "",
        firstName: "",
        lastName: "",
        email: "",
        password: "",
      }}
      validationSchema={Yup.object({
        displayName: Yup.string().required(),
        firstName: Yup.string().required(),
        lastName: Yup.string().required(),
        email: Yup.string().required().email(),
        password: Yup.string().required(),
      })}
      onSubmit={async (values, { setSubmitting, setErrors }) => {
        console.log(values);
        try {
          await registerWithFirebase(values);

          setSubmitting(false);
          history.push("/home");
        } catch (error) {
          console.log(error);
          setErrors({ auth: error.message });
          setSubmitting(false);
        }
      }}
    >
      {({ isSubmitting, isValid, dirty, errors }) => (
        <Form className='ui form'>
          <MyTextInput name='displayName' placeholder='Display Name:' />
          <MyTextInput name='firstName' placeholder='First Name:' />
          <MyTextInput name='lastName' placeholder='Surname:' />
          <MyTextInput name='email' placeholder='Email adress' />

          <MyTextInput name='password' placeholder='Password' type='password' />
          {errors.auth && (
            <Label
              basic
              color='red'
              style={{ marginBottom: 10 }}
              content={errors.auth}
            />
          )}
          <Button
            loading={isSubmitting}
            disabled={!isValid || !dirty || isSubmitting}
            type='submit'
            fluid
            size='large'
            color='teal'
            content='Register'
          />
        </Form>
      )}
    </Formik>
  );
}
