import { CiSearch } from "react-icons/ci"
import { Link } from "react-router-dom"
import { BsPlusLg } from "react-icons/bs"
import NoteItem from "../components/NoteItem"
import { useState, useEffect } from "react"
import { MdClose } from "react-icons/md"

const Notes = ({notes}) => {
  const [showSearch, setShowSearch] = useState(false);
  const [text, setText] = useState('');
  const [filteredNotes, setFilteredNotes] = useState(notes);

  const handleSearch = ()=>{
    setFilteredNotes(notes.filter(note => {
      try {
        if(note.title.toLowerCase().match(text.toLocaleLowerCase())){
          return note;
        }
      } catch (error) {
        console.log(error);
      }
    }))
  }

  useEffect(handleSearch, [text, notes]);
  return (
    <section>
        <header className="notes__header">
            {!showSearch &&<h1>My Notes</h1>}
            {showSearch && <input type="text" autoFocus placeholder="Keyword..." value={text} onChange={(e)=> {setText(e.target.value); handleSearch();}}/>}
            <button className="btn" onClick={()=>setShowSearch(prevState => !prevState)}>{showSearch ? <MdClose/> :<CiSearch/>}</button>
        </header>
        <div className="notes__container">
          {filteredNotes.length === 0 && <p className="empty__notes">Note Not Found.</p>}
          {
            filteredNotes.map(note => <NoteItem key={note.id} note={note} />)
          }
        </div>
        <Link to='/create-note' className="btn add__btn"><BsPlusLg/></Link>
    </section>
  )
}

export default Notes;