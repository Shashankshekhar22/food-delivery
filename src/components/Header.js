import image from "../../assets/images/food-delivery.jpg";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();
  return (
    <div className="flex justify-between shadow-xl">
      <div>
        <img src={image} alt="food-delivery" className="h-24 w-24"></img>
      </div>
      <div className="nav-items">
        <ul className="flex p-4 m-4 space-x-4 font-bold  ">
          <li>{onlineStatus ? "✅" : "🔴"}</li>
          <li className="hover:text-blue-500">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-blue-500">
            <Link to="/about">About Us</Link>{" "}
          </li>
          <li className="hover:text-blue-500">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="hover:text-blue-500">
            <Link to="/cart">Cart</Link>
          </li>
          <li className="hover:text-blue-500">
            <Link to="/grocery">Grocery</Link>
          </li>
          <button
            className="hover:text-blue-500"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
