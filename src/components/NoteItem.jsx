import React from 'react'
import { Link } from 'react-router-dom'

const NoteItem = ({ note }) => {
  return (
    <div className="note">
      <Link to={`/view-note/${note.id}`}>
        <button
          style={{
            padding: "5px",
            border: "none",
            borderRadius: "4px",
            color: "blue",
            backgroundColor: "gray",
          }}
        >
          Append{" "}
        </button>
      </Link>
      <Link to={`/edit-note/${note.id}`} style={{color:'white'}}>
        <h4>
          {note.title.length > 80
            ? note.title.substr(0, 80) + "..."
            : note.title}
        </h4>
        <p>{note.date}</p>
        <p>{note.takeNotes}</p>
      </Link>
    </div>
  );
}

export default NoteItem