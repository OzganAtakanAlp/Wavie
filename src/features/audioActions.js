import { DOWNLOAD_AUDIO, PAUSE_AUDIO, PLAY_AUDIO } from "./audioConstants";

export function downloadAudio(audio) {
  return {
    type: DOWNLOAD_AUDIO,
    payload: audio,
  };
}
export function pauseAudio(isPlaying) {
  return {
    type: PAUSE_AUDIO,
    payload: isPlaying,
  };
}

export function playAudio(isPlaying) {
  return {
    type: PLAY_AUDIO,
    payload: isPlaying,
  };
}
