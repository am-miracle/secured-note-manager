"use client"
import React, { useState } from 'react';

type NoteFormProps = {
  onCreate: (title: string, content: string) => void;
};

const NoteForm = ({ onCreate }: NoteFormProps) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onCreate(title, content);
    setTitle('');
    setContent('');
  };

  return (
    <div className="w-full max-w-[500px] p-3 pb-8 bg-white rounded-md relative">
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="shadow-sm px-4 py-2 text-black"
          placeholder="Title"
          required
        />
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Enter note"
          className="shadow-sm p-4 text-black"
          required
        />
        { title && content && (
          <button type="submit"
            className="absolute -bottom-4 right-4 bg-blue-800 rounded-full border-dashed h-8 w-8 text-2xl flex items-center justify-center">
            <span>+</span>
          </button>
        )}
      </form>
    </div>
  );
};

export default NoteForm;
