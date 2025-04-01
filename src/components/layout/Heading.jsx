import React from "react";
import Button from "../utility/Button";

const Heading = () => {
  return (
    <div className="flex justify-between items-center p-4 ">
      
      <div>
        <h2 className="text-3xl text-black font-sans font-bold">
          Welcome Back, Alexandro 👋
        </h2>
        <small className="text-sm text-gray-800">
          There was a latest update 5 days ago, check for the latest.
        </small>
      </div>

     
      <div className="flex gap-3">
        <Button
          text="Last Week"
          onClick={() => alert("Last Week Clicked!")}
          className="bg-white border border-gray-500 text-black px-4 py-1 rounded-md"
        />
        <Button
          text="Export"
          onClick={() => alert("Export Clicked!")}
          className="bg-black text-white px-4 py-1 rounded-md"
        />
      </div>
    </div>
  );
};

export default Heading;
