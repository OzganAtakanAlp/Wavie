import {
  DOWNLOAD_AUDIO,
  GET_AUDIO_REF,
  PAUSE_AUDIO,
  PLAY_AUDIO,
} from "./audioConstants";

export function downloadAudio(audio) {
  return {
    type: DOWNLOAD_AUDIO,
    payload: audio,
  };
}
export function pauseAudio() {
  return {
    type: PAUSE_AUDIO,
  };
}

export function playAudio() {
  return {
    type: PLAY_AUDIO,
  };
}
export function getAudioRef(audioRef) {
  return {
    type: GET_AUDIO_REF,
    payload: audioRef,
  };
}
