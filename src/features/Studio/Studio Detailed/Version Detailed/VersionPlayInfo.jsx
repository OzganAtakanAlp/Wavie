import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Button, Grid, Segment } from "semantic-ui-react";
import useStorage from "../../../../app/hooks/useStorage";
import {
  dataFromURL,
  getAudioFromStorage,
} from "../../../../app/storage/storageService";
import {
  downloadAudio,
  getAudioRef,
  pauseAudio,
  playAudio,
} from "../../../audioActions";

export default function VersionPlayInfo({ versions }) {
  const [fileUrl, setFileUrl] = React.useState(null);
  const versionId = useSelector((state) => state.selectedVersion.selectedId);
  const { isPlaying } = useSelector((state) => state.music);
  const dispatch = useDispatch();
  console.log(versionId);

  const audioRef = useSelector(
    (state) => state.version.versions[0].bounce_path_to_cloud
  );
  console.log(audioRef);
  const audioElement = new Audio(
    "/assets/giorno's theme but only the best part is in.wav"
  );

  const audioUrl = versions[versionId - 1].audioUrl;
  console.log(audioUrl);

  function handlePlay() {
    audioElement.play();
  }
  function handlePause() {
    audioElement.pause();
  }
  function handleRelease() {}

  return (
    <>
      <Grid>
        <Grid.Column width={10}>
          <Segment.Group className='ui audio player '>
            {audioUrl && <audio src={audioUrl} preload='auto' controls />}

            <Button icon='play' onClick={handlePlay} />

            <Button icon='pause' onClick={handlePause} />
          </Segment.Group>
        </Grid.Column>
        <Grid.Column width={6}>
          <Button content='Make a release' />
        </Grid.Column>
      </Grid>
    </>
  );
}
