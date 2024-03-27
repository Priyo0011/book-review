import { useEffect, useState } from "react";

import {  getWishList } from "../utils";
import Wish from "../pages/Wish";


const Wishlist = () => {
    const [wishBook, setWishBooks]= useState([])
        useEffect(()=>{
            const storedWishBook = getWishList()
            setWishBooks(storedWishBook)
        },[])
    return (
        <div className="mt-8 space-y-6 p-4">
            {
                wishBook.map(wishBook=><Wish key={wishBook.id} books={wishBook}></Wish>)
            }
          </div>
    );
};

export default Wishlist;