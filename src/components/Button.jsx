import React from "react";

const Button = ({ text,action }) => {
  return (
    <>
      <button className="text-black bg-white border-2 border-black rounded-md px-4 py-2" onClick={action}>
        {text}
      </button>
    </>
  );
};

export default Button;
