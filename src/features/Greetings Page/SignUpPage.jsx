import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Header } from "semantic-ui-react";
import SignUpForm from "./SignUpForm";

export default function SignUpPage({ history }) {
  const dispatch = useDispatch();
  const { authenticated } = useSelector((state) => state.auth);
  return (
    <>
      <Header content='Register to Wavie' />
      <SignUpForm />
    </>
  );
}
