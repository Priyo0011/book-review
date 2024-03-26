import { Link } from "react-router-dom";
import { FaRegStar } from "react-icons/fa";

const Card = ({ home }) => {
  const { image, tags, bookName, author, category, rating, id, } = home;
  return (
    <Link
      to={`/book/${id}`}
      className="border-2 rounded-xl p-8 "
    >
      <img
        role="presentation"
        className=" w-auto py-4 px-24 border-2 rounded-xl h-[230px] bg-base-200"
        src={image}
      />
      <div className="p-6 space-y-2">
      <div className='flex flex-wrap py-6 gap-2 border-t border-dashed '>
          {tags &&
            tags.map(tag => (
              <a key={tag}
                className='px-2 py-1 text-green-500 bg-green-50 rounded-full '
              >
                {tag}
              </a>
            ))}
        </div>
        <h3 className="text-2xl font-semibold">
          {bookName}
        </h3>
        <p className="font-semibold">
        By :  {author}
        </p>
      </div>
      <div className="flex justify-between mr-6 ml-6">
        <p>{category}</p>
        <div className="flex gap-2 items-center">
            {rating} <FaRegStar></FaRegStar>
        </div>
      </div>
    </Link>
  );
};

export default Card;
