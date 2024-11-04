import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSortBy } from '../store/bookSlice';
import { RootState } from '../store';
import '../UI/SortSelect.css'

const SortSelect: React.FC = () => {
    const dispatch = useDispatch();
    const sortBy = useSelector((state: RootState) => state.books.sortBy);
  
    const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      dispatch(setSortBy(e.target.value as 'year' | 'title' | 'author'));
    };
  
    return (
        <div className="sort-select-container">
      <label htmlFor="sort-select" className="sort-label">Sort by:</label>
      <select
        id="sort-select"
        value={sortBy}
        onChange={handleSortChange}
        className="sort-select"
      >
        <option value="year">Year</option>
        <option value="title">Title</option>
        <option value="author">Author</option>
      </select>
    </div>
    );
  };
  
  export default SortSelect;