import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Note from './Note';
import note from '../notes';

function App() {
  return (
    <div>
      <Header />
      {note.map((entry) => (
        <Note
          key={entry.id}
          title={entry.title}
          content={entry.content}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
