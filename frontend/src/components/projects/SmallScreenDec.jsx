function SmallScreenDec({ title, live, github }) {
  return (
    <div className="my-3">
      <h1 className="text-2xl name text-[#e56612] font-bold pb-3 text-center capitalize">
        {title}
      </h1>
      <div className="flex justify-center">
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
