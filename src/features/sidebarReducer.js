const SELECTED_PROJECT_ID = "SELECTED_PROJECT_ID";
const DESELECTED_PROJECT_ID = "DESELECTED_PROJECT_ID";
export function SelectedProjectId(selectedId) {
  return {
    type: SELECTED_PROJECT_ID,
    payload: selectedId,
  };
}
export function deSelectedProjectId() {
  return {
    type: DESELECTED_PROJECT_ID,
  };
}
const initialState = {
  selectedId: null,
};

export default function selectedIdReducer(
  state = initialState,
  { type, payload }
) {
  switch (type) {
    case SELECTED_PROJECT_ID:
      return {
        ...state,
        selectedId: payload,
      };
    case DESELECTED_PROJECT_ID:
      return {
        ...state,
        selectedId: null,
      };
    default:
      return state;
  }
}
