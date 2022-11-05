import { FaEnvelopeOpen } from "react-icons/fa";
function Mailto({ mailId, label }) {
  return (
    <a
      href={`mailto:${mailId}`}
      className="flex items-center justify-center font-semibold text-md text-[#071d48]"
    >
      <FaEnvelopeOpen size={25} className="mx-2 mb-1" />
      {label}
    </a>
  );
}

export default Mailto;
