import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios'; // Импортируем AxiosError для типизации

interface Book {
  key: string;
  title: string;
  author_name?: string[];
  subject?: string[];
  cover_i?: number;
}

interface BooksState {
  books: Book[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: BooksState = {
  books: [],
  status: 'idle',
  error: null,
};

// Асинхронный Thunk с axios и типизированной ошибкой
export const fetchBooks = createAsyncThunk(
  'books/fetchBooks',
  async (query: string, { rejectWithValue }) => {
    try {
      const response = await axios.get(`https://openlibrary.org/search.json?q=${query}`);
      return response.data.docs; // Вернем массив книг
    } catch (err) {
      const error = err as AxiosError; // Преобразуем ошибку в AxiosError

      // Обрабатываем ошибку, если есть ответ от сервера
      if (error.response) {
        return rejectWithValue(error.response.data);
      }

      // Иначе бросаем общую ошибку
      throw new Error(error.message || 'Error fetching books');
    }
  }
);

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
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

export default booksSlice.reducer;
