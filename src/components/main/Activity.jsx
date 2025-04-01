import React from 'react';
import Navbar from '../layout/Navbar';
import Heading from '../layout/Heading';
import Cards from './Cards';
import Chart from '../utility/Chart';
import Carlender from './Carlender';
import Table from './Table';

const Activity = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <div className="p-4">
        <Heading />
      </div>

      <div className="bg-gray-200 p-4">
        <Cards />
      </div>

      
      <div className="flex gap-6 p-6 bg-white">
        
        <div className="w-[60%] flex justify-center">
          <div className="w-full max-w-4xl">
            <Chart />
          </div>
        </div>

        
        <div className="w-[40%] flex justify-center">
          <div className="w-full max-w-lg">
            <Carlender />
          </div>
        </div>
      </div>

      <Table/>
    </div>
  );
};

export default Activity;
