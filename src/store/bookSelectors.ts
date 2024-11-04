import { createSelector } from 'reselect';
import { RootState } from '../store';
import { sortBooks } from '../utils/sortBooks';
import { Book } from '../store/bookSlice';


export const selectBooks = (state: RootState) => state.books.books;
export const selectSortBy = (state: RootState) => state.books.sortBy;


export const selectSortedBooks = createSelector(
  [selectBooks, selectSortBy],
  (books, sortBy): Book[] => sortBooks(books, sortBy)
);