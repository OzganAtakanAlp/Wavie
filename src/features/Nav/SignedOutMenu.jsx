import React from "react";
import { useDispatch } from "react-redux";
import { Button, Menu } from "semantic-ui-react";
import { openModal } from "../../app/common/modals/modalReducer";

export default function SignedOutMenu({ setAuthenticated }) {
  const dispatch = useDispatch();

  return (
    <Menu.Item>
      <Button
        onClick={() => dispatch(openModal({ modalType: "LoginForm" }))}
        basic
        inverted
        content='Login'
      />
      <Button
        onClick={() => dispatch(openModal({ modalType: "RegisterForm" }))}
        basic
        inverted
        content='Signup'
        style={{ marginLeft: "0.5em" }}
      />
    </Menu.Item>
  );
}
