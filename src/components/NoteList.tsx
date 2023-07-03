import React from 'react';
import NoteItem from './NoteItem';

type Note = {
  id: number;
  title: string;
  content: string;
};

type NoteListProps = {
  notes: Note[];
  onDelete: (id: number) => void;
};

const NoteList= ({ notes, onDelete }: NoteListProps) => {
  return (
    <div className="lg:grid grid-cols-3 gap-5 space-y-5 lg:space-y-0">
      {notes.map((note) => (
        <NoteItem key={note.id} note={note} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default NoteList;