import React from "react";
import ModalWrapper from "../../../app/common/modals/ModalWrapper";
import MyTextInput from "../../../app/common/form/MyTextInput";
import { Formik, Form } from "formik";

import * as Yup from "yup";
import {
  addReleaseId,
  createRelease,
} from "../../../app/firestore/firestoreService";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../../app/common/modals/modalReducer";
import { Button, Label } from "semantic-ui-react";

export default function ReleaseForm({ versions }) {
  const dispatch = useDispatch();
  const selectedId = useSelector((state) => state.selectedVersion.selectedId);
  console.log(versions[Math.abs(selectedId - versions.length)]);
  return (
    <ModalWrapper size='small' header='Make a Release'>
      <Formik
        initialValues={{ project_name: "" }}
        validationSchema={Yup.object({
          project_name: Yup.string().required(),
        })}
        onSubmit={async (values, { setSubmitting, setErrors }) => {
          try {
            var releaseRef = await createRelease(
              versions[Math.abs(selectedId - versions.length)],
              values
            );
            console.log(
              releaseRef.id,
              versions[Math.abs(selectedId - versions.length)]
            );
            await addReleaseId(
              releaseRef.id,
              versions[Math.abs(selectedId - versions.length)]
            );
            setSubmitting(false);
            dispatch(closeModal());
          } catch (error) {
            console.log(error);
            setErrors({
              error: "Something went wrong with that name, try something else",
            });
            setSubmitting(false);
          }
        }}
      >
        {({ isSubmitting, isValid, dirty, errors }) => (
          <Form className='ui form'>
            <MyTextInput name='project_name' placeholder='Project name' />
            {errors.error && (
              <Label
                basic
                color='red'
                style={{ marginBottom: 10 }}
                content={errors.error}
              />
            )}
            <Button
              loading={isSubmitting}
              disabled={!isValid || !dirty || isSubmitting}
              type='submit'
              fluid
              size='large'
              content='Release'
            />
          </Form>
        )}
      </Formik>
    </ModalWrapper>
  );
}
