import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Note from './Note';
import note from '../notes';

function createNote(entry) {
  return (
    <Note
      key={entry.id}
      title={entry.title}
      content={entry.content}
    />
  );
}

function App() {
  return (
    <div>
      <Header />
      {note.map(createNote)}
      <Footer />
    </div>
  );
}

export default App;
