import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';
import Navbar from './Navbar';
import NoteContainer from './NoteContainer';

function App() {

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.className = darkMode ? 'bg-dark text-white' : 'bg-light text-dark';
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };





  const [note,setNote]=useState(JSON.parse(localStorage.getItem("notesapp"))||[])
  const addNote=()=>{
    const tempNote=[...note];
    tempNote.push({
      id:Date.now() + "" + Math.floor(Math.random()*78),
      text:"",
      time:Date.now()
    })
    setNote(tempNote);

  }

  const deleteNote=(id)=>{
    const tempNotes=[...note]
    const index=tempNotes.findIndex(item=>item.id===id)
    if (index<0)return;

    tempNotes.splice(index,1);
    setNote(tempNotes)
  }

  const updateText=(text,id)=>{
    const tempNotes=[...note]
    const index=tempNotes.findIndex(item=>item.id===id)
    if (index<0)return;
    tempNotes[index].text=text;
    setNote(tempNotes);


  }

  useEffect(()=>{
    localStorage.setItem('notesapp',JSON.stringify(note))
  })

  return (
    <div className="App">
      
      <Navbar addNote={addNote}></Navbar>
      
      <NoteContainer note={note} deleteNote={deleteNote} updateText={updateText}></NoteContainer>
      
      <button 
              type="button" 
              className={`btn btn-${darkMode ? 'light' : 'dark'}`} 
              onClick={toggleDarkMode}
            >
              {darkMode ? 'Light Mode' : 'Dark Mode'}
            </button>

    </div>
  );
}



export default App;