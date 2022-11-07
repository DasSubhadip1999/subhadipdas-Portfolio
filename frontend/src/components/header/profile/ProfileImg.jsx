import ProfilePicture from "../../../assets/ProfilePicture.png";
import { FaStar } from "react-icons/fa";

function ProfileImg() {
  return (
    <>
      <div className="relative w-full h-64">
        <div className="img-bg w-72 h-52 md:w-[22rem] md:h-60 md:-bottom-16">
          <div className="circle1 w-4 h-4 rounded-full absolute left-4 top-4 opacity-75 "></div>
        </div>
        <div className="circle2 w-3 h-3 rounded-full absolute top-4 right-8 opacity-75"></div>
        <div className="circle3 w-2 h-2 rounded-full absolute top-4 left-8 opacity-75"></div>
        <div className="circle4 w-1 h-1 rounded-full absolute top-24 left-8 opacity-90"></div>
        <FaStar
          color="#07a1ba"
          style={{
            position: "absolute",
            top: "10rem",
            left: "2rem",
            opacity: 0.9,
          }}
        />
        <img
          src={ProfilePicture}
          alt="profile"
          className="w-72 md:w-[22rem] md:h-[22rem]  h-[19rem] absolute z-10 bottom-0 md:-bottom-8 right-3"
        />
        <div className="absolute flex items-center -bottom-3 left-4 z-30 py-1 px-1 bg-white shadow-lg rounded-3xl">
          <span className="w-8 h-8 rounded-full bg-[#e5660f]"></span>
          <h1 className="font-bold text-lg mx-2">UI/UX</h1>
        </div>
      </div>
      <div className="gradient w-full h-16 relative z-20 md:hidden"></div>
    </>
  );
}

export default ProfileImg;
