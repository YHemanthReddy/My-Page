import React from "react";
import { Link } from "react-router-dom";
import { CiGrid41 } from "react-icons/ci";
import { FiDollarSign } from "react-icons/fi";
import { HiOutlineDocumentText } from "react-icons/hi";
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineSetting } from "react-icons/ai";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import {IMG_URL} from '../utils/constants';

const Header = () => {
  return (
    <div className="flex justify-around shadow-lg h-12 rounded-md bg-slate-500 text-white">
      <div className="flex px-1.5 my-1 rounded-lg sm:justify-center shrink-0">
        <h1 className="h-8 w-7 mr-2 "><img className="rounded-2xl" src ={IMG_URL} alt="image" /></h1>
        <h1>Grave Site Management</h1>
      </div>

      <div className="nav ">
        <ul className="flex ">
        <Link to="/">
          <li className="flex px-2">
            <h1 className="m-1"><CiGrid41 /></h1>
            <h1>Maintain</h1>
          </li>
          </Link>
          <Link to="/">
          <li className="flex px-2">
            <h1 className="m-1"><FiDollarSign /></h1>
            <h1>Payments</h1>
          </li>
          </Link>
          <Link to="/">
          <li className="flex px-2">
            <h1 className="m-1"><HiOutlineDocumentText /></h1>
            <h1>Reports</h1>
          </li>
          </Link>
          
        </ul>
      </div>
      <div className="flex justify-between">
        <h1 className="m-2">
          <AiOutlineSearch />
        </h1>
        <h1 className="m-2">
          <AiOutlineSetting />
        </h1>
        <h1 className="m-2">
          <IoIosHelpCircleOutline />
        </h1>
        <h1 className="m-2">
          <FaUserCircle />
        </h1>
      </div>
    </div>
  );
};

export default Header;
