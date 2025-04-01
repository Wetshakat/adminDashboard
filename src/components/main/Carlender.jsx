import React from "react";
import Calendar from "react-calendar";
import Button from "../utility/Button";

const CarlendarComponent = () => {
  return (
    <div className="w-full sm:w-[80%] md:w-[60%] lg:w-[50%] mx-auto mt-8">
      
      <div className="flex flex-col sm:flex-row gap-6 justify-center">
        
        <div className="bg-white p-4 shadow-md rounded-lg w-full max-w-[700px] mx-auto">
          <Calendar className="text-sm" />
        </div>

        <div className="w-full max-w-[600px] text-sm mx-auto">
          <ul>
            <li className="font-bold text-lg text-green-950 mb-2">Activity Details</li>
            <li className="flex items-center gap-2">
              <span className="bg-green-600 w-2 h-2 rounded-full inline-block"></span>
              Meet Dr.
            </li>
            <li className="flex items-center  gap-2">
              <span className="bg-green-600 w-2 h-2 rounded-full inline-block"></span>
              Meet Dentist
            </li>
            <li className="flex items-center gap-2">
              <span className="bg-green-600 w-2 h-2 rounded-full inline-block"></span>
              MeetUp
            </li>
          </ul>

          <div className="mt-6">
            <Button
              text="Add"
              onClick={() => alert("Add New Clicked!")}
              className="bg-white border border-gray-500 text-black text-sm px-2 py-1 rounded-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarlendarComponent;
