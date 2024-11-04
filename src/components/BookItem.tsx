import React from 'react';
import { Book } from '../store/bookSlice';

interface BookItemProps {
  book: Book;
}

const BookItem: React.FC<BookItemProps> = ({ book }) => {
  
  return (
    <li key={book.key} className="book-card">
      <h3 className="book-title">{book.title}</h3>
      <p className="book-author">{book.author_name?.join(', ') || 'Unknown Author'}</p>
      {book.cover_i && (
        <img
          src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
          alt={book.title}
          className="book-image"
        />
      )}
    </li>
  );
};

export default BookItem;