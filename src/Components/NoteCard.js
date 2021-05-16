import React from 'react';
import DeleteSweepIcon from '@material-ui/icons/DeleteSweep';

const NoteCard = (props) => {
    const { title, description } = props.note;

    const removeNote = () => {
        props.onRemoveNote(props.id);
    }
    return (
        <>
            <div className='note'> 
                <h1>{title}</h1>
                <p>{description}</p>
                <button className='btn' onClick={removeNote}>
                    <DeleteSweepIcon className='deleteIcon' />
                </button>
            </div>
        </>
    )
}

export default NoteCard;