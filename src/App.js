import React, { useState } from 'react';
import Header from './Components/Header';
import NoteCreator from './Components/NoteCreator';
import NoteCard from './Components/NoteCard';
import Footer from './Components/Footer';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [ noteArr, setNoteArr ] = useState([]);

  const handleAddNote = (note) => {
    setNoteArr((prevArr)=> {
      return [
        ...prevArr,
        note
      ]
    })
  }

  const handleRemoveNote = (id) => {
    setNoteArr(()=> {
      return noteArr.filter((note, index) => {
        return id !== index
      })
    })
  }

  return (
    <>
      <Header />
      <NoteCreator onAddNote={handleAddNote}/>
      {noteArr.map((note, index) => 
        { 
          return (
            <NoteCard 
             key={index} 
             id={index}
             note={note} 
             onRemoveNote={handleRemoveNote}
            />
          )
          
        }
      )}
      <Footer />
    </>
  )
}

export default App;
