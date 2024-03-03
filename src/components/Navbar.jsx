import React from "react";
import littardo_logo from "../assets/littardo_logo.png";
import search from "../assets/search.jpg";

function Navbar() {
  return (
    <div className="bg-gradient-to-b from-yellow-100 to-yellow-50">
      <div className="navbar flex py-3 px-10  max-w-[1440px] mx-auto">
        <div className="navbar-left  min-w-[30%]">
          <div className="logo flex bg-white p-2 rounded-md  max-w-[40%] items-center justify-around">
            <div className="main-logo w-10 h-10">
              <img src={littardo_logo} alt="logo" />
            </div>
            <div className="logo-text">
              <p>Littardo</p>
              <p>Emporium</p>
            </div>
          </div>
        </div>
        <div className="navbar-right flex  w-full items-center justify-end gap-5 ">
          <div className="search bg-white p-2 w-[70%] rounded-md flex gap-2">
            <img
              src={search}
              alt=""
              width={30}
              height={20}
              className="rounded-md"
            />
            <input
              type="text"
              placeholder="search here"
              className="w-full outline-0"
            />
          </div>
          <div className="login py-3 px-5 bg-gradient-to-t from-yellow-300 to-yellow-500 rounded-md shadow-lg cursor-pointer md:visible">
            <button>login</button>
          </div>
          <div className="cart py-3 px-5 bg-white rounded-md flex items-center cursor-pointer">
            <img src={littardo_logo} alt="logo" width={30} height={30} />
            <button>cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
