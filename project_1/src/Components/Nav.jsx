import React from "react";
import DisneyLogo from "../assets/Images/disney.png";
import { Link } from "react-router-dom";
import { BsHouseDoorFill } from 'react-icons/bs'

const Nav = () => {

  const navItem = (props) => {
    return (
      <div className="relative flex cursor-pointer items-center space-x-3 navitem-hover:w-full">
        {props.childrend}
        <span className="absoluten right-0 bottom-[-5px] left-[-12px] h-[-3px] w-0 rounded-sm bg-white transition-all duration-150 ease-linear"></span>
      </div>
    );
  };

  return (
    <>
      <nav className=" italic fixed top-0 left-0 right-0 z-10 w-full overflow-hidden bg-body-bg ">
        <div className="container mx-auto flex items-center justify-between px-10 py-3">
          <Link to={"/"}>
            <img className="w-28" src={DisneyLogo} alt="disney-logo" />
          </Link>
          <div className="hidden gap-10 xl:flex">
          <navItem>
            <BsHouseDoorFill className="w-7 h-7 bg-red-100"  />
            <p className=" text-red-100">Home</p>
          </navItem>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
