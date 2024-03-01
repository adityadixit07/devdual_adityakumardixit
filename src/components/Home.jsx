import React from "react";
import Typewriter from "typewriter-effect";
import Guest from "./Guest";
import Footer from "./Footer";

const Home = () => {
  return (
    <div className=" mt-10">
      <div className="">
        <h1 className="text-4xl text-center font-bold py-3">
          Welcome to <span className="text-orange-500 border-b-2 border-black">CSJMU</span>
        </h1>
      </div>
      {/* 58th foundation day programme */}
      <div className="text-4xl text-center">
        <Typewriter
          options={{
            strings: [
              "59th foundation day programme 🎉",
              "Chief Guest: Dr. Ramesh Pokhriyal Nishank",
              "Hon'ble Minister of Education, Government of India",
              "Date: 10March  2024",
              "Time: 10:00 AM",
              "Venue: Auditorium, CSJMU",
            ],
            autoStart: true,
            loop: true,
          }}
        />
      </div>

      {/* guest section */}
      <div>
        <Guest />
      </div>

      {/* footer section */}
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
