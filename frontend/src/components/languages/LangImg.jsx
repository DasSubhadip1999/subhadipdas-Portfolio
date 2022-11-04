import Boy from "../../assets/boy.png";
import Jquery from "../../assets/jquery.png";
import Express from "../../assets/express.png";
import Mongo from "../../assets/mongoDB.png";
import Mongoose from "../../assets/mongoose.png";

import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNode,
} from "react-icons/fa";
function LangImg() {
  return (
    <div className="my-2 flex">
      <div className="">
        <img className="w-28 h-60 mt-4" src={Boy} alt="boy" />
      </div>
      {/* languages design */}
      <div className="w-[65%]">
        <h1 className="name text-2xl text-[#071d48] font-bold ml-4 py-1">
          Can work with
        </h1>
        <div className="grid grid-cols-3 gap-3">
          <div className="bg-[#e8f7fb] rounded-md p-2 shadow-md">
            <FaHtml5 size={45} />
          </div>
          <div className="bg-[#e8f7fb] rounded-md p-2 shadow-md">
            <FaCss3Alt size={45} />
          </div>
          <div className="bg-[#e8f7fb] rounded-md p-2 shadow-md">
            <FaJsSquare size={44} />
          </div>
          <div className="bg-[#e8f7fb] rounded-md p-2 shadow-md">
            <img className="h-18 w-18" src={Jquery} alt="jquery" />
          </div>
          <div className="bg-[#e8f7fb] rounded-md p-2 shadow-md">
            <FaReact size={45} />
          </div>
          <div className="bg-[#e8f7fb] rounded-md p-2 shadow-md">
            <FaNode size={48} />
          </div>
          <div className="bg-[#e8f7fb] rounded-md p-2 shadow-md">
            <img className="h-12 w-12" src={Express} alt="express shadow-md" />
          </div>
          <div className="bg-[#e8f7fb] rounded-md p-2 shadow-md">
            <img className="ml-2 h-14 w-8" src={Mongo} alt="mongo" />
          </div>
          <div className="bg-[#e8f7fb] rounded-md p-2 shadow-md">
            <img className="h-14 w-20" src={Mongoose} alt="mongoose" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LangImg;
