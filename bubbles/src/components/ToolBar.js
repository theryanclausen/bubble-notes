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
    div{
        z-index:500;
        &:hover{
            cursor:pointer;
        }
    }
    .delete{
        color: ${props =>props.deleteStatus ? 'red':'white'}
    }
  }
  form {
    width: 85vw;
    display: flex;
    input {
      width: 20%;
      box-shadow: 0 0 10px 4px #f3fbfefc;
      background: #ffffffcc;
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

const ToolBar = ({ addNote, deleteStatus, toggleDelete }) => {
  const [title, setTitle] = useState("");
  const [textBody, setText] = useState("");

  const submitHandler = (e, aTitle, text) => {
    e.preventDefault();
    addNote(aTitle, text);
    setTitle("");
    setText("");
  };
  return (
    <Bar deleteStatus={deleteStatus}>
      <form onSubmit={e => submitHandler(e, title, textBody)}>
        <input
          type="text"
          value={title}
          onChange={e => setTitle(e.target.value)}
          placeholder="title"
        />
        <input
          type="text"
          className="textBody"
          value={textBody}
          onChange={e => setText(e.target.value)}
          placeholder="message"
        />
        <button />
      </form>
      <div>
        <div>
          <Edit />
        </div>
        <div>
          <Message />
        </div>
        <div className='delete' onClick={toggleDelete}>
          <Pop />
        </div>
      </div>
    </Bar>
  );
};

export default ToolBar;
