// MenuAdd.tsx
import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import { AddBookDialog } from './AddBookDialog';
import { Book } from '../../store/bookSlice'; // Проверьте путь импорта

const MenuAdd: React.FC = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const openMenu = Boolean(anchorEl);

  const [openDialog, setOpenDialog] = React.useState(false);

  // Открытие и закрытие меню
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  // Открытие диалога
  const handleDialogOpen = () => {
    setOpenDialog(true);
    handleClose();
  };

  // Закрытие диалога
  const handleDialogClose = () => {
    setOpenDialog(false);
  };

  // Функция для добавления книги
  const handleAddBook = (newBook: Book) => {
    console.log('Added book:', newBook);
    // Здесь можно добавить логику для обработки добавленной книги, например, отправка в Redux
    // Пример добавления в Redux:
    // dispatch(addBook(newBook));
  };

  return (
    <div>
      <Button
        id="fade-button"
        aria-controls={openMenu ? 'fade-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={openMenu ? 'true' : undefined}
        onClick={handleClick}
      >
        Menu
      </Button>
      <Menu
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorEl={anchorEl}
        open={openMenu}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem onClick={handleDialogOpen}>Add Book</MenuItem>
      </Menu>

      {/* Диалоговое окно для добавления книги */}
      <AddBookDialog 
        open={openDialog} 
        onClose={handleDialogClose} 
        onAddBook={handleAddBook} 
      />
    </div>
  );
};

export default MenuAdd;
