import React, { useRef , useEffect} from "react";
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
      color: ${props => (props.bubbleControl.status === 'delete' ? "red" : "white")};
    }
    .edit {
      color: ${props => (props.bubbleControl.status === 'edit' ? "lightGreen" : "white")};
    }
    .message {
      color: ${props => (props.bubbleControl.status === 'new message' ? "yellow" : "white")};
    }
  }
  form {
    z-index: 200;
    width: 85vw;
    display: ${props =>
      (props.bubbleControl.status === 'edit'&& props.bubbleControl.id) || props.bubbleControl.status === 'new message' ? "flex" : "none"};
    input {
      width: 20%;
      box-shadow: 0 0 10px 4px #f3fbfefc;
      background: #ffffff;
      margin: 0 15px;
      padding: 4px 12px;
      border-radius: 12px;
      border-style: none;
      color: #1a6670;
      font-family: 'Josefin Sans', sans-serif;
      font-weight:bold;
      outline: none;
      font-size:17px;
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
  notes,
  editNote,
  bubbleControl,
  dispatch
}) => {
  const titleRef = useRef("");
  const textBodyRef = useRef("");
  

  useEffect(() =>{
    if(bubbleControl.status === 'edit' && bubbleControl.id){
      let note = notes.find(note => note.id === parseInt(bubbleControl.id))
      titleRef.current.value =note.title
      textBodyRef.current.value = note.textBody
    }
    else{
      titleRef.current.value =''
      textBodyRef.current.value = ''
    }

  })

  const submitHandler = (e, aTitle, text, editID = false) => {
    e.preventDefault();
    if(!text && !aTitle){
      return;
    }
    if(bubbleControl.status === 'edit' && bubbleControl.id){
        editNote(aTitle,text,editID)
    }
    else{
      if(!text || !aTitle){
        return
      }
      addNote(aTitle, text);  
    }
    titleRef.current.value =''
      textBodyRef.current.value =''
  };
  return (
    <Bar
      bubbleControl={bubbleControl}
    >
      <form onSubmit={e => submitHandler(e, titleRef.current.value, textBodyRef.current.value,bubbleControl.id)}>
        <input
          type="text"
          ref = {titleRef}
          placeholder="title"
          maxLength="50"
        />
        <input
          type="text"
          className="textBody"
          ref= {textBodyRef}
          placeholder="message"
          maxLength="199"
        />
        <button />
      </form>
      <div>
        <div className="edit" onClick={() => dispatch({type:'edit'})}>
          <Edit />
        </div>
        <div className="message" onClick={() => dispatch({type:'new message'})}>
          <Message />
        </div>
        <div className="delete" onClick={() => dispatch({type:'delete'})}>
          <Pop />
        </div>
      </div>
    </Bar>
  );
};

export default ToolBar;
