import React, { useEffect, useState } from "react";
import Axios from "axios";
import styled from "styled-components";
import BubbleNote from "./BubbleNote";
import ToolBar from "./ToolBar";
import {URL} from "../config/functions"
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

  

  const toggleDelete = () => {
    setDelete(!deleteStatus);
    setEdit(false);
    setMessage(false);
    setEditID(null);
  };

  const toggleEdit = () => {
    setEdit(!editStatus);
    setDelete(false);
    setMessage(false);
    setEditID(null);
  };

  const toggleMessage = () => {
    setMessage(!messageStatus);
    setDelete(false);
    setEdit(false);
    setEditID(null);
  };

  const stageEdit = id => setEditID(id);

  const fetchNotes = async () => {
    const fetchedNotes = await Axios.get(URL);
    setNotes(fetchedNotes.data);
  };

  const fetchNote = async id =>{
    const currentNote = await Axios.get(URL+id)
    return currentNote.data
}

  const addNote = (title, textBody) => {
    Axios.post(URL, { title, textBody });
    setMessage(false);
  };

  const editNote = async (title,textBody,id) =>{
    await Axios.put(URL+id,{title,textBody})
    setEdit(false)
    setEditID(null);
  }

  const deleteNote = id => {
    if (deleteStatus) {
      Axios.delete(URL+id);
    }
  };

  useEffect(() => {
    fetchNotes();
  });

  return (
    <Container deleteStatus={deleteStatus}>
      {notes.map(note => (
        <BubbleNote
          key={note.id}
          note={note}
          deleteNote={deleteNote}
          deleteStatus={deleteStatus}
          editStatus={editStatus}
          stageEdit={stageEdit}
          idPendingEdit={idPendingEdit}
          fetchNote= {fetchNote}
        />
      ))}

      <ToolBar
        addNote={addNote}
        toggleDelete={toggleDelete}
        deleteStatus={deleteStatus}
        toggleEdit={toggleEdit}
        editStatus={editStatus}
        toggleMessage={toggleMessage}
        messageStatus={messageStatus}
        idPendingEdit={idPendingEdit}
        editNote={editNote}
        fetchNote={fetchNote}
      />
    </Container>
  );
};

export default Notes;
