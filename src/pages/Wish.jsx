/* eslint-disable react/prop-types */
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { FaRegFile } from "react-icons/fa";

const Wish = ({ wish }) => {
  const { image, tags, bookName, author, category, rating, yearOfPublishing, publisher ,totalPages} =
    wish;
  return (
    <div className="flex border-2 rounded-xl p-8 ">
      <img
        role="presentation"
        className=" w-auto py-4 px-24 border-2 rounded-xl h-[230px] bg-base-200"
        src={image}
      />
      <div className="space-y-4 mt-4">
        <div className="px-6">
          <h3 className="text-2xl font-semibold">{bookName}</h3>
          <p className="font-semibold">By : {author}</p>
        </div>
        <div className="flex px-4 gap-8 ">
          <div>
            <span className="font-bold px-2">Tag</span>{" "}
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
          <div className="flex items-center gap-1">
           <IoLocationOutline></IoLocationOutline> Year Of Publishing: {yearOfPublishing}
          </div>
        </div>
        <div className="flex px-6 gap-8">
            <div className="flex items-center gap-2">
               <MdOutlinePeopleAlt></MdOutlinePeopleAlt> Publisher: {publisher}
            </div>
            <div className="flex items-center gap-2">
                <FaRegFile></FaRegFile>Page {totalPages}
            </div>
        </div>
        <div className="flex mr-6 ml-6 gap-8">
          <div>
            <p className="bg-blue-300 text-white py-1 px-4 rounded-full font-light text-sm">Category : {category}</p>
            </div>
          <div className="flex gap-2 items-center">
            <p className="bg-orange-300 text-white py-1 px-4 rounded-full font-light text-sm">Rating : {rating}</p> 
          </div>
          <div>
            <button className="bg-green-400 text-white py-1 px-4 rounded-full font-light text-sm">View Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wish;