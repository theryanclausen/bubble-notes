import React, { setGlobal, addReducer } from "reactn";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { URL } from "./config/config";
import Axios from "axios";

const nullOut = {
  status: null,
  id: null,
  updatedNote: {}
};

const initialState = {
  ...nullOut,
  notes: []
};

setGlobal(initialState);

addReducer("newNote", state =>
  state.status === "newNote"
    ? { ...state, ...nullOut }
    : { status: "newNote", id: null }
);
addReducer("addNote", async (state, newNote) => {
  const newNoteRes = await Axios.post(URL, newNote);
  const notes = [...state.notes, newNoteRes.data];
  return { ...state, ...nullOut, notes };
});
addReducer("delete", state =>
  state.status === "delete"
    ? { ...state, ...nullOut }
    : { status: "delete", id: null }
);
addReducer("deleteNote", async (state, id) => {
  await Axios.delete(URL + id);
  return state;
});
addReducer("edit", state =>
  state.status === "edit" || state.status === "editSelect"
    ? { ...state, ...nullOut }
    : { status: "edit", id: null }
);
addReducer("editSend", async (state, editedNote) => {
  const editedNoteRes = await Axios.put(URL + state.id, editedNote);
  let alteredNotes = [...state.notes]
  let index = alteredNotes.findIndex(x => x.id === parseInt(editedNoteRes.data.id))
  if(index >= 0){
    alteredNotes.splice(index,1,editedNoteRes.data)
  }
  return { ...state, status: "sent", updatedNote: {...editedNoteRes.data} , notes: alteredNotes};
});
addReducer("editSelect", (state, id) => ({
  ...state,
  status: "editSelect",
  id
}));
addReducer("clear", state => ({ ...state, status:null, id:null }));

ReactDOM.render(
  <App />,

  document.getElementById("root")
);
