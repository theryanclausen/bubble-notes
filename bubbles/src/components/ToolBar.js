import React, { useRef, useEffect, useGlobal } from "reactn";
import {Bar} from "../config/styled-containers"
import { Edit, Message, Pop } from "../config/Assets";

const ToolBar = () => {
  // eslint-disable-next-line
  const [global, setGlobal] = useGlobal();
  const titleRef = useRef("");
  const textBodyRef = useRef("");
  const button = useRef(null);

  useEffect(() => {
    if (global.status === "editSelect") {
      let note = global.notes.find(
        note => note.id === parseInt(global.id)
      );
      titleRef.current.value = note.title;
      textBodyRef.current.value = note.textBody;
    } else {
      titleRef.current.value = "";
      textBodyRef.current.value = "";
    }
  },[global.status]);

  const submitHandler = e => {
    e.preventDefault();
    if (!textBodyRef.current.value && !titleRef.current.value) {
      return;
    }
    if (global.status === "editSelect") {
      global.editSend({title:titleRef.current.value, textBody:textBodyRef.current.value});
    } else {
      if (!textBodyRef.current.value || !titleRef.current.value) {
        return;
      }
      global.addNote({title:titleRef.current.value, textBody:textBodyRef.current.value});
    }
    titleRef.current.value = "";
    textBodyRef.current.value = "";
  };

  const onEnterPress = e => {
    if (e.keyCode === 13) {
      e.preventDefault();
      button.current.click();
    }
  };

  return (
    <Bar
      status ={global.status}
      viewBar={global.status === "editSelect" || global.status === "newNote"}
    >
      <form onSubmit={submitHandler}>
        <input type="text" ref={titleRef} placeholder="title" maxLength="50" />
        <textarea
          type="text"
          className="textBody"
          ref={textBodyRef}
          placeholder="message"
          maxLength="199"
          onKeyDown={onEnterPress}
        />
        <button ref={button} />
      </form>
      <div>
        <div className="edit" onClick={global.edit}>
          <Edit />
        </div>
        <div
          className="create"
          onClick={global.newNote}
        >
          <Message />
        </div>
        <div
          className="delete"
          onClick={global.delete}
        >
          <Pop />
        </div>
      </div>
    </Bar>
  );
};

export default ToolBar;
