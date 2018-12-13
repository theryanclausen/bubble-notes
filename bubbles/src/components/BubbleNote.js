import React, { useState, useEffect } from "react";
import Bubble from "./Bubble";
import { randomRange } from "../config/functions";

const BubbleNote = ({
  note,
  deleteNote,
  deleteStatus,
  editStatus,
  stageEdit,
  idPendingEdit,
  updatedNote,
  setUpdate
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
      {...bubbleStats}
      deleteStatus={deleteStatus}
      deleteNote={deleteNote}
      editStatus={editStatus}
      stageEdit={stageEdit}
      idPendingEdit={idPendingEdit}
    />
  );
};

export default BubbleNote;
