import { Link, useParams, useNavigate } from 'react-router-dom'
import { IoIosArrowBack } from 'react-icons/io'
import { RiDeleteBin6Fill } from 'react-icons/ri'
import { useState } from 'react';
import useCreateDate from '../components/useCreateDate';

const EditNote = ({notes, setNotes}) => {
  const {id} = useParams();
  const note = notes.find((item)=>item.id === id);
  const [title, setTitle] = useState(note.title);
  const [details, setDetails] = useState(note.details);
  const [takeNotes, setTakeNotes] = useState(note.takeNotes);
  const date = useCreateDate();
  const navigate = useNavigate();

  const handleForm = (e)=>{
    e.preventDefault();

    if(title && details){
      const newNote = {...note, title, details, date, takeNotes};

      const newNotes = notes.map(item => {
        if(item.id === id){
          item = newNote;
        }
        return item;
      })

      setNotes(newNotes);
    }
    //direction
    navigate('/');
  }

  const handleDelete = ()=>{
    if(window.confirm('Are you sure want to delete this?')){
      const newNotes = notes.filter(item => item.id !== id);

      setNotes(newNotes);
      navigate('/');
    }
  }
  return (
    <section>
      <header className="create-note__header">
        <Link to='/' className='btn'><IoIosArrowBack /></Link>
        <button className="btn lg primary" onClick={handleForm}>Save</button>
        <button className="btn danger" onClick={handleDelete}><RiDeleteBin6Fill /></button>
      </header>
      <form className="create-note__form" onSubmit={handleForm}>
        <input type="text" placeholder='Title' autoFocus value={title} onChange={(e)=>setTitle(e.target.value)}/>
        <textarea rows='10' placeholder='Content....' value={details} onChange={(e)=>setDetails(e.target.value)}></textarea>
        <input type="text" placeholder='Taking notes here...' value={takeNotes} onChange={(e)=>setTakeNotes(e.target.value)}/>
      </form>
    </section>
  )
}

export default EditNote