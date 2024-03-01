import React from "react";
import vcsir from "../assets/vcsir.jpg";
import vs_1 from "../assets/vs_1.jpg";
import pro_vc from "../assets/pro_vc.jpg";
import { motion } from "framer-motion";

const Guest = () => {
  const guest = {
    guest1: {
      name: "Prof. Vinay Kumar Pathak",
      position: "Hon'ble Vice-Chancellor",
      image: vcsir,
      college: "CSJMU, Kanpur",
    },
    guest2: {
      name: "Prof. Sudhir Kumar Awasthi",
      position: "Pro Vice-Chancellor",
      image: pro_vc,
      college: "CSJMU, Kanpur",
    },
    guest3: {
      name: "Dr. Anil Kumar Yadav",
      position: "Registrar",
      image: vs_1,
      college: "CSJMU, Kanpur",
    },
  };
  return (
    <div className="mt-10">
      <div className="pb-10">
        <h1 className="text-gray-500 font-semibold text-3xl text-center">
          Our Chief Guests
        </h1>
      </div>
      <div className="flex justify-center flex-wrap">
        <GuestCard guest={guest.guest1} />
        <GuestCard guest={guest.guest2} />
        <GuestCard guest={guest.guest3} />
      </div>
    </div>
  );
};

export default Guest;

export const GuestCard = ({ guest }) => {
  return (
    <motion.div
      initial={{ y: "-40vh" }}
      animate={{ y: 0 }}
      transition={{ type: "tween", stiffness: 120 }}
      className="border-2 border-x-green-50 rounded-md shadow-2xl m-auto flex flex-col items-center px-3 py-3 hover:-translate-y-3 transition-shadow ease-in-out hover:border-b-3 hover:border-gray-400"
    >
      <div className="guest-avatar">
        <img
          src={guest.image}
          alt={guest.name}
          className="h-48 w-48 rounded-md"
        />
      </div>
      <h1 className="text-xl font-medium">{guest.name}</h1>
      <p className="text-gray-500 font-medium">{guest.position}</p>
      <p className="text-emerald-800 font-semibold text-xl">{guest.college}</p>
    </motion.div>
  );
};
