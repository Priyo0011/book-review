
const UpcomingBooks = () => {
  return (
    <div className="grid grid-cols-1 gap-16 md:grid-cols-3 mt-8">
      <div className="border-2 rounded-xl p-8 ">
        <img
          role="presentation"
          className=" w-auto py-4 px-24 border-2 rounded-xl h-[230px] bg-base-200"
          src="/src/assets/images/book7.jpg"
        />
        <div className=" space-y-2">
          <h3 className="text-2xl font-semibold">Suzanne Collins</h3>
          <p className="font-semibold">By : Suzanne Collins</p>
        </div>
        <p>Category:  Young Adult</p>
      </div>
      <div className="border-2 rounded-xl p-8 ">
        <img
          role="presentation"
          className=" w-auto py-4 px-24 border-2 rounded-xl h-[230px] bg-base-200"
          src="/src/assets/images/book8.jpg"
        />
        <div className=" space-y-2">
          <h3 className="text-2xl font-semibold">The Da Vinci Code</h3>
          <p className="font-semibold">By : Dan Brown</p>
        </div>
        <p>Category:  Mystery</p>
      </div>
      <div className="border-2 rounded-xl p-8 ">
        <img
          role="presentation"
          className=" w-auto py-4 px-24 border-2 rounded-xl h-[230px] bg-base-200"
          src="/src/assets/images/book9.jpg"
        />
        <div className=" space-y-2">
          <h3 className="text-2xl font-semibold">Harry Potter and the Sorcerer Stone</h3>
          <p className="font-semibold">By : J.K. Rowling</p>
        </div>
        <p>Category: Fantasy</p>
      </div>
    </div>
  );
};

export default UpcomingBooks;
