function ListItem({ logo, text }) {
  return (
    <li className="flex items-center my-6 pl-1 ml-3 text-[#071d48]">
      <div className={`rounded-full p-2 border-2 text-lg border-[#e5660f]`}>
        {logo}
      </div>
      <div
        className={`w-[70%] border-2 rounded-md  px-3 py-1 ml-4 font-semibold capitalize border-[#e5660f]`}
        onClick={(e) => {
          e.preventDefault();
          window.location.replace(`/#${text}`);
        }}
      >
        {text}
      </div>
    </li>
  );
}

export default ListItem;
