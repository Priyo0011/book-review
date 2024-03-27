import toast from "react-hot-toast";
export const getWish = () => {
    let wish = [];
    const storedBooks = localStorage.getItem("wish");
    if (storedBooks) {
      wish = JSON.parse(storedBooks);
    }
    return wish;
  };
  export const saveWish = (book) => {
    let wish = getWish();
    const isExist = wish.find((b) => b.id === book.id);
    if (isExist) {
      return toast.error("Already Added WishBook!");
    }
    wish.push(book);
    localStorage.setItem("books", JSON.stringify(wish));
    toast.success("WishBook Added Successfully!");
  };