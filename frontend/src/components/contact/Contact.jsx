import Mailto from "../../shared/Mailto";
function Contact() {
  return (
    <div className="mt-8">
      <h1 className="text-2xl name text-[#071d48] font-bold text-center pb-6 my-1">
        Take A Coffe<span className="text-[#e56612] mx-2">&</span>Chat with Me
      </h1>
      <div className="bg-[#e8f7fb] mt-2 p-3">
        <div className="bg-white rounded-md shadow-md px-3 py-3 my-2">
          <Mailto
            mailId="mailto:no-reply@example.com"
            label="subhadipdasrng54@gmail.com"
          />
        </div>
        <div>{/* mobile */}</div>
        <form>
          <input
            type="text"
            placeholder="Your Name"
            className="bg-white rounded-md shadow-md px-3 py-3 my-2 w-full outline-none"
          />
          <input
            type="text"
            placeholder="Your Email"
            className="bg-white rounded-md shadow-md px-3 py-3 my-2 w-full outline-none"
          />
          <textarea
            placeholder="Your Message"
            className="bg-white rounded-md shadow-md px-3 py-3 my-2 w-full resize-none min-h-[10rem] outline-none"
          ></textarea>
          <button
            className="bg-[#071d48] text-white rounded-md shadow-md px-3 py-3 my-2 w-full outline-none"
            type="submit"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
