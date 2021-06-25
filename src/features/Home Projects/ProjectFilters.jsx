import React from "react";
import { Menu } from "semantic-ui-react";

export default function ProjectFilters() {
  return (
    <>
      <Menu
        inverted
        pointing
        secondary
        vertical
        size='huge'
        style={{ width: "100%" }}
      >
        <Menu.Item>
          <Menu.Menu>
            <Menu.Item name='Releases' active={true} />
            <Menu.Item name='Groups' />
            <Menu.Item name='Starred' />
          </Menu.Menu>
        </Menu.Item>
      </Menu>
    </>
  );
}
