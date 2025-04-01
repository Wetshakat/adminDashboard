import React from "react";

const Table = () => {
  return (
    <div className="mt-6 bg-white p-4 rounded-xl shadow">
      <h3 className="text-lg font-semibold mb-4">All Patients</h3>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="px-4 py-2">ID</th>
              <th className="px-4 py-2">Patient Name</th>
              <th className="px-4 py-2">Age</th>
              <th className="px-4 py-2">Created Date</th>
              <th className="px-4 py-2">Time</th>
              <th className="px-4 py-2">Type</th>
              <th className="px-4 py-2">Status</th>
            </tr>
          </thead>

          <tbody>
            <tr className="border-b">
              <td className="px-4 py-3">01</td>
              <td className="px-4 py-3">Isagi Yoichi</td>
              <td className="px-4 py-3">20</td>
              <td className="px-4 py-3">25 Dec 2023</td>
              <td className="px-4 py-3">08:30 PM</td>
              <td className="px-4 py-3">FUP-ECG</td>
              <td className="px-4 py-3">
                <span className="text-yellow-500 bg-yellow-100 px-3 py-1 rounded-3xl">
                  Pending
                </span>
              </td>
            </tr>

            <tr className="border-b">
              <td className="px-4 py-3">02</td>
              <td className="px-4 py-3">Kaiser Brown</td>
              <td className="px-4 py-3">23</td>
              <td className="px-4 py-3">01 Dec 2023</td>
              <td className="px-4 py-3">12:30 PM</td>
              <td className="px-4 py-3">FUP</td>
              <td className="px-4 py-3">
                <span className="text-green-500 bg-green-100 px-3 py-1 rounded-3xl">
                  Confirmed
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
