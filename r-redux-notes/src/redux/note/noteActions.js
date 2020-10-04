import { ADD_ITEM, REMOVE_ITEM, REMOVE_ALL } from "./noteTypes";

// Implements Redux action  - 'Add note item' to be dispatched from React component
export const addNoteItem = (text) => {
  return {
    type: ADD_ITEM,
    text: text,
  };
};

// Implements Redux action  - 'Remove note item' to be dispatched from React component
export const removeNoteItem = (id) => {
  return {
    type: REMOVE_ITEM,
    id: id,
  };
};

// Implements Redux action  - 'Remove all note items' to be dispatched from React component
export const removeAllNoteItems = () => {
  return {
    type: REMOVE_ALL,
  };
};
