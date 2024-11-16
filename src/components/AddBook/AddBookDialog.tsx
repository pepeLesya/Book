// AddBookDialog.tsx
import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Book } from '../../store/bookSlice';

interface AddBookDialogProps {
  open: boolean;
  onClose: () => void;
  onAddBook: (book: Book) => void; // обязательный пропс
}

export const AddBookDialog: React.FC<AddBookDialogProps> = ({ open, onClose, onAddBook }) => {
  const [bookTitle, setBookTitle] = React.useState<string>('');
  const [bookAuthor, setBookAuthor] = React.useState<string>('');
  const [bookDescription, setBookDescription] = React.useState<string>('');

  // Функция для добавления книги
  const handleAddBook = () => {
    const newBook: Book = {
      id: Date.now(),
      key: `book-${Date.now()}`,
      title: bookTitle,
      author: bookAuthor,
      year: new Date().getFullYear(),
      publisher: 'Unknown Publisher',
      description: bookDescription,
    };

    onAddBook(newBook);
    // Очищаем поля после добавления
    setBookTitle('');
    setBookAuthor('');
    setBookDescription('');
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Add a New Book</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Please fill out the following fields to add a new book.
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="title"
          label="Book Title"
          type="text"
          fullWidth
          variant="outlined"
          value={bookTitle}
          onChange={(e) => setBookTitle(e.target.value)}
        />
        <TextField
          margin="dense"
          id="author"
          label="Author"
          type="text"
          fullWidth
          variant="outlined"
          value={bookAuthor}
          onChange={(e) => setBookAuthor(e.target.value)}
        />
        <TextField
          margin="dense"
          id="description"
          label="Description"
          type="text"
          fullWidth
          variant="outlined"
          multiline
          rows={4}
          value={bookDescription}
          onChange={(e) => setBookDescription(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleAddBook} variant="contained" color="primary">
          Add Book
        </Button>
      </DialogActions>
    </Dialog>
  );
};
