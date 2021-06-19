import React from "react";
import StudioDetailedVersionsListItem from "./StudioDetailedVersionsListItem";
export default function StudioDetailedVersionsList({ versions }) {
  console.log(versions);
  return (
    <>
      {versions.map((version) => (
        <StudioDetailedVersionsListItem version={version} key={version.id} />
      ))}
    </>
  );
}
