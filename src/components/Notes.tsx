"use client"
import { useState } from 'react';
import NoteList from '../components/NoteList';
import NoteForm from '../components/NoteForm';
import { initialNotes } from './Data';


const Notes = () => {
  const [notes, setNotes] = useState(initialNotes);

  const handleNoteCreate = (title: string, content: string) => {
    const newNote = { id: notes.length + 1, title, content };
    setNotes([...notes, newNote]);
  };

  const handleNoteDelete = (id: number) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
  };

  return (
    <>
      <div className="flex items-center justify-center flex-col gap-10">
        <h1 className="text-2xl">Create a New Note</h1>
        <NoteForm onCreate={handleNoteCreate} />
      </div>
      <div className="w-full mt-10 ">
        {notes ? (
          <NoteList notes={notes} onDelete={handleNoteDelete} />
        ): (
          <p className="text-2xl text-white">No notes found</p>
        )}
      </div>
    </>
  );
};

export default Notes;
