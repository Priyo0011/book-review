import toast from "react-hot-toast";
export const getBooks = () => {
  let books = [];
  const storedBooks = localStorage.getItem("books");
  if (storedBooks) {
    books = JSON.parse(storedBooks);
  }
  return books;
};
export const saveBook = (book) => {
  let books = getBooks();
  const isExist = books.find((b) => b.id === book.id);
  if (isExist) {
    return toast.error("Already Added Book!");
  }
  books.push(book);
  localStorage.setItem("books", JSON.stringify(books));
  toast.success("Book Added Successfully!");
};
export const getWishList = () => {
  let wishList = [];
  const storedWishList = localStorage.getItem("wishList");
  if (storedWishList) {
    wishList = JSON.parse(storedWishList);
  }
  return wishList;
};
export const saveWish = (wish) => {
  let wishList = getWishList();
  const isExist = wishList.find((w) => w.id === wish.id);
  if (isExist) {
    return toast.error("Already Added Wish Book!");
  }
  wishList.push(wish);
  localStorage.setItem("wishList", JSON.stringify(wishList));
  toast.success("Wish Book Added Successfully!");
};
