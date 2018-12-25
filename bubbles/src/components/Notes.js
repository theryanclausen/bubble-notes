import React, { useEffect, useGlobal } from "reactn";
import styled from "styled-components";
import BubbleNote from "./BubbleNote";
import ToolBar from "./ToolBar";
import Axios from 'axios'
import { URL } from "../config/config";

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const Notes = () => {
   // eslint-disable-next-line
  const [global, setGlobal] = useGlobal();
  
  const fetchNotes= async () => {
    const fetchedNotes = await Axios.get(URL);
   setGlobal({ notes: fetchedNotes.data });
  }

  useEffect(() => {
    fetchNotes(); 
  },[]);

  return (
    <Container>
      {global.notes.length ? global.notes.map(note => <BubbleNote note={note} key={note.id} />):'' }
      <ToolBar />
    </Container>
  );
};

export default Notes;
