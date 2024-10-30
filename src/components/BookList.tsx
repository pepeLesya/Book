import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

const BookList: React.FC = () => {
  const { books, status, error } = useSelector((state: RootState) => state.books);

  if (status === 'loading') {
    return <p>Loading...</p>;
  }

  if (status === 'failed') {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <h2>Books:</h2>
      {books.length > 0 ? (
        <ul>
          {books.map((book) => (
            <li key={book.key} style={{ marginBottom: '10px' }}>
              <h3>{book.title}</h3>
              <p>{book.author_name?.join(', ') || 'Unknown Author'}</p>
              {book.cover_i && (
                <img
                  src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
                  alt={book.title}
                  style={{ width: '100px', height: '150px' }}
                />
              )}
            </li>
          ))}
        </ul>
      ) : (
        <p>No books found.</p>
      )}
    </div>
  );
};

export default BookList;