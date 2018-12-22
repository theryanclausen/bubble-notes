import React from "react";
import {addReducer, setGlobal} from 'reactn'
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

const initialState = {status:null, id:null, testTitle:'this is a test', testTextBody:'test test test test'}
setGlobal({...initialState})

// const [bubbleControl, dispatch] = useReducer((state,action) =>{
//   switch (action.type){
//     case state.status:
//       return initialState;
//     case 'new message':
//       return {status:'new message', id:null}
//     case 'delete':
//       return 
//     case 'edit':
//       return {status:'edit', id: null}
//     case 'edit select':
//       return {status:'edit', id: action.id}
//     case 'sent':
//       return initialState
//     default:
//       return state;
//   }
// }

addReducer('newNote', state => state.status === 'new note' ? initialState: {status:'new note', id:null })
addReducer('delete', state => state.status === 'delete' ? initialState : {status:'delete' , id: null})
addReducer('edit', state => state.status === 'edit' ? initialState : {status:'edit' , id: null})

ReactDOM.render(
  
    <App />,
  
  document.getElementById("root")
);
