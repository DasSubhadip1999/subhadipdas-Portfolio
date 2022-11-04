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
    <div className="flex flex-col mt-12" id="home">
      <TextDec />

      <ProfileImg />
    </div>
  );
}

export default ProfileDec;
