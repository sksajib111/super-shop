import { Link } from "react-router-dom";

const NavBar = () => {
  const navOptions = (
    <>
      <li>
        <Link to="/menu">Our Menu</Link> 
      </li>
      <li>
      <Link to="/">Home</Link>
      </li>
    </>
  );

  return (
    <div className="navbar fixed z-10 rounded-xl bg-opacity-40 bg-gradient-to-r from-cyan-200 max-w-screen-xl text-black">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-success text-white lg:hidden">
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
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navOptions}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-white normal-case text-xl font-bold">
          SUPER-SHOP
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navOptions}</ul>
      </div>
      <div className="navbar-end">
        <a className="btn bg-success border-none text-white">Button</a>
      </div>
    </div>
  );
};

export default NavBar;
