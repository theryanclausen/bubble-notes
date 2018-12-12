import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import Bubble from './Bubble'
const NotesView = ()=> {
  const [notes, setNotes] = useState([])

  const fetchNotes = async() =>{
    const fetchedNotes = await Axios.get('https://backend-project-week-lambda.herokuapp.com/api/notes')
    setNotes(fetchedNotes.data)
  }

  useEffect(()=>{fetchNotes()})
  
    return (
      <div>
        {notes.map(note => <Bubble pos={note.textBody.length + 'px'} wiggle="100px" wiggleDur={note.id +'s'} duration={2 *note.id +14 +'s'} heading={note.title} text={note.textBody}>
      
    </Bubble>)}

      </div>
    );
  }


export default NotesView;
