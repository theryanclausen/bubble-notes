import React, { useState } from "react";
import styled from "styled-components";
import { Edit, Message, Pop } from "../config/Assets";

const Bar = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 25px;
  right: 10px;
  border-radius: 10px;
  background: #2d94b280;
  box-shadow: 0 0 30px 14px #f3fbfefc;
  height: 40px;
  div {
    color: white;
    width: 125px;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    div {
      z-index: 500;
      &:hover {
        cursor: pointer;
      }
    }
    .delete {
      color: ${props => (props.deleteStatus ? "red" : "white")};
    }
    .edit {
      color: ${props => (props.editStatus ? "lightGreen" : "white")};
    }
    .message {
      color: ${props => (props.messageStatus ? "yellow" : "white")};
    }
  }
  form {
    z-index: 200;
    width: 85vw;
    display: ${props =>
      (props.editStatus&& props.bubbleSelected) || props.messageStatus ? "flex" : "none"};
    input {
      width: 20%;
      box-shadow: 0 0 10px 4px #f3fbfefc;
      background: #ffffff;
      margin: 0 15px;
      padding: 2px 4px;
      border-radius: 5px;
      border-style: none;
    }
    .textBody {
      width: 79%;
    }
    button {
      display: none;
    }
  }
`;

const ToolBar = ({
  addNote,
  deleteStatus,
  toggleDelete,
  editStatus,
  toggleEdit,
  messageStatus,
  toggleMessage,
  idPendingEdit,
  editNote,
  fetchNote
}) => {
  const [title, setTitle] = useState("");
  const [textBody, setText] = useState("");

  const submitHandler = (e, aTitle, text, editID = false) => {
    e.preventDefault();
    if(editStatus && editID){
        editNote(aTitle,text,editID)
    }
    else{
      addNote(aTitle, text);  
    }
    setTitle("");
    setText("");
  };
  return (
    <Bar
      deleteStatus={deleteStatus}
      editStatus={editStatus}
      messageStatus={messageStatus}
      bubbleSelected={idPendingEdit ? 1:0}
    >
      <form onSubmit={e => submitHandler(e, title, textBody,idPendingEdit)}>
        <input
          type="text"
          value={title}
          onChange={e => setTitle(e.target.value)}
          placeholder="title"
          maxlength="127"
        />
        <input
          type="text"
          className="textBody"
          value={textBody}
          onChange={e => setText(e.target.value)}
          placeholder="message"
          maxlength="499"
        />
        <button />
      </form>
      <div>
        <div className="edit" onClick={toggleEdit}>
          <Edit />
        </div>
        <div className="message" onClick={toggleMessage}>
          <Message />
        </div>
        <div className="delete" onClick={toggleDelete}>
          <Pop />
        </div>
      </div>
    </Bar>
  );
};

export default ToolBar;
