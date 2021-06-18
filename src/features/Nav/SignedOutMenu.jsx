import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { Button, Menu } from "semantic-ui-react";

export default function SignedOutMenu({ setAuthenticated }) {
  const dispatch = useDispatch();
  const history = useHistory();

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
