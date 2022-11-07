import Hostinger from "../assets/project-images/hostinger.png";
import Youtube from "../assets/project-images/youtube.png";
import HouseMarketPlace from "../assets/project-images/houseMarketPlace.png";
import GithubFinder from "../assets/project-images/githubFinder.png";
import MoviesFlix from "../assets/project-images/moviesFlix.png";
import Feedback from "../assets/project-images/feedback.png";
import Studyguru from "../assets/project-images/studyguru.png";

//project
import { FaCss3Alt, FaHtml5, FaJsSquare, FaReact } from "react-icons/fa";
import Firebase from "../assets/firebase.png";
import JQuery from "../assets/jquery.png";

const ProjectData = [
  {
    id: 1,
    imgLink: Hostinger,
    title: "hostinger clone",
    desc: {
      heading:
        "Hostinger is a clone of an event page of the www.hostinger.in website. This app is made with ReactJs.",
      features: [
        "This website is responsive for mobile & laptop.",
        "It is multilingual website, you can view this website in Enligh & French.",
        "It has home page & login page.",
      ],
      stack: {
        heading: "stack used:",
        logos: [
          <FaHtml5 size={26} />,
          <FaCss3Alt size={26} />,
          <FaJsSquare size={26} />,
          <FaReact size={26} />,
        ],
      },
    },
    live: "https://hostingersd02.netlify.app",
    github: "https://github.com/DasSubhadip1999/Hostinger",
  },
  {
    id: 2,
    imgLink: Youtube,
    title: "Youtube App",
    desc: {
      heading:
        "Youtube App is redesigned version of youtube by using youtube v3 API.",
      features: [
        "This website is full responsive",
        "You can search videos of your choice.",
        "Search history is available.",
      ],
      stack: {
        heading: "stack used:",
        logos: [
          <FaHtml5 size={26} />,
          <FaCss3Alt size={26} />,
          <FaJsSquare size={26} />,
          <FaReact size={26} />,
        ],
      },
    },
    live: "https://youtubesd.netlify.app",
    github: "https://github.com/DasSubhadip1999/react-youtube",
  },
  {
    id: 3,
    imgLink: HouseMarketPlace,
    title: "House Market Place",
    desc: {
      heading:
        "House Marketplace is selling/renting app for house. Here users can list there house for sale/ rent.",
      features: [
        "This website is responsive.",
        "Sign up & Log in using Firebase Auth",
        "CRUD functionality available in this site.",
        "A dedicated offers section where those houses will be listed which are in offer.",
      ],
      stack: {
        heading: "stack used:",
        logos: [
          <FaHtml5 size={26} />,
          <FaCss3Alt size={26} />,
          <FaJsSquare size={26} />,
          <FaReact size={26} />,
          Firebase,
        ],
      },
    },
    live: "https://housemarketplacesd.netlify.app",
    github: "https://github.com/DasSubhadip1999/house-marketplace",
  },
  {
    id: 4,
    imgLink: GithubFinder,
    title: "Github Finder",
    desc: {
      heading:
        "Github finder is github account finder app with a dedicated profile section using Github API.",
      features: [
        "Find Github users across the globe.",
        "View public repositories, followers.",
      ],
      stack: {
        heading: "stack used:",
        logos: [
          <FaHtml5 size={26} />,
          <FaCss3Alt size={26} />,
          <FaJsSquare size={26} />,
          <FaReact size={26} />,
        ],
      },
    },
    live: "https://githubfindersd.netlify.app",
    github: "https://github.com/DasSubhadip1999/Github-Finder",
  },
  {
    id: 5,
    imgLink: MoviesFlix,
    title: "MoviesFlix",
    desc: {
      heading:
        "MoviesFlix is a movie & series details searching app made with OMDB API.",
      features: [
        "Search any name and it will show the details of that movie or series. ",
        "It has a welcome animation of some of the popular series & movies.",
      ],
      stack: {
        heading: "stack used:",
        logos: [
          <FaHtml5 size={26} />,
          <FaCss3Alt size={26} />,
          <FaJsSquare size={26} />,
          JQuery,
        ],
      },
    },
    live: "https://moviesflix-movie-search.netlify.app",
    github: "https://github.com/DasSubhadip1999/moviesflix",
  },
  {
    id: 6,
    imgLink: Feedback,
    title: "Feedback UI",
    desc: {
      heading: "This is a feedback providing app.",
      features: [
        "This website is responsive.",
        "This is also a CRUD website.",
        "Rating count & average rating.",
      ],
      stack: {
        heading: "stack used:",
        logos: [
          <FaHtml5 size={26} />,
          <FaCss3Alt size={26} />,
          <FaJsSquare size={26} />,
          <FaReact size={26} />,
        ],
      },
    },
    live: "https://feedbackui7654.netlify.app",
    github: "https://github.com/DasSubhadip1999/Feedback-App",
  },
  {
    id: 7,
    imgLink: Studyguru,
    title: "Digikull study app",
    desc: {
      heading:
        "Digikull study app is web application where only teachers can add & delete assignments and students only can see them.",
      features: [
        "Two type of login Students & Teachers.",
        "Class based algorithm for sign in & sign up.",
        "Login page & a dashboard page.",
      ],
      stack: {
        heading: "stack used:",
        logos: [
          <FaHtml5 size={26} />,
          <FaCss3Alt size={26} />,
          <FaJsSquare size={26} />,
          JQuery,
        ],
      },
    },
    live: "https://studyguru.netlify.app",
    github: "https://github.com/DasSubhadip1999/studyguru",
  },
];

export default ProjectData;
