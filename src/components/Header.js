import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import LOGO from "../Assets/Sideways.jpg"



const Header = () => {
    return (
        <div className="flex justify-normal bg-white mb-2 ">
        <div className="logo-container mt-8 px-8">
          <img className="w-32" src={LOGO} alt="image here" />
        </div>

        <div className="flex items-center justify-between">
          <ul className="flex p-4 m-4 ">
            {/* <li className="px-4">Online Status: {onlineStatus ? "online" : "offline"}</li> */}
            <li className="px-4 font-semibold" >
              <Link to="/"> Home </Link>
            </li>
            <li className="px-4 font-semibold" >
              <Link to="/company-info"> Who we are </Link>
            </li>
            {/* Who we are list */}
            <ul className="rounded absolute hidden text-gray-700 pt-1 hover:block w-56">
              <li className="bg-gray-200 hover:bg-gray-400 py-4 px-4 cursor-pointer">Learn about who we are</li>
              <li className="bg-gray-200 hover:bg-gray-400 py-4 px-4 cursor-pointer">Our executives</li>
            </ul>
            <li className="px-4   font-semibold">
              <Link to="/technologies"> Our Technologies </Link>
            </li>
            <li className="px-4  font-semibold">
              <Link to="/careers"> Careers </Link>
            </li>
            <li className="px-4 font-semibold">
              <Link to="/news"> News </Link>
            </li>
            
          </ul>
          <ul className="p-4 m-4 ">
          <li className="px-4 font-semibold">
              <Link to="/support"> Support </Link>
            </li>
          </ul>
        </div>
      </div>
    )
};

export default Header;