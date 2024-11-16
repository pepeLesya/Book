import React from 'react';
import SortSelect from './SortSelect';
import BookSearch from './BookSearch';
import './SortSelect.css'
import MenuAdd from '../AddBook/MenuAdd';



const SearchAndSortContainer: React.FC = () => {
    return (
      <div className="search-and-sort-container">
      <div className="book-search">
        <BookSearch />
      </div>
      <div className="sort-select">
        <SortSelect />
      </div>
      <div>
        <MenuAdd/>
      </div>
    </div>
    );
  };
  
  export default SearchAndSortContainer;