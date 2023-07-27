import React from "react";

interface SidebarProps {
  isOpen: boolean;
}

const SidebarLeft: React.FC<SidebarProps> = ({ isOpen }) => {
  return (
    <div className={`sidebar bg-gray-300 ${isOpen ? "open" : ""}`}>
      {isOpen ? (
        <div>
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

export default SidebarLeft;
