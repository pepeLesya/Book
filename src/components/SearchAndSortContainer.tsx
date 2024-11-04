import React from 'react';
import SortSelect from './SortSelect';
import BookSearch from './BookSearch';
import '../UI/SortSelect.css'
import ComboBox from './ComboBox';

const SearchAndSortContainer: React.FC = () => {
    return (
      <div className="search-and-sort-container">
        <BookSearch/>
        <SortSelect />
        <ComboBox/>
      </div>
    );
  };
  
  export default SearchAndSortContainer;