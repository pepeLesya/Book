import { Book } from '../store/bookSlice';

export const sortBooks = (books: Book[], sortBy: 'year' | 'title' | 'author'): Book[] => {
  switch (sortBy) {
    case 'year':
      return [...books].sort((a, b) => a.year - b.year);
    case 'title':
      return [...books].sort((a, b) => a.title.localeCompare(b.title));
    case 'author':
      return [...books].sort((a, b) => {
        const authorA = a.author_name?.[0] || '';
        const authorB = b.author_name?.[0] || '';
        return authorA.localeCompare(authorB);
      });
    default:
      return books;
  }
};