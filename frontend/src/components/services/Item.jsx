function Item({ logo, title, content, id }) {
  return (
    <div
      className="flex items-center bg-white my-3 py-2 rounded-lg px-5 shadow-md"
      data-aos={id % 2 === 0 ? "fade-up-right" : "fade-up-left"}
    >
      <div>
        <img className="w-10 h-10" src={logo} alt="logo"></img>
      </div>
      <div className="pl-6 w-[70%]">
        <h1 className="text-xl font-semibold text-[#071d48]">{title}</h1>
        <p>{content}</p>
      </div>
    </div>
  );
}

export default Item;
