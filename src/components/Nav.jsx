const Nav = () => {
  return (
    <div className="h-20 navbar fixed z-10">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Home</a></li>
        <li><a>Listed Books</a></li>
        <li><a>Pages to Read</a></li>
        <li><a>Favorite Books</a></li>
        <li><a>Upcoming Books</a></li>
      </ul>
    </div>
    <a className="text-2xl font-bold">Book Vibe</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 font-semibold">
      <li><a>Home</a></li>
      <li><a>Listed Books</a></li>
      <li><a>Pages to Read</a></li>
      <li><a>Favorite Books</a></li>
      <li><a>Upcoming Books</a></li>
    </ul>
  </div>
  <div className="navbar-end gap-2 md:gap-4">
    <button className="md:p-2 px-4 md:px-6 rounded-md font-semibold bg-green-500 text-white">Sign In</button>
    <button className="md:p-2 px-4 md:px-6 rounded-md font-semibold bg-blue-400 text-white ">Sign Up</button>
  </div>
</div>
    
  );
};

export default Nav;
