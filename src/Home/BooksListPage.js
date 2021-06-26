import React from 'react';
import { BooksList } from './BooksList';
import { BooksListItem } from './BooksListItem';
import { useBooks } from './useBooks';

export const BooksListPage = () => {
    const { isLoading, books: allBooks} = useBooks();
    
    console.log(allBooks);

    return (
            <BooksList 
                isLoading={isLoading}
                books={allBooks}
                ListItemComponent={BooksListItem}/>
    )
}