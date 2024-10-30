import React from 'react';
import BookSearch from './components/BookSearch';
import BookList from './components/BookList';

const App: React.FC = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Book Search App</h1>
      <BookSearch />
      <BookList />
    </div>
  );
};

export default App;