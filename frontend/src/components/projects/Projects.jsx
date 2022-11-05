import Hostinger from "../../assets/project-images/hostinger.png";
import Youtube from "../../assets/project-images/youtube.png";
import ProjectItem from "./ProjectItem";
import HouseMarketPlace from "../../assets/project-images/houseMarketPlace.png";
import GithubFinder from "../../assets/project-images/githubFinder.png";
import MoviesFlix from "../../assets/project-images/moviesFlix.png";
import Feedback from "../../assets/project-images/feedback.png";
import Studyguru from "../../assets/project-images/studyguru.png";

function Projects() {
  return (
    <div className="my-4">
      <h1 className="text-4xl name text-[#071d48] font-bold text-center pb-2 my-1">
        Recent <span className="text-[#e56612]">Projects</span>
      </h1>
      <div className={`grid grid-cols-1 gap-4 bg-[#e8f7fb] p-3`}>
        <ProjectItem
          imgLink={Hostinger}
          title="hostinger clone"
          live="https://hostingersd02.netlify.app"
          github="https://github.com/DasSubhadip1999/Hostinger"
        />
        <ProjectItem
          imgLink={Youtube}
          title="Youtube clone"
          live="https://youtubesd.netlify.app"
          github="https://github.com/DasSubhadip1999/react-youtube"
        />
        <ProjectItem
          imgLink={HouseMarketPlace}
          title="House Market Place"
          live="https://housemarketplacesd.netlify.app"
          github="https://github.com/DasSubhadip1999/house-marketplace"
        />
        <ProjectItem
          imgLink={GithubFinder}
          title="Github Finder"
          live="https://githubfindersd.netlify.app"
          github="https://github.com/DasSubhadip1999/Github-Finder"
        />
        <ProjectItem
          imgLink={MoviesFlix}
          title="MoviesFlix"
          live="https://moviesflix-movie-search.netlify.app"
          github="https://github.com/DasSubhadip1999/moviesflix"
        />
        <ProjectItem
          imgLink={Feedback}
          title="Feedback UI"
          live="https://feedbackui7654.netlify.app"
          github="https://github.com/DasSubhadip1999/Feedback-App"
        />
        <ProjectItem
          imgLink={Studyguru}
          title="Digikull study app"
          live="https://studyguru.netlify.app"
          github="https://github.com/DasSubhadip1999/studyguru"
        />
      </div>
    </div>
  );
}

export default Projects;
