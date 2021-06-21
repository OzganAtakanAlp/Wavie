import React from "react";

import { Container, Menu } from "semantic-ui-react";
import StudioDetailedVersionsListItem from "./StudioDetailedVersionsListItem";

export default function Sidebar({ versions }) {
  return (
    <Menu vertical>
      <Container>
        {versions.map((version) => (
          <StudioDetailedVersionsListItem version={version} key={version.id} />
        ))}
      </Container>
    </Menu>
  );
}
