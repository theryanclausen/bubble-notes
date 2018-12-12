import React, { useEffect, useState } from "react";
import Axios from "axios";
import styled from 'styled-components'
import BubbleNote from "./BubbleNote";
import ToolBar from "./ToolBar";
const Container = styled.div`
  width: 100%;
  height: 100%;
`

const Notes = () => {
  const [notes, setNotes] = useState([]);
  const [deleteStatus, setDelete] = useState(false)
  const URL = "https://backend-project-week-lambda.herokuapp.com/api/notes/"
  
  const toggleDelete = () =>setDelete(!deleteStatus)
  
  const fetchNotes = async () => {
    const fetchedNotes = await Axios.get(URL
      
    );
    setNotes(fetchedNotes.data);
  };

  const addNote = async(title, textBody) =>{
    await Axios.post(URL, {title,textBody})
  }

  const deleteNote = (id) =>{
    if(deleteStatus){
      Axios.delete(`${URL}${id}`)
    }
  }

  useEffect(() => {
    fetchNotes();
  });

  return (
    <Container deleteStatus={deleteStatus}>
      {notes.map(note => (
        <BubbleNote key={note.id} note={note} deleteNote={deleteNote} deleteStatus={deleteStatus} />
      ))}

      <ToolBar addNote={addNote} toggleDelete={toggleDelete} deleteStatus={deleteStatus}/>
    </Container>
  );
};

export default Notes;
