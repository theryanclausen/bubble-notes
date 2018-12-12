import React, { useEffect, useState } from "react";
import Axios from "axios";
import BubbleNote from "./BubbleNote";
import ToolBar from "./ToolBar";

const Notes = () => {
  const [notes, setNotes] = useState([]);

  const fetchNotes = async () => {
    const fetchedNotes = await Axios.get(
      "https://backend-project-week-lambda.herokuapp.com/api/notes"
    );
    setNotes(fetchedNotes.data);
  };

  useEffect(() => {
    fetchNotes();
  });

  return (
    <React.Fragment>
      {notes.map(note => (
        <BubbleNote key={note.id} note={note} />
      ))}

      <ToolBar />
    </React.Fragment>
  );
};

export default Notes;
