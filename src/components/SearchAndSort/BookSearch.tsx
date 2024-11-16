import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store';
import { fetchBooks } from '../../store/bookSlice';
import { TextField,Button} from '@mui/material';

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
    <div style={{ marginBottom: '20px',display: 'flex', alignItems: 'center'  }}>
      <TextField 
        label="Search for books..."
        variant="outlined"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyPress={handleKeyPress}
        style={{ marginRight: '20px', width: '200px' }}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleSearch}
        style={{ padding: '10px 20px' }}
      >
        Search
      </Button>
    </div>
  );
};

export default BookSearch;
