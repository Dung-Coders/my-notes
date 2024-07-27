import { Link, useParams } from 'react-router-dom'
import { IoIosArrowBack } from 'react-icons/io'

const ViewNote = ({notes}) => {
  const {id} = useParams();
  const note = notes.find((item)=>item.id === id);
  
  return (
    <div style={{display:'flex', flexDirection:'column', width:'auto', height:'auto'}}>
      <Link to="/" className="btn" style={{display:'flex', alignItems:'center'}}>
        <IoIosArrowBack /> <span style={{marginLeft:'25px'}}>Back home</span>
      </Link>
      <div className="view__content">
        <h1>{note.title}</h1>
        <br />
        <p>{note.details}</p>
        <br />
        <p>{note.takeNotes}</p>
      </div>
    </div>
  );
}

export default ViewNote;