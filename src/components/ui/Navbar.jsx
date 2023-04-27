import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { IconCart } from "../../icons/IconCart";

export default function Navbar() {
  const activ = ({ isActive }) => ({ color: isActive ? "orange" : null });
  const navigate = useNavigate();
  return (
    <header className="w-full h-[100px] flex justify-center bg-[#1b7688bb]">
      <nav className="w-full h-full flex justify-around items-center text-white">
        <div className="text-3xl font-bold tracking-widest">
          <a className="hover:text-orange-600 transition-all cursor-pointer">
            Bisum
            <span>|</span>
            <span className="text-orange-600">@</span>
          </a>
        </div>
        <ul className="flex gap-5">
          <li>
            <NavLink to="/" style={activ}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/shop" style={activ}>
              Shop
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" style={activ}>
              Contact
            </NavLink>
          </li>
        </ul>
        <div>
          <button
            className=" flex justify-center items-center gap-3 py-3 px-8 rounded-md uppercase bg-orange-600"
            onClick={() => navigate("/shop")}
          >
            <IconCart />
            Purchase now
          </button>
        </div>
      </nav>
    </header>
  );
}