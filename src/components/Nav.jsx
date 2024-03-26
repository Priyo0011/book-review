import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className="h-20 navbar">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <NavLink to="/" className={({isActive})=> isActive? 'text-green-500 font-bold' : 'font-semibold'}>Home</NavLink>
          <NavLink to="/listed-books" className={({isActive})=> isActive? 'text-green-500 font-bold' : 'font-semibold'}>Listed Books</NavLink>
          <NavLink to="/pages-to-read" className={({isActive})=> isActive? 'text-green-500 font-bold' : 'font-semibold'}>Pages to Read</NavLink>
          <NavLink to="/favorite-books" className={({isActive})=> isActive? 'text-green-500 font-bold' : 'font-semibold'}>About</NavLink>
          <NavLink to="/upcoming-books" className={({isActive})=> isActive? 'text-green-500 font-bold' : 'font-semibold'}>Upcoming Books</NavLink>
          </ul>
        </div>
        <a className="text-2xl font-bold">Book Vibe</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 flex items-center gap-8">
          <NavLink to="/" className={({isActive})=> isActive? 'text-green-500 font-semibold border-solid border-2 p-2 rounded-md border-green-400' : 'font-semibold'}>Home</NavLink>
          <NavLink to="/listed-books" className={({isActive})=> isActive? 'text-green-500 font-semibold border-solid border-2 p-2 rounded-md border-green-400' : 'font-semibold'}>Listed Books</NavLink>
          <NavLink to="/pages-to-read" className={({isActive})=> isActive? 'text-green-500 font-semibold border-solid border-2 p-2 rounded-md border-green-400' : 'font-semibold'}>Pages to Read</NavLink>
          <NavLink to="/favorite-books" className={({isActive})=> isActive? 'text-green-500 font-semibold border-solid border-2 p-2 rounded-md border-green-400' : 'font-semibold'}>About</NavLink>
          <NavLink to="/upcoming-books" className={({isActive})=> isActive? 'text-green-500 font-semibold border-solid border-2 p-2 rounded-md border-green-400' : 'font-semibold'}>Upcoming Books</NavLink>
        </ul>
      </div>
      <div className="navbar-end gap-2 md:gap-4">
        <button className="md:p-2 px-4 md:px-6 rounded-md font-semibold bg-green-500 text-white">
          Sign In
        </button>
        <button className="md:p-2 px-4 md:px-6 rounded-md font-semibold bg-blue-400 text-white ">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Nav;
