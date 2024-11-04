import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../store';
import { fetchBooks } from '../store/bookSlice';

const BookSearch: React.FC = () => {
  const [query, setQuery] = useState('');
  const dispatch = useDispatch<AppDispatch>(); 

  const handleSearch = () => {
    if (query.trim()) {
      dispatch(fetchBooks(query)); 
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div style={{ marginBottom: '20px' }}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder="Search for books..."
        style={{ padding: '10px', marginRight: '10px' }}
      />
      <button onClick={handleSearch} style={{ padding: '10px' }}>
        Search
      </button>
    </div>
  );
};

export default BookSearch;
