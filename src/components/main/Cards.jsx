import React from "react";
import { IoStatsChartOutline } from "react-icons/io5";
import { BsThreeDots } from "react-icons/bs";
import { MdKeyboardCommandKey } from "react-icons/md";
import { FaChargingStation } from "react-icons/fa6";

const Cards = () => {
  return (
    <div className="p-3 grid grid-cols-4 gap-4 bg-gray-200">
      
      <div className="bg-[#08301cce] rounded-lg text-white p-4 h-[230px]">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-2">
            <div className="bg-green-800 rounded-lg h-[40px] w-[40px] flex items-center justify-center">
              <FaChargingStation className="text-2xl text-white" />
            </div>
            <p className="text-lg">Overall Visitors</p>
          </div>
          <BsThreeDots className="cursor-pointer" />
        </div>
        <div className="flex justify-center items-center gap-4">
          <h2 className="text-4xl font-bold">10,525</h2>
          <div className="w-[60px] h-[35px] bg-[#20f189ce] rounded-full flex items-center justify-center text-white text-sm">
            15.2%
          </div>
        </div>
        <div className="p-2">
          <p className="text-sm mb-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <div className="w-full h-[10px] bg-green-950 rounded-full">
            <div className="w-[75%] h-[10px] bg-white rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Card 2 */}
      <div className="bg-white rounded-lg text-[#08301cce] p-4 h-[230px]">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-2">
            <div className="bg-white rounded-lg h-[40px] w-[40px] flex items-center justify-center">
              <IoStatsChartOutline className="text-2xl text-green-950" />
            </div>
            <p className="text-lg">New Users</p>
          </div>
          <BsThreeDots className="cursor-pointer" />
        </div>
        <div className="flex justify-center items-center gap-4">
          <h2 className="text-4xl font-bold">2,340</h2>
          <div className="w-[60px] h-[35px] bg-[#f9fdfbce] rounded-full flex items-center justify-center text-green-950 text-sm">
            8.9%
          </div>
        </div>
        <div className="p-2">
          <p className="text-sm mb-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <div className="w-full h-[10px] bg-green-950 rounded-full">
            <div className="w-[50%] h-[10px] bg-green-300 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Card 3 */}
      <div className="bg-white rounded-lg text-[#08301cce] p-4 h-[230px]">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-2">
            <div className="bg-white rounded-lg h-[40px] w-[40px] flex items-center justify-center">
              <MdKeyboardCommandKey className="text-2xl text-green-950" />
            </div>
            <p className="text-lg">Revenue</p>
          </div>
          <BsThreeDots className="cursor-pointer" />
        </div>
        <div className="flex justify-center items-center gap-4">
          <h2 className="text-4xl font-bold">$15,640</h2>
          <div className="w-[60px] h-[35px] bg-[#eff5f2ce] rounded-full flex items-center justify-center text-green-950 text-sm">
            22.1%
          </div>
        </div>
        <div className="p-2">
          <p className="text-sm mb-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <div className="w-full h-[10px] bg-green-900 rounded-full">
            <div className="w-[85%] h-[10px] bg-green-300 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Card 4 */}
      <div className="bg-[#fbfcfbce] rounded-lg text-green-950 p-4 h-[230px]">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-2">
            <div className="bg-white rounded-lg h-[40px] w-[40px] flex items-center justify-center">
              <IoStatsChartOutline className="text-2xl text-green-950" />
            </div>
            <p className="text-lg">Feedback</p>
          </div>
          <BsThreeDots className="cursor-pointer" />
        </div>
        <div className="flex justify-center items-center gap-4">
          <h2 className="text-4xl font-bold">987</h2>
          <div className="w-[60px] h-[35px] bg-[#eef1f0ce] rounded-full flex items-center justify-center text-green-950 text-sm">
            5.6%
          </div>
        </div>
        <div className="p-2">
          <p className="text-sm mb-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <div className="w-full h-[10px] bg-gray-300 rounded-full">
            <div className="w-[30%] h-[10px] bg-green-950 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
