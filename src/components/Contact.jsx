import React from "react";

const Contact = () => {
  return (
    <div>
      <div className="">
        <div className="contact text-center flex justify-center items-center pt-10">
          <h1 className="text-black border-b-2 border-orange-400 inline-block text-xl font-medium">
            Contact Form for 59th Foundation Day
          </h1>
        </div>
        <form action="" className="mt-4 w-[50%] m-auto">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter Name"
              className="border-b-2 border-black py-2 px-2 outline-none"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter email"
              className="border-b-2 border-black py-2 px-2 outline-none"
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              rows={4}
              placeholder="Add some relevant message"
              className="border-2 border-green-700 rounded-md overflow-x-hidden outline-none"
            ></textarea>
          </div>
          <div>
            <button className="py-3 bg-blue-500 w-full rounded-md text-white font-semibold" onClick={()=>{
              alert("Your response has been submitted. Stay tuned for the next information.")
            }}>Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
