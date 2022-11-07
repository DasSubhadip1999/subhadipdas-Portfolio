import ProfileImg from "./ProfileImg";
import TextDec from "./TextDec";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function ProfileDec() {
  useEffect(() => {
    AOS.init({
      duration: 800,
    });
  }, []);
  return (
    <>
      <div className="flex flex-col md:flex-row mt-12 md:mt-36 border-2 md:mx-28">
        <TextDec />
        <ProfileImg />
      </div>
      <div className="gradient w-full h-16 relative z-20 hidden md:block"></div>
    </>
  );
}

export default ProfileDec;
