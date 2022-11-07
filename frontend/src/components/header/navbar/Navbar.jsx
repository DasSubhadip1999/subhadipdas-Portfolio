import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import listData from "../../../staticData/ListData";
import {
  FaBars,
  FaChevronLeft,
  FaChevronRight,
  FaSlash,
  FaTimes,
} from "react-icons/fa";
import ListItem from "./ListItem";
function Navbar() {
  const [isMenu, setIsMenu] = useState(false);
  const [count, setCount] = useState(0);
  const [remove, SetRemove] = useState(false);
  return (
    <div className="flex items-center justify-between bg-white rounded-sm py-2 mt-3 mx-2 px-2 fixed top-1 w-[95%] shadow-sm z-40 md:w-[84%] md:mx-32 md:mt-4 md:shadow-md md:p-3">
      <h1
        className="flex items-center text-[#242d4a]"
        onClick={(e) => {
          e.preventDefault();
          window.location.replace("/#home");
        }}
      >
        <FaChevronLeft size={24} />
        <p className="mx-1 font-extrabold">Subhadip Das</p>
        <FaSlash size={24} style={{ rotate: "75deg" }} className="-mr-2" />
        <FaChevronRight size={24} />
      </h1>
      {/* display on large screen */}
      <nav className="hidden md:block md:w-[40%] lg:block xl:block ">
        <ul className="flex justify-between text-[#242d4a] text-md font-semibold">
          <li className="cursor-pointer hover:text-[#e5660f]">Home</li>
          <li className="cursor-pointer hover:text-[#e5660f]">Services</li>
          <li className="cursor-pointer hover:text-[#e5660f]">Skills</li>
          <li className="cursor-pointer hover:text-[#e5660f]">Projects</li>
          <li className="cursor-pointer hover:text-[#e5660f]">Contact</li>
        </ul>
      </nav>
      <button className="hidden md:block lg:block xl:block bg-[#e5660f] text-white px-4 py-1 rounded-md">
        Contact me
      </button>
      {/* display on small screen */}
      {isMenu && !remove ? (
        <FaTimes
          color="#e5660f"
          size={21}
          onClick={() => {
            setIsMenu((prev) => !prev);
            setTimeout(() => {
              SetRemove(true);
            }, 700);
          }}
          className="absolute right-2 z-50 md:hidden lg:hidden xl:hidden"
        />
      ) : (
        <FaBars
          color="#e5660f"
          size={21}
          onClick={() => {
            setIsMenu((prev) => !prev);
            setCount(1);
            SetRemove(false);
          }}
          className="absolute right-2 z-50 md:hidden lg:hidden xl:hidden"
        />
      )}
      <div
        className={`absolute  z-0 -right-2 -top-3 w-[70vw] h-[100vh] bg-white md:hidden lg:hidden xl:hidden ${
          !isMenu && count < 1 ? "hidden" : ""
        } ${remove ? "hidden" : ""}`}
        id={`${isMenu ? "menubaradd" : "menubarremove"}`}
      >
        <ul className="mt-20 navlinks">
          {listData.map(({ logo, text }) => (
            <ListItem key={uuidv4()} logo={logo} text={text} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
