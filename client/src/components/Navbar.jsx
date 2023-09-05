import React from "react";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [open, setOpen] = React.useState(false)

  function handleNavLinkClick() {
    setOpen(false);
  }



  return (
    <header className="w-full fixed left-0 z-[100] top-0 bg-zinc-600">
      <nav className="w-full flex items-center justify-between bg-white h-24 md:px-10 px-7 max-w-[1444px] my-0 mx-auto">
        <NavLink to={`/`}>
          <h1 className="cursor-pointer text-primary text-2xl font-semibold">
          BrainBox
          </h1>
        </NavLink>

        <div
          onClick={() => setOpen(!open)}
          className="absolute right-4 top-6 text-primary text-3xl cursor-pointer md:hidden w-9 h-9"
        >
          {open ? <AiOutlineClose /> : <GiHamburgerMenu />}
        </div>

        <div className="flex items-center justify-between">
          <ul
            className={` md:flex md:items-center md:py-0 py-6 absolute md:static md:z-auto z-[-8] left-0 w-full md:w-auto md:pl-0 pl-9 mr-5 transition-all duration-500 ease-in ${
              open ? "top-12" : "top-[-490px]"
            }`}
          >
            <li className="md:ml-8 md:my-0 my-7 font-black text-xs">
              <NavLink
                to="/about"
                className={
                  scroll
                    ? "hover:text-primary duration-500 ease heading nav-link "
                    : " nav-link ease hover:text-primary duration-500 heading"
                }
                onClick={handleNavLinkClick}
              >
                ABOUT
              </NavLink>
            </li>
            <li className="md:ml-8 md:my-0 my-7 font-black text-xs">
              <NavLink
                to="/all-courses"
                className={
                  scroll
                    ? "hover:text-primary duration-500 ease heading nav-link "
                    : " nav-link ease hover:text-primary duration-500 heading"
                }
                onClick={handleNavLinkClick}
              >
              COURSES
              </NavLink>
            </li>
            <li className="md:ml-8 md:my-0 my-7 font-black text-xs">
              <NavLink
                to="/pricing"
                className={
                  scroll
                    ? " hover:text-primary duration-500 ease heading nav-link "
                    : " nav-link ease  hover:text-primary duration-500 heading"
                }
                onClick={handleNavLinkClick}
              >
                RECOMMEND
              </NavLink>
            </li>
            
          </ul>
        </div>

        <div className="flex items-center gap-1 mr-9">
          <NavLink to="/register">
            <button className="text-xs md:text-base text-primary font-bold border-white border-2 md:ml-3 mr-9 px-3 py-1 rounded-2xl duration-500">
              Register
            </button>
          </NavLink>

          <NavLink to="/login">
            <button className="text-xs md:text-base text-primary font-bold border-white border-2 md:ml-3 mr-9 px-3 py-1 rounded-2xl duration-500">
              Login
            </button>
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
