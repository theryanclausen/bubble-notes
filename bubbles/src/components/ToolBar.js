import React, { useRef, useEffect, useGlobal } from "reactn";
import styled from "styled-components";
import { Edit, Message, Pop } from "../config/Assets";

const Bar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  width: ${props => (props.viewBar ? "95vw" : "125px")};
  top: 25px;
  right: 15px;
  border-radius: 10px;
  background: #2d94b280;
  box-shadow: 0 0 30px 14px #f3fbfefc;
  height: 40px;
  @media (max-width: 700px) {
    height: ${props => (props.viewBar ? "200px" : "125px")};
    width: ${props => (props.viewBar ? "95vw" : "40px")};
  }
  div {
    color: white;
    width: 125px;
    height: 40px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    align-self: flex-start;
    @media (max-width: 700px) {
      width: 40px;
      height: 125px;
      flex-direction: column;
    }
    div {
      z-index: 500;
      &:hover {
        cursor: pointer;
      }
    }
    .delete {
      color: ${props => (props.status === "delete" ? "red" : "white")};
    }
    .edit {
      color: ${props => (props.status === "edit" ? "lightGreen" : "white")};
    }
    .create {
      color: ${props => (props.status === "newNote" ? "yellow" : "white")};
    }
  }
  form {
    z-index: 200;
    width: 100%;
    height: 100%;
    display: ${props => (props.viewBar ? "flex" : "none")};
    @media (max-width: 700px) {
      flex-direction: column;
    }
    input,
    textarea {
      width: 20%;
      box-shadow: 0 0 10px 4px #f3fbfefc;
      background: #ffffff;
      margin: 8px;
      padding: 4px 12px;
      border-radius: 12px;
      border-style: none;
      color: #1a6670;
      font-family: "Josefin Sans", sans-serif;
      font-weight: bold;
      outline: none;
      font-size: 17px;
      @media (max-width: 700px) {
        width: 95%;
      }
    }
    textarea {
      width: 79%;
      resize: none;
      overflow: hidden;
      @media (max-width: 700px) {
        width: 95%;
        height: 100%;
      }
    }
    button {
      display: none;
    }
  }
`;

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
  });

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
