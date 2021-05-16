import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

const NoteCreator = (props) => {
    const [ expand, setExpand ] = useState(false);
    const [ disableAddNote, setDisableAddNote ] = useState(true);
    const [ note, setNote ] = useState({
        title: '',
        description: ''
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        if(value.length>0) {
            setDisableAddNote(false);
        } else {
            setDisableAddNote(true);
        }
        setNote((prevData) => {
            return {
                ...prevData,
                [name]: value
            }
        })
    }

    const addNote = () => {
        props.onAddNote(note);
        setNote({
            title: '',
            description: ''
        })
        setDisableAddNote(true);
    }

    const expandNote = () => {
        setExpand(true);
    }

    const shrinkNote = () => {
        setExpand(false);
    }

    return (
        <>
            <div className='main_note' onDoubleClick={shrinkNote}>
                <form>
                    { expand ? <input type='text' name='title' value={note.title} onChange={handleInputChange} placeholder='Title' autoComplete='off' /> : null }
                    <textarea row='' column='' name='description' value={note.description} onChange={handleInputChange} placeholder='Take a Note...' onClick={expandNote}></textarea>
                    { expand ? <Button variant="contained" onClick={addNote} disabled={disableAddNote}><AddIcon className='plus-sign' /></Button> : null }
                </form>
            </div>
        </>
    )
}

export default NoteCreator;