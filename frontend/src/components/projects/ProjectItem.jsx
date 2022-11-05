import { useEffect, useState } from "react";
import SmallScreenDec from "./SmallScreenDec";
//
function ProjectItem({ imgLink, title, live, github }) {
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
    <div>
      <img
        src={imgLink}
        alt="hostinger"
        className="rounded-md shadow-md ml-[0.1rem]"
      />
      {screen && <SmallScreenDec title={title} live={live} github={github} />}
    </div>
  );
}

export default ProjectItem;
