import { FaBars, FaChevronLeft, FaChevronRight, FaSlash } from "react-icons/fa";
function Navbar() {
  return (
    <div className="flex items-center justify-between bg-white rounded-sm py-2 mt-3 mx-2 px-2 fixed top-1 w-[95%] shadow-sm z-40">
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
      <nav className="hidden">
        <ul className="flex">
          <li>Home</li>
          <li>Services</li>
          <li>About</li>
        </ul>
      </nav>
      <button className="hidden">contact us</button>
      {/* display on small screen */}
      <FaBars color="#e5660f" size={21} />
    </div>
  );
}

export default Navbar;
