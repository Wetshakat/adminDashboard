import { MdBroadcastOnHome } from "react-icons/md";
import { FaCentercode, FaStarOfLife } from "react-icons/fa";
import { FaChargingStation } from "react-icons/fa6";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import React from 'react';

const Chart = () => {
  return (
    <div className="w-full bg-white p-2 rounded-lg shadow-md">
      
      <div className="flex justify-between items-center mb-4">
        
       
        <div className="flex items-center gap-3">
          <FaChargingStation className="text-green-900 text-lg" />
          <p className="font-semibold text-gray-700">Patient Statistics</p>
        </div>

        
        <div className="flex gap-6 text-gray-600 text                                                                   -sm">
          <p>Patient</p>
          <p>Inpatient</p>
        </div>

        <div className="flex gap-3">
          <MdBroadcastOnHome className="text-green-600 text-xl" />
          <FaCentercode className="text-green-600 text-xl" />
        </div>
      </div>

      
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="patient" fill="green" barSize={20} name="Patient" />
          <Bar dataKey="inpatients" fill="yellow" barSize={20} name="Inpatients" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

const data = [
  { day: 'Monday', patient: 700, inpatients: 500 },
  { day: 'Tuesday', patient: 600, inpatients: 400 },
  { day: 'Wednesday', patient: 700, inpatients: 450 },
  { day: 'Thursday', patient: 500, inpatients: 250 },
  { day: 'Friday', patient: 800, inpatients: 500 },
  { day: 'Saturday', patient: 750, inpatients: 450 },
  { day: 'Sunday', patient: 650, inpatients: 400 },
];

export default Chart;
