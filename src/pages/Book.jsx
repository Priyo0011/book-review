import { useLoaderData, useParams } from "react-router-dom";
import { saveBook, saveWish } from "../utils";



const Book = () => {
  const books = useLoaderData();
  const { id } = useParams();
  const book = books.find((book) => book.id === id);
  const wish = books.find((wish) => wish.id === id);
  const {
    image,
    tags,
    bookName,
    author,
    category,
    rating,
    review,
    yearOfPublishing,
    totalPages,
    publisher,
  } = book;
  const handleApplyRead = book =>{
    saveBook(book)
  }
  
  const handleApplyWish = wish =>{
    saveWish(wish)
  }
  
  
  return (
    <div className="mt-16 md:flex gap-8">
      <div className=" m-auto w-full p-24 max-w-sm  bg-base-200 rounded-2xl">
        <img src={image} alt="" />
      </div>
      <div className="space-x-2 space-y-2 md:space-y-4">
        <h1 className="text-3xl font-bold">{bookName}</h1>
        <p>
          <span className="font-bold mr-2">By:</span> {author}
        </p>
        <hr />
        <p>{category}</p>
        <hr />
        <p>
          <span className="font-bold mr-2">Review:</span> {review}
        </p>
        <div className="flex flex-wrap py-6 gap-2 border-dashed ">
          {tags &&
            tags.map((tag) => (
              <a
                key={tag}
                className="px-2 py-1 text-green-500 bg-green-50 rounded-full "
              >
                #{tag}
              </a>
            ))}
        </div>
        <hr />
        <div>
          <div className="flex gap-24">
            <p>Number of Pages :</p>
            <p className="font-semibold">{totalPages}</p>
          </div>
          <div className="flex gap-[165px]">
            <p>Publisher:</p>
            <p className="font-semibold">{publisher}</p>
          </div>
          <div className="flex gap-24">
            <p>Year of Publishing:</p>
            <p className="font-semibold">{yearOfPublishing}</p>
          </div>
          <div className="flex gap-[184px]">
            <p>Rating:</p>
            <p className="font-semibold">{rating}</p>
          </div>
        </div>
        <div className="flex gap-8">
          <button onClick={()=>handleApplyRead(book)} className="md:p-2 px-4 md:px-6 rounded-md font-semibold bg-green-500 text-white">
          Read
          </button>
          <button onClick={()=>handleApplyWish(wish)}  className="md:p-2 px-4 md:px-6 rounded-md font-semibold bg-blue-400 text-white ">
          Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default Book;
