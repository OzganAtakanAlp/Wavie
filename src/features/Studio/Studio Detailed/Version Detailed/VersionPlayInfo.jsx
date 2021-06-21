import React from "react";
import { useSelector } from "react-redux";

import { Button } from "semantic-ui-react";

export default function VersionPlayInfo({ match }) {
  const audioElement = new Audio(
    "/assets/giorno's theme but only the best part is in.wav"
  );
  const version = useSelector((state) =>
    state.version.versions.find((e) => e.id === match.params.id)
  );
  console.log(audioElement);

  function handlePlay() {
    audioElement.play();
  }
  function handlePause() {
    audioElement.pause();
  }

  return (
    <>
      <div>
        <audio src={audioElement} />
        <Button icon='play' onClick={handlePlay} />
        <Button icon='pause' onClick={handlePause} />
      </div>
    </>
  );
}
