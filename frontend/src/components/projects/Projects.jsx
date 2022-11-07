import ProjectData from "../../staticData/projectData";
import ProjectItem from "./ProjectItem";

function Projects() {
  return (
    <div className="my-4">
      <h1
        className="text-4xl name text-[#071d48] font-bold text-center pb-2 my-1"
        id="projects"
      >
        Recent <span className="text-[#e56612]">Projects</span>
      </h1>
      <div className={`grid grid-cols-1 gap-4 bg-[#e8f7fb] p-3`}>
        {ProjectData.map(({ id, imgLink, title, live, github, desc }) => (
          <ProjectItem
            key={id}
            id={id}
            imgLink={imgLink}
            title={title}
            live={live}
            github={github}
            desc={desc}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
