import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../store';


export const BookDetails: React.FC = () => {
    const { id } = useParams<{ id: string }>(); 
    const books = useSelector((state: RootState) => state.books.books); 
    const book = books.find((b) => b.cover_i == id); 

    if (!book) {
        return <p>Книга не найдена. </p>;
    }

    return (
        <div>
            <h2>{book.title}</h2>
            <p>Автор: {book.author_name?.join(', ') || 'Неизвестный автор'}</p>
            <p>Год: {book.year}</p>
            <p>Издатель: {book.publisher}</p>
            {book.cover_i && (
                <img
                    src={`https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`}
                    alt={book.title}
                />
            )}
        </div>
    );
};