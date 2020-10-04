import { ADD_ITEM, REMOVE_ITEM, REMOVE_ALL } from "./noteTypes";

const initState = {
  notes: ["First", "Second", "Third"],
};

// Redux reducer - changes app from given 'state' to new one by given 'action'
const note = (state = initState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      let newNotes = [...state.notes, action.text];
      let newState = { ...state, notes: newNotes };
      return newState;

    case REMOVE_ITEM:
      return state;
    case REMOVE_ALL:
      return state;
    default:
      return state;
  }
};

export default note;
