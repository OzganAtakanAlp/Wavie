import React from "react";

import MyTextInput from "../../app/common/form/MyTextInput";
import { Formik, Form } from "formik";

import * as Yup from "yup";
import {
  addReleaseId,
  createRelease,
} from "../../app/firestore/firestoreService";
import { useDispatch, useSelector } from "react-redux";

import { Button, Header, Label, Segment } from "semantic-ui-react";
import { addGroupId, createGroup } from "../../app/firestore/firestoreService";

export default function GroupCreate({ versions }) {
  const dispatch = useDispatch();
  const selectedId = useSelector((state) => state.selectedVersion.selectedId);
  const { currentUser } = useSelector((state) => state.auth);
  console.log();
  return (
    <Segment clearing>
      <Header content='Create a group' />
      <Formik
        initialValues={{ group_name: "" }}
        validationSchema={Yup.object({
          group_name: Yup.string().required(),
        })}
        onSubmit={async (values, { setSubmitting, setErrors }) => {
          try {
            var groupRef = await createGroup(
              currentUser.uid,
              values.group_name
            );
            console.log(groupRef);
            await addGroupId(groupRef.id, currentUser.uid);
            setSubmitting(false);
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
            <MyTextInput name='group_name' placeholder='Group Name' />
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
    </Segment>
  );
}
