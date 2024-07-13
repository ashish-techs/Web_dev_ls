import React from 'react';
import Notes from './Notes';

function NoteContainer(props) {

  const reverArray=(arr)=>{
    const array=[]

    for (let i=arr.length-1;i>=0;--i){
      array.push(arr[i])
    }
    return array
  }

  const note=reverArray(props.note);

  return (
    <div className="note-container ms-5 mt-3" style={{
      display:'flex',
      flexWrap:'wrap',
      gap:'20px'
    }}>

      {note?.length>0 ? note.map((item)=>( 
      <Notes 
      key={item.id}
      notes={item}
      deleteNote={props.deleteNote} updateText={props.updateText}/>)):<h3 className="mt-5 ms-5">No note at the moment :(</h3>
      }

      


    </div>
  )
}

export default NoteContainer
