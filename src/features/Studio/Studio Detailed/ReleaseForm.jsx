import React from "react";
import ModalWrapper from "../../../app/common/modals/ModalWrapper";

export default function ReleaseForm({ id }) {
  return (
    <ModalWrapper size='small' header='Make a Release'>
      <div>The data is:{id} </div>
    </ModalWrapper>
  );
}
