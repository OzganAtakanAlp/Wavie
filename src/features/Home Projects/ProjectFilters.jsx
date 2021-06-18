import React from "react";
import { Header, Menu } from "semantic-ui-react";
import Calendar from "react-calendar";

export default function ProjectFilters() {
  return (
    <>
      <Menu vertical size='large' style={{ width: "100%" }}>
        <Header icon='filter' attached color='teal' content='Filters' />
        <Menu.Item content='All events' />
        <Menu.Item content="I'm going" />
        <Menu.Item content="I'm hosting" />
      </Menu>
    </>
  );
}
