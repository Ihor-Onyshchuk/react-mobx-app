import React from 'react';
import { useNotesStore } from './NotesContext';

export const NewNoteForm = () => {
  const [noteText, setNoteText] = React.useState('');
  const notesStore = useNotesStore();

  return (
    <>
      <input
        type="text"
        value={noteText}
        onChange={(e) => setNoteText(e.target.value)}
      />
      <button
        onClick={() => notesStore.addNote(noteText)}
      >
        Add Note
      </button>
    </>
  );
};