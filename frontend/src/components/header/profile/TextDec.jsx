import Button from "../../../shared/Button";

function TextDec() {
  return (
    <div className="py-4 mx-2 px-3">
      <h1 className="flex flex-col name text-5xl text-[#071d48] font-extrabold">
        <span>Hi! I AM</span>
        <span>Subhadip Das</span>
      </h1>
      <p className="my-2">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
      </p>
      <Button text={"Hire Me"} />
    </div>
  );
}

export default TextDec;
