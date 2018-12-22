import React, { useState, useEffect } from "react";
import Bubble from "./Bubble";
import { textBubbles } from "../config/config";

const BubbleNote = ({
  note,
  updatedNote,
  setUpdate,
  bubbleControl,
  dispatch,
  deleteNote
}) => {
  const [bubbleStats, setBubble] = useState({});
  const [currentNote, setCurrent] = useState({});

  useEffect(() => {
    setBubble(textBubbles());
  }, {});

  useEffect(() => {
    if (!currentNote.id) {
      setCurrent(note);
    }
    if (updatedNote && updatedNote.id === note.id) {
      setCurrent(updatedNote);
      setUpdate(null);
      
    }
  });

  return (
    <Bubble
      {...currentNote}
      bubbleStats={bubbleStats}
      bubbleControl = {bubbleControl}
      dispatch = {dispatch}
      deleteNote={deleteNote}
    />
  );
};

export default BubbleNote;
