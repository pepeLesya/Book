import React from 'react';
import  '../src/App.css'
import BookList from './components/BookList';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { BookDetails } from './components/BookDetails';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BookList />} />
        <Route path="/book/:id" element={<BookDetails />} /> 
      </Routes>
    </Router>
  );
};

export default App;