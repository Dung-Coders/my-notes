import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateNote from "./pages/CreateNote";
import EditNote from "./pages/EditNote";
import Notes from "./pages/Notes";
import ViewNote from "./components/ViewNote";
// import dummyNotes from './dummy_notes'

const App = () => {
  const [notes, setNotes] = useState(JSON.parse(localStorage.getItem("notes")) || []);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);
  return (
    <main id="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Notes notes={notes} />} />
          <Route
            path="/create-note"
            element={<CreateNote setNotes={setNotes} />}
          />
          <Route
            path="/edit-note/:id"
            element={<EditNote notes={notes} setNotes={setNotes} />}
          />
          <Route path='/view-note/:id' element={<ViewNote notes={notes}/>} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
