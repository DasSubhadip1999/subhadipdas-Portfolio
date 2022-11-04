import ServiceDec from "./ServiceDec";
import ServiceItems from "./ServiceItems";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Services() {
  useEffect(() => {
    AOS.init({
      duration: 800,
    });
  }, []);
  return (
    <div className="">
      <ServiceDec />

      <ServiceItems />
    </div>
  );
}

export default Services;
