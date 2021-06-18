import React from "react";
import { useDispatch } from "react-redux";
import { Button, Menu } from "semantic-ui-react";
import { openModal } from "../../app/common/modals/modalReducer";

export default function SignedOutMenu({ setAuthenticated, history }) {
  const dispatch = useDispatch();

  function redirectToLogin() {
    history.push("/");
  }
  function redirectToSignup() {
    history.push("/signUp");
  }

  return (
    <Menu.Item>
      <Button onClick={redirectToLogin} basic inverted content='Login' />
      <Button
        onClick={redirectToSignup}
        basic
        inverted
        content='Signup'
        style={{ marginLeft: "0.5em" }}
      />
    </Menu.Item>
  );
}
