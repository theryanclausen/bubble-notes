import React, { useState, useEffect } from "react";
import Bubble from "./Bubble";
import { randomRange } from "../config/config";

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
    setBubble({
      pos: randomRange(10, 70) + "%",
      wiggle: randomRange(2, 180, true) + "px",
      wiggleDur: randomRange(1500, 8000, true) + "ms",
      duration: randomRange(8666, 64232, true) + "ms",
      delayDist: -1 * randomRange(293, 950, true) + "px",
      z: 100
    });
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
