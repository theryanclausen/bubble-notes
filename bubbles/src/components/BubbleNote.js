import React, { useState, useEffect, useGlobal } from "reactn";
import Bubble from "./Bubble";
import { textBubbles } from "../config/config";

const BubbleNote = ({ note }) => {
  // eslint-disable-next-line
  const [global, setGlobal] = useGlobal();
  const [bubbleStats, setBubble] = useState({});
  const [currentNote, setCurrent] = useState({});

  useEffect(() => {
    setBubble(textBubbles());
  }, {});

  useEffect(() => {
    if (!currentNote.id) {
      setCurrent(note);
    }
    if (global.status==='sent' && note.id === parseInt(global.id)) {
      console.log(note, global.updatedNote)
      setCurrent(global.updatedNote);
      global.clear()
    }
  });

  return <Bubble {...currentNote} bubbleStats={bubbleStats} />;
};

export default BubbleNote;
