import Navbar from "./navbar/Navbar";
import ProfileDec from "./profile/ProfileDec";

function Header() {
  return (
    <header className="bg-[#e8f7fb] pt-1">
      <div className="fixed top-0 w-full h-4 bg-[#e8f7fb] z-40"></div>
      <Navbar />
      <ProfileDec />
    </header>
  );
}

export default Header;
