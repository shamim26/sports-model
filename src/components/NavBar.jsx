import { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative flex items-center justify-between md:w-5/6 px-5 md:px-0 mx-auto py-10 ">
      <h1 className="text-xl md:text-3xl font-semibold">
        Sport- <span className="font-thin text-4xl ">x</span> Model
      </h1>
      <div
        className={`right-5 top-20 md:static flex flex-col md:flex-row md:items-center gap-2 md:gap-10 p-4 md:p-0 bg-white ${
          open ? "absolute" : "hidden md:flex"
        }`}
      >
        <Link onClick={() => setOpen(!open)} to="/">
          Home
        </Link>
        <Link to="/bar-charts">Bar Charts</Link>
        <Link to="/scatter-plot">Scatter Plot</Link>
        <Link onClick={() => setOpen(!open)} to="/about">
          About
        </Link>
        <Link onClick={() => setOpen(!open)} to="/faq">
          Faq
        </Link>
        <Link
          onClick={() => setOpen(!open)}
          className="btn-black-md"
          to="/contact"
        >
          Contact
        </Link>
      </div>
      <button onClick={() => setOpen(!open)} className="md:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
        >
          <g id="Group">
            <path
              id="Vector"
              d="M18 18.5V20.5H6V18.5H18ZM21 11.5V13.5H3V11.5H21ZM18 4.5V6.5H6V4.5H18Z"
              fill="#0F0F0F"
            />
          </g>
        </svg>
      </button>
    </div>
  );
};

export default NavBar;
