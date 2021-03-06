import {
  DOWNLOAD_AUDIO,
  PAUSE_AUDIO,
  PLAY_AUDIO,
  CANCELLED_AUDIO,
  GET_AUDIO_REF,
} from "./audioConstants";

const audio = new Audio(
  "/assets/giorno's theme but only the best part is in.wav"
);

const initialState = {
  audioRefs: "",
  isPlaying: false,
};

export default function audioReducer(state = initialState, { type, payload }) {
  switch (type) {
    // case DOWNLOAD_AUDIO:
    //   return {
    //     ...state,
    //     audios: [...state.audios, payload],
    //   };
    case PLAY_AUDIO:
      return {
        ...state,
        isPlaying: true,
      };
    case PAUSE_AUDIO:
      return {
        ...state,
        isPlaying: false,
      };
    case GET_AUDIO_REF:
      return {
        ...state,
        audioRefs: payload,
      };
    default:
      return state;
  }
}
