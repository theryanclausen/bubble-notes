import React, { useEffect, useState, useReducer } from "react";
import Axios from "axios";
import styled from "styled-components";
import BubbleNote from "./BubbleNote";
import ToolBar from "./ToolBar";
import { URL } from "../config/config";
const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const Notes = () => {
  const [notes, setNotes] = useState([]);
  const [updatedNote, setUpdate] = useState(null);
  const initialState = {status:null, id:null}

  const [bubbleControl, dispatch] = useReducer((state,action) =>{
    switch (action.type){
      case state.status:
        return initialState;
      case 'new message':
        return {status:'new message', id:null}
      case 'delete':
        return {status:'delete' , id: null}
      case 'edit':
        return {status:'edit', id: null}
      case 'edit select':
        return {status:'edit', id: action.id}
      case 'sent':
        return initialState
      default:
        return state;
    }

  }, initialState)

  const fetchNotes = async () => {
    const fetchedNotes = await Axios.get(URL);
    if (notes && notes.length !== fetchedNotes.data.length) {
      setNotes(fetchedNotes.data);
    }
  };

  const addNote = async (title, textBody) => {
    await Axios.post(URL, { title, textBody });
    dispatch({type:'sent'});
  };

  const editNote = async (title, textBody, id) => {
    title = title ? title : ' '
    textBody = textBody ? textBody : ' '
    const editedNote = await Axios.put(URL + id, {title, textBody});
    setUpdate(editedNote.data);
    dispatch({type:'sent'});
  };

  const deleteNote = id => {
    if (bubbleControl.status === 'delete') {
      Axios.delete(URL + id);
    }
  };

  useEffect(() => {
    fetchNotes();
  });

  return (
    <Container >
      {notes.length ? notes.map(note => (
        <BubbleNote
          key={note.id}
          note={note}
          updatedNote={updatedNote}
          deleteNote={deleteNote}
          setUpdate={setUpdate}
          dispatch={dispatch}
        bubbleControl={bubbleControl}
        /> 
      )):''}

      <ToolBar
        addNote={addNote}
        notes={notes}
        editNote={editNote}
        dispatch={dispatch}
        bubbleControl={bubbleControl}
      />
    </Container>
  );
};

export default Notes;
