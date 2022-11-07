import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import Mailto from "../../shared/Mailto";
function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const { name, email, message } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!name && !email && !message) {
      toast.error("Please fill all the details");
    } else {
      try {
        const res = await axios.post("/contact", formData);
        if (res.status === 200) {
          toast.success(res.data.message);
        }
      } catch (error) {
        console.log(error);
      }
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    }
  };

  return (
    <div className="mt-8">
      <h1
        className="text-2xl name text-[#071d48] font-bold text-center pb-6 my-1"
        id="contact"
      >
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
        <form onSubmit={onSubmit}>
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            id="name"
            className="bg-white rounded-md shadow-md px-3 py-3 my-2 w-full outline-none"
            onChange={onChange}
          />
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            id="email"
            className="bg-white rounded-md shadow-md px-3 py-3 my-2 w-full outline-none"
            onChange={onChange}
          />
          <textarea
            placeholder="Your Message"
            value={message}
            id="message"
            className="bg-white rounded-md shadow-md px-3 py-3 my-2 w-full resize-none min-h-[10rem] outline-none"
            onChange={onChange}
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
