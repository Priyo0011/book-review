/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import Wish from "../pages/Wish";
import { getWish } from "../utils/wish";


const Wishlist = () => {
    const [wish, setWish]= useState([])
        useEffect(()=>{
            const storedWish = getWish()
            setWish(storedWish)
        },[])
    return (
        <div className="mt-8 space-y-6 p-4">
            {
                wish.map(wish=><Wish key={wish.id} wish={wish}></Wish>)
            }
          </div>
    );
};

export default Wishlist;