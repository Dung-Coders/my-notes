import React, {useState} from 'react'
import { IoIosArrowBack } from 'react-icons/io'
import { Link, useNavigate } from 'react-router-dom'
import {v4 as uuid} from 'uuid'
import useCreateDate from '../components/useCreateDate'

const CreateNote = ({setNotes}) => {
  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('');
  const [takeNotes, setTakeNotes] = useState('');
  const date = useCreateDate();
  const navigate = useNavigate();

  const handleSubmit = (e) =>{
    e.preventDefault();

    if(title && details && takeNotes){
      const note = {id: uuid(), title, details, date, takeNotes};
      //add this to the notes array in App.jsx
      setNotes(prevNotes => [note, ...prevNotes]);
      //direction
      navigate('/');
    }
  }
  return (
    <section>
      <header className="create-note__header">
        <Link to='/' className='btn'><IoIosArrowBack /></Link>
        <button className="btn lg primary" onClick={handleSubmit}>Save</button>
      </header>
      <form className="create-note__form" onSubmit={handleSubmit}>
        <input type="text" placeholder='Title' autoFocus value={title} onChange={(e)=>setTitle(e.target.value)}/>
        <textarea rows='10' placeholder='Content ....' value={details} onChange={(e)=>setDetails(e.target.value)}></textarea>
        <input type="text" placeholder='Taking notes here...' value={takeNotes} onChange={(e)=>setTakeNotes(e.target.value)}/>
      </form>
    </section>
  )
}

export default CreateNote