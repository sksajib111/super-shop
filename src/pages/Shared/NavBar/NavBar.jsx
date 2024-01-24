import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProviders";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  const navOptions = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/menu">Our Menu</Link>
      </li>
      <li>
        <Link to="/order/salad">Order Food</Link>
      </li>

      {user ? 
        <>
          <button onClick={handleLogOut} className="btn btn-ghost">
            Logout
          </button>
        </>
       : 
        <>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </>
      }
    </>
  );

  return (
    <div className="navbar fixed z-10 rounded-lg bg-black bg-opacity-50 uppercase max-w-screen-xl text-white">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-success lg:hidden">
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
                strokeWidth="5"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow text-black bg-base-200 rounded-box w-52"
          >
            {navOptions}
          </ul>
        </div>
        <Link
          to="/"
          className="btn btn-ghost text-white normal-case text-xl font-bold"
        >
          SUPER-SHOP
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex ">
        <ul className="menu menu-horizontal px-1">{navOptions}</ul>
      </div>
      {/* <div className="navbar-end">
        <a className="btn bg-success border-none text-white">Log In</a>
      </div> */}
    </div>
  );
};

export default NavBar;
