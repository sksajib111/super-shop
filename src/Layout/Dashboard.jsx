import {  FaBagShopping, FaCalendar, FaCartShopping, FaHouse, FaList, FaRankingStar, FaWallet } from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex">
      <div className="w-64 min-h-screen bg-[#D1A054]">
        <ul className="menu">
          <li>
            <NavLink to="/dashboard/userHome">
              <FaHouse></FaHouse> User Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/reservation">
              <FaCalendar></FaCalendar> Reservation
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/paymentHistory">
              <FaWallet></FaWallet> Payment History
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/cart">
              <FaCartShopping></FaCartShopping> My Cart
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/review">
            <FaRankingStar /> Add Review
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/bookings">
              <FaList></FaList> My Booking
            </NavLink>
          </li>
          <div className="divider divider-accent"></div>
          <li>
            <NavLink to="/">
              <FaHouse></FaHouse>Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/order/salad">
              <FaBagShopping />Menu
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
