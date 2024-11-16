import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { selectSortedBooks } from '../store/bookSelectors';
import SearchAndSortContainer from './SearchAndSort/SearchAndSortContainer';
import { useNavigate } from 'react-router-dom';

const BookList: React.FC = () => {
  const { status, error } = useSelector((state: RootState) => state.books);
  const sortedBooks = useSelector(selectSortedBooks);
  const navigate = useNavigate();

  if (status === 'loading') {
    return <p>Loading...</p>;
  }

  if (status === 'failed') {
    return <p>Error: {error}</p>;
  }

  // Переход на страницу книги по ID обложки
  const handleNavigate = (bookId: string | number) => {
    navigate(`/book/${bookId}`);
  };

  return (
    <div className="books-container">
    <SearchAndSortContainer />
    <h2 className="books-title">Books:</h2>
    {sortedBooks?.length > 0 ? (
      <ul className="books-list">
        {sortedBooks.map((book) => (
          <li 
            onClick={() => book.cover_i !== undefined && handleNavigate(book.cover_i)} 
            key={book.key} 
            className="book-card"
          >
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
        ))}
      </ul>
    ) : (
      <p className="no-books">No books found.</p>
    )}
  </div>
  );
};

export default BookList;
