import React from 'react';
import { NewNoteForm } from './NewNoteForm';
import { useNotesStore } from './NotesContext';
import { useObserver } from 'mobx-react';
import './index.scss';

function App() {
  const notesStore = useNotesStore();
  return useObserver(() => (
    <>
      <ul>
        {notesStore.notes.map(({ id, text }) => (
          <li
            key={id}
            onClick={() => notesStore.removeNote(id)}
          >
            {text}
          </li>
        ))}
      </ul>
      <NewNoteForm />
    </>
  ));
}

export default App;
