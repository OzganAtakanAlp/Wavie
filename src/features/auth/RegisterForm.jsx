import { Formik, Form } from "formik";
import React from "react";
import ModalWrapper from "../../app/common/modals/ModalWrapper";
import * as Yup from "yup";
import MyTextInput from "../../app/common/form/MyTextInput";
import { Button, Label } from "semantic-ui-react";
import { useDispatch } from "react-redux";
import { closeModal } from "../../app/common/modals/modalReducer";
import { registerWithFirebase } from "../../app/firestore/firebaseService";
import { setUserProfileData } from "../../app/firestore/firestoreService";

export default function RegisterForm() {
  const dispatch = useDispatch();

  return (
    <ModalWrapper size='mini' header='Sign up to Wavie'>
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
            await setUserProfileData(values.firstName, values.lastName);
            setSubmitting(false);
            dispatch(closeModal());
          } catch (error) {
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

            <MyTextInput
              name='password'
              placeholder='Password'
              type='password'
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
    </ModalWrapper>
  );
}
