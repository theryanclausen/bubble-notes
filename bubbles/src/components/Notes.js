import React, { useEffect, useState } from "react";
import Axios from "axios";
import styled from "styled-components";
import BubbleNote from "./BubbleNote";
import ToolBar from "./ToolBar";
import { URL } from "../config/functions";
const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const Notes = () => {
  const [notes, setNotes] = useState([]);
  const [deleteStatus, setDelete] = useState(false);
  const [editStatus, setEdit] = useState(false);
  const [idPendingEdit, setEditID] = useState(null);
  const [messageStatus, setMessage] = useState(false);
  const [updatedNote, setUpdate] = useState(null);
  const [editBarInit, setBarInit] = useState(false)

  const toggleDelete = () => {
    setDelete(!deleteStatus);
    setEdit(false);
    setMessage(false);
    setEditID(null);
    setBarInit(false);
  };

  const toggleEdit = () => {
    setEdit(!editStatus);
    setDelete(false);
    setMessage(false);
    setEditID(null);
    setBarInit(false);
  };

  const toggleMessage = () => {
    setMessage(!messageStatus);
    setDelete(false);
    setEdit(false);
    setEditID(null);
    setBarInit(false)
  };


  const stageEdit = id => {
    
    setEditID(id)
  };

  const fetchNotes = async () => {
    const fetchedNotes = await Axios.get(URL);
    if (notes && notes.length !== fetchedNotes.data.length) {
      setNotes(fetchedNotes.data);
    }
  };

  const addNote = async (title, textBody) => {
    await Axios.post(URL, { title, textBody });
    setMessage(false);
  };

  const editNote = async (title, textBody, id) => {
    setEdit(false)
    title = title ? title : ' '
    textBody = textBody ? textBody : ' '
    const editedNote = await Axios.put(URL + id, {title, textBody});
    setEditID(null);
    setUpdate(editedNote.data);
  };

  const deleteNote = id => {
    if (deleteStatus) {
      Axios.delete(URL + id);
    }
  };

  useEffect(() => {
    fetchNotes();
  });

  return (
    <Container deleteStatus={deleteStatus}>
      {notes.length ? notes.map(note => (
        <BubbleNote
          key={note.id}
          note={note}
          updatedNote={updatedNote}
          deleteNote={deleteNote}
          deleteStatus={deleteStatus}
          editStatus={editStatus}
          stageEdit={stageEdit}
          idPendingEdit={idPendingEdit}
          setUpdate={setUpdate}
        /> 
      )):''}

      <ToolBar
        addNote={addNote}
        notes={notes}
        toggleDelete={toggleDelete}
        deleteStatus={deleteStatus}
        toggleEdit={toggleEdit}
        editStatus={editStatus}
        toggleMessage={toggleMessage}
        messageStatus={messageStatus}
        idPendingEdit={idPendingEdit}
        editNote={editNote}
        setBarInit={setBarInit}
        editBarInit={editBarInit}
        
      />
    </Container>
  );
};

export default Notes;
