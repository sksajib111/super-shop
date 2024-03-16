import {
  FaBagShopping,
  FaEnvelope,
  FaHouse,
  FaListUl,
  FaRegAddressBook,
  FaUsers,
  FaUtensils,
} from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";
// import useCarts from "../hooks/useCarts";

const Dashboard = () => {
  // const [cart] = useCarts();
  
  // TODO: get isAdmin value from the database
  const isAdmin = true;

  return (
    <div className="flex">
      <div className="w-64 min-h-screen bg-[#D1A054]">
        <ul className="menu">
          {isAdmin ? (
            <></>
          ) : (
            <>
              <li>
                <NavLink to="/dashboard/adminHome">
                  <FaHouse></FaHouse> Admin Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/addItems">
                <FaUtensils /> Add Items
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageItems">
                <FaListUl /> Manage Items
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageBookings">
                <FaRegAddressBook /> Manage Bookings
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/allUsers">
                <FaUsers /> All Users
                </NavLink>
              </li>
            </>
          )}
          {/* shared nav links */}
          <div className="divider divider-accent"></div>
          <li>
            <NavLink to="/">
              <FaHouse></FaHouse>Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/order/salad">
              <FaBagShopping />
              Menu
            </NavLink>
          </li>
          <li>
            <NavLink to="/order/contact">
              <FaEnvelope />
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="flex-1 p-8">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
