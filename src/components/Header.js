import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);

  const cartItems = useSelector((state) => state.cart.items);

  return (
    <div className="flex justify-between bg-gray-50 shadow-lg font-bold text-gray-500">
      <div className="logo-container">
        <img className="w-30" src={LOGO_URL}></img>
      </div>
      <div className="p-2">
        <ul className="flex ">
          <li className="p-4">
            Online Status : {onlineStatus ? "Online" : "Offline"}
          </li>
          <li className="p-4 hover:font-medium">
            <Link to="/">Home</Link>
          </li>
          <li className="p-4 hover:font-medium">
            <Link to="/about">About Us</Link>
          </li>
          <li className="p-4 hover:font-medium">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="p-4 hover:font-medium">
            <Link to="/cart">Cart{"(" + cartItems.length + ")"}</Link>
          </li>
          <li className="p-4 hover:font-medium">
            <button
              className="flex pl-1 pr-1 rounded-md"
              onClick={() => {
                btnName == "Login" ? setBtnName("Logout") : setBtnName("Login");
              }}
            >
              {btnName}
            </button>
          </li>
          <li className="p-4">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
