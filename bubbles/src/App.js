import React, { useEffect, useState } from 'react';
import Axios from 'axios';

const App = ()=> {
  const [notes, setNotes] = useState([])

  const fetchNotes = async() =>{
    const fetchedNotes = await Axios.get('https://backend-project-week-lambda.herokuapp.com/api/notes')
    setNotes(fetchedNotes.data)
  }

  useEffect(()=>{fetchNotes()})
  
    return (
      <div>
        {notes.map(note => <h1 key={note.id}>{note.title}</h1>)}

      </div>
    );
  }


export default App;
