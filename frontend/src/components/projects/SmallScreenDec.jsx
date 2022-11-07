import { v4 as uuidv4 } from "uuid";
function SmallScreenDec({ title, live, github, desc }) {
  return (
    <div className="my-3">
      <h1 className="text-2xl name text-[#e56612] font-bold pl-3 capitalize">
        {title}
      </h1>
      {/* description */}
      <div className="p-3">
        <h1 className="text-lg font-semibold mb-3 text-[#071d48] name">
          {desc.heading}
        </h1>
        <ul className="list-disc px-4">
          {desc.features.map((text) => (
            <li className="my-2" key={uuidv4()}>
              {text}
            </li>
          ))}
        </ul>
        <div className="py-2">
          <h1 className="capitalize text-lg font-bold">{desc.stack.heading}</h1>
          <div className="flex my-2 items-center justify-between bg-[#e8f7fb]">
            {desc.stack.logos.map((icon) => (
              <div
                data-aos="zoom-in"
                className="mx-1 shadow-md rounded-full p-2 bg-white"
                key={uuidv4()}
              >
                {typeof icon === "object" ? (
                  icon
                ) : (
                  <img
                    className="w-[1.7rem] h-[1.7rem]"
                    src={icon}
                    alt="icon"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* description */}
      <div className="flex justify-center mt-1">
        <a
          href={live}
          target="_blank"
          rel="noreferrer"
          className="bg-[#e5660f] text-white px-[2.3rem] text-xl py-1 rounded-md mx-3 shadow-md"
        >
          Live
        </a>
        <a
          href={github}
          target="_blank"
          rel="noreferrer"
          className="bg-[#071d48] text-white px-6 text-xl py-1 rounded-md mx-3 shadow-md"
        >
          Github
        </a>
      </div>
    </div>
  );
}

export default SmallScreenDec;
