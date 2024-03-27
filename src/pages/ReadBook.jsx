/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";
import Read from "../components/Read";
import { getBooks } from "../utils";


const ReadBook = () => {
    const [books, setBooks]= useState([])
        useEffect(()=>{
            const storedBooks = getBooks()
            setBooks(storedBooks)
        },[])
    return (
        <div className="mt-8 space-y-6 p-4">
            {
                books.map(books=><Read key={books.id} books={books}></Read>)
            }
          </div>
    );
};

export default ReadBook;