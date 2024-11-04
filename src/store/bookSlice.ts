import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios'; 

export interface Book {
  id: number;
  key: string;
  title: string;
  year: number;
  publisher: string;
  author_name?: string[];
  subject?: string[];
  cover_i?: number;
}

export interface BooksState {
  books: Book[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
  sortBy: 'year' | 'title' | 'author';
}

const initialState: BooksState = {
  books: [],
  status: 'idle',
  error: null,
  sortBy: 'year',
};


export const fetchBooks = createAsyncThunk(
  'books/fetchBooks',
  async (query: string, { rejectWithValue }) => {
    try {
      const response = await axios.get(`https://openlibrary.org/search.json?q=${query}`);
      return response.data.docs;
    } catch (err) {
      const error = err as AxiosError;

      if (error.response) {
        return rejectWithValue(error.response.data);
      }

      throw new Error(error.message || 'Error fetching books');
    }
  }
);

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    setSortBy(state, action: PayloadAction<'year' | 'title' | 'author'>) {
      state.sortBy = action.payload; 
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchBooks.fulfilled, (state, action: PayloadAction<Book[]>) => {
        state.status = 'succeeded';
        state.books = action.payload;
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload as string || 'Something went wrong';
      });
  },
});

export const { setSortBy } = booksSlice.actions;

export default booksSlice.reducer;
