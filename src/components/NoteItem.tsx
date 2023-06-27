"use client"
import React from 'react';

type Note = {
  id: number;
  title: string;
  content: string;
};

type NoteItemProps = {
  note: Note;
  onDelete: (id: number) => void;
};

const NoteItem = ({ note, onDelete }: NoteItemProps) => {
  const handleDelete = () => {
    onDelete(note.id);
  };

  return (
    <div className="bg-blue-800 rounded-lg gap-4 p-4 flex flex-col justify-end items-end">
      <div className="space-y-2">
        <h1 className="text-xl font-bold">{note.title}</h1>
        <p className="text-gray-300">{note.content}</p>
      </div>
      <button className="bg-white hover:bg-gray-300 text-black py-1 px-3 rounded-lg" onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default NoteItem;
