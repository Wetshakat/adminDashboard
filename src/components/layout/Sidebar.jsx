import React from 'react';
import { 
  FaRegCalendarAlt, FaUserMd, FaUsers, FaBuilding, 
  FaMoneyBillWave, FaBoxes, FaRegQuestionCircle, 
  FaCog, FaChartBar 
} from "react-icons/fa";
import { MdDashboard } from "react-icons/md";

const Sidebar = () => {
  return (
    <div className="w-56 border-r h-full bg-white p-5 overflow-y-auto scrollbar-hide">
      {/* Logo Section */}
      <div className="flex items-center space-x-2 mb-6">
        <img 
          className="rounded-lg" 
          width={30} 
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOzXJYWrI0RAiRJIPFkXujwO64avZtKbJZatDmLeos-eFM-WTR" 
          alt="logo" 
        />
        <div className="text-black text-2xl font-medium">
          We<span className="font-normal">Care</span>
        </div>
      </div>

      {/* Sidebar Navigation */}
      <nav>
        <SidebarSection title="Main Menu">
          <SidebarItem icon={MdDashboard} label="Overview" active />
          <SidebarItem icon={FaUsers} label="Patients" />
          <SidebarItem icon={FaRegCalendarAlt} label="Appointments" />
        </SidebarSection>

        <SidebarSection title="Other Menu">
          <SidebarItem icon={FaUserMd} label="Doctors" />
          <SidebarItem icon={FaUsers} label="Employees" />
          <SidebarItem icon={FaBuilding} label="Departments" />
          <SidebarItem icon={FaMoneyBillWave} label="Payments" />
          <SidebarItem icon={FaBoxes} label="Products & Stock" />
        </SidebarSection>

        <SidebarSection title="Help & Settings">
          <SidebarItem icon={FaRegQuestionCircle} label="Help Center" />
          <SidebarItem icon={FaCog} label="Settings" />
          <SidebarItem icon={FaChartBar} label="Reports" />
        </SidebarSection>
      </nav>
    </div>
  );
};

// Sidebar Section Component
const SidebarSection = ({ title, children }) => (
  <>
    <h3 className="text-gray-500 text-sm mt-6 mb-2">{title}</h3>
    <ul className="space-y-2">{children}</ul>
  </>
);

// Sidebar Item Component
const SidebarItem = ({ icon: Icon, label, active }) => {
  return (
    <li className={`flex items-center space-x-3 p-2 rounded-lg cursor-pointer hover:bg-teal-100 transition duration-300 ease-in-out ${active ? 'bg-teal-100' : ''}`}>
      <Icon className="text-gray-600 text-lg" />
      <span className="text-gray-700 font-normal">{label}</span>
    </li>
  );
};

export default Sidebar;
