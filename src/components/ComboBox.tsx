import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { RootState } from '../store/index';
import { useSelector } from 'react-redux';
import { Book } from '../store/bookSlice';


const ComboBox: React.FC = () => {

    const books = useSelector((state: RootState) => state.books.books);

    const [selectedBook, setSelectedBook] = React.useState<Book | null>(null);

    return (
        <Autocomplete
            disablePortal
            options={books.filter((book) => book.publisher)} //выводит книги после поиска только те,у кого паблиш поле есть
            getOptionLabel={(option) => option.title}  
            isOptionEqualToValue={(option, value) => option.id === value.id}
            value={selectedBook}
            onChange={(event, newValue) => setSelectedBook(newValue)}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Select a Book" />}
        />
    );
};

export default ComboBox;