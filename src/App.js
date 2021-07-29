
import React, { useState } from "react";
import "./index.css";

import Header from "./component/Header";
import Area from "./component/Area";
import Note from "./component/Note";
import Counter from "./component/Counter";
import Footer from "./component/Footer";

function App(props)
{

  const [notes,setNotes]=useState([]);

  function addNote(newNote)
  {
    setNotes((prev)=>
    {
       return [...prev,newNote];
    });
  }

  function deleteNotes(id)
  {
    setNotes((prev)=>
    {
      return[...prev.filter((note,index)=>index!==id)];
    })
  }

  return(
    <>
    <Header/>
    
    <Counter
      count={notes.length===0?"Empty":`${notes.length} Notes added`}
    />
    
    <Area onAdd={addNote}/>
    
    {
      notes.map((note,index)=>
      (
        <Note
        key={index}
        id={index}
        title={note.title}
        content={note.content}
        onDelete={deleteNotes}
        />
        
      ))
    }
    {
      console.log(notes)
    }

    <Footer/>
    </>
  );
};

export default App;