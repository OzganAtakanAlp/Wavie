import React from "react";

import { useDispatch, useSelector } from "react-redux";

import { Button, Grid, Segment } from "semantic-ui-react";
import { openModal } from "../../../../app/common/modals/modalReducer";

import ProjectInfo from "../../../Home Projects/ProjectInfo";

export default function VersionPlayInfo({ versions }) {
  const [fileUrl, setFileUrl] = React.useState(null);
  const versionId = useSelector((state) => state.selectedVersion.selectedId);

  const { isPlaying } = useSelector((state) => state.music);
  const dispatch = useDispatch();
  console.log(versionId);

  console.log(versions[Math.abs(versionId - versions.length)]);

  const audioUrl = versions[Math.abs(versionId - versions.length)].audioUrl;
  console.log(audioUrl);

  return (
    <>
      <Grid>
        <Grid.Column width={10}>
          <Segment.Group className='ui audio player '>
            {/* <Label>
              {versions[Math.abs(versionId - versions.length)].project_style}
            </Label>
            <Label>
              {versions[Math.abs(versionId - versions.length)].project_bpm}
            </Label>
            <Label>
              {versions[Math.abs(versionId - versions.length)].project_key}
            </Label> */}
            <ProjectInfo versions={versions} />

            {audioUrl && <audio src={audioUrl} preload='auto' controls />}
          </Segment.Group>
        </Grid.Column>
        <Grid.Column width={6}>
          <Button
            content='Make a release'
            onClick={() =>
              dispatch(
                openModal({
                  modalType: "ReleaseForm",
                  modalProps: { versions, versionId },
                })
              )
            }
          />
        </Grid.Column>
      </Grid>
    </>
  );
}
