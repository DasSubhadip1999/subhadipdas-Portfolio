import { useEffect, useState } from "react";
import SmallScreenDec from "./SmallScreenDec";
//
function ProjectItem({ id, imgLink, title, live, github, desc }) {
  const [screen, setScreen] = useState(false);

  useEffect(() => {
    if (window.screen.width < 420) {
      setScreen(true);
    } else {
      setScreen(false);
    }
  }, []);

  window.addEventListener("resize", () => {
    if (window.screen.width < 420) {
      setScreen(true);
    } else {
      setScreen(false);
    }
  });
  return (
    <div className="my-2 shadow-md rounded-md">
      <img
        src={imgLink}
        alt="hostinger"
        className="rounded-md rounded-b-none ml-[0.1rem]"
        data-aos={id % 2 === 0 ? "fade-right" : "fade-left"}
      />
      {screen && (
        <SmallScreenDec title={title} live={live} github={github} desc={desc} />
      )}
    </div>
  );
}

export default ProjectItem;
