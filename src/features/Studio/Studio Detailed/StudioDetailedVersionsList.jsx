import styled from "styled-components";
import React from "react";
import StudioDetailedVersionsListItem from "./StudioDetailedVersionsListItem";
import { useState } from "react";
export default function StudioDetailedVersionsList({
  versions,
  defaultActive,
}) {
  console.log(versions);
  const [activeIndex, setActiveIndex] = useState(defaultActive || 1);
  const SidebarParent = styled.div`background: #c34a36;
  width: 250px;
  height: 100vh:
  `;

  return (
    <>
      <SidebarParent></SidebarParent>
    </>
  );
}
