import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSortBy } from '../../store/bookSlice';
import { RootState } from '../../store';
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
//import './SortSelect.css'


const SortSelect: React.FC = () => {
  const dispatch = useDispatch();
  const sortBy = useSelector((state: RootState) => state.books.sortBy);


  const handleSortChange = (e: SelectChangeEvent<'year' | 'title' | 'author'>) => {
      dispatch(setSortBy(e.target.value as 'year' | 'title' | 'author'));
  };

  return (
      <FormControl fullWidth variant="outlined" className="sort-select-container">
          <InputLabel id="sort-select-label" className='sort_input' >Sort by</InputLabel>
          <Select
              labelId="sort-select-label"
              id="sort-select"
              value={sortBy}
              onChange={handleSortChange}
              label="Sort by"
          >
              <MenuItem value="year">Year</MenuItem>
              <MenuItem value="title">Title</MenuItem>
              <MenuItem value="author">Author</MenuItem>
          </Select>
      </FormControl>
  );
};

export default SortSelect;