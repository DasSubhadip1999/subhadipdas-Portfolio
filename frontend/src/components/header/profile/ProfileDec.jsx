import ProfileImg from "./ProfileImg";
import TextDec from "./TextDec";

function ProfileDec() {
  return (
    <div className="flex flex-col mt-12" id="home">
      {/* text */}
      <TextDec />
      {/* image */}
      <ProfileImg />
    </div>
  );
}

export default ProfileDec;
