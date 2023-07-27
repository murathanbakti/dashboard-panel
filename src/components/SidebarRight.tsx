import React, { useState } from "react";

interface SidebarProps {
  isOpen: boolean;
}


const SidebarRight: React.FC<SidebarProps> = ({ isOpen }) => {

  return (
    <div className="flex">
      {isOpen ? (
        <div className={`sidebar-right bg-gray-300 ${isOpen ? "open" : ""} w-64`}>
          <ul>
            <li>ama</li>
            <li>ama</li>
            <li>ama</li>
          </ul>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default SidebarRight;
