import React from "react";

const Footer = () => {
  return (
    <div className="bg-neutral-600 flex justify-evenly py-4 mt-10">
      <div className="image">
        <img
          src="https://csjmu.ac.in//wp-content/themes/csjmutheme/imgs-copyrighted/csjmu-logo-main.png"
          alt=""
        />
      </div>
      <div className="about flex justify-center flex-col text-white">
        <div className="links flex items-start flex-col">
          <span className="hover:text-orange-400">
            Chhatrapati Shahu Ji Maharaj University, Kanpur
            <br /> (Formerly Kanpur University, Kanpur) Kalyanpur, Kanpur-208024
          </span>
          <span className="hover:text-orange-400">Contact:+91 435345434XX</span>
          <span className="hover:text-orange-400">email: sample@csjmy.ac.in</span>
        </div>
      </div>
      <div className="terms-policies flex flex-col items-start text-white font-normal text-xl ">
        <span className="hover:underline">Terms & Conditions</span>
        <span className="hover:underline">Privacy Policy</span>
        <span className="hover:underline">Disclaimer</span>
      </div>
    </div>
  );
};

export default Footer;
