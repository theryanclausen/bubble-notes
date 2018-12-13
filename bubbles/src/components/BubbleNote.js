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
  fetchNote
}) => {
  const [bubbleStats, setBubble] = useState({});
  const [bubbleNote, setNote] = useState({});

  const currentNoteFetch = async()=>{
      let currentNote =await fetchNote(note.id);
      setNote(currentNote);
  }

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
  useEffect(()=>{
      currentNoteFetch()
  })

  return (
    <Bubble
      {...bubbleStats}
      {...bubbleNote}
      deleteStatus={deleteStatus}
      deleteNote={deleteNote}
      editStatus={editStatus}
      stageEdit={stageEdit}
      idPendingEdit={idPendingEdit}
    />
  );
};

export default BubbleNote;
