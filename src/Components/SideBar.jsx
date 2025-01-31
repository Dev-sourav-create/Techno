import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSlack } from "@fortawesome/free-brands-svg-icons";
import { faPowerOff, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Sidebar = ({ data, handleLogOut }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-full "
        onClick={() => setIsOpen(!isOpen)}
      >
        <FontAwesomeIcon icon={isOpen ? faTimes : faBars} size="lg" />
      </button>

      <div
        className={`fixed top-0 left-0 h-screen w-60 bg-white border-r-2 p-6 transform ${
          isOpen ? "translate-x-0 w-48" : "-translate-x-full "
        } transition-transform duration-500 lg:translate-x-0 lg:static`}
      >
        <div className="flex flex-col h-full font-sans text-black">
          <div className="flex items-start h-32">
            <span className="mr-4 mt-8">
              <FontAwesomeIcon
                icon={faSlack}
                size="2xl"
                style={{ color: "#63E6BE" }}
              />
            </span>
            <h2 className="text-2xl mt-8 font-bold">logip</h2>
          </div>

          <ul className="mt-6 text-gray-400">
            <li className="flex items-center mb-10 space-x-2 font-semibold">
              <span>🏠</span>
              <span className="cursor-pointer font-semibold hover:text-gray-700">
                Home
              </span>
            </li>
            <li className="flex items-center mb-10 space-x-2">
              <span>📂</span>
              <span className="cursor-pointer font-semibold hover:text-gray-700">
                Projects
              </span>
            </li>
            <li className="flex items-center mb-10 space-x-2">
              <span>📋</span>
              <span className="cursor-pointer font-semibold hover:text-gray-700">
                Tasks
              </span>
            </li>
            <li className="flex items-center mb-10 space-x-2">
              <span>👥</span>
              <span className="cursor-pointer font-semibold hover:text-gray-700">
                Team
              </span>
            </li>
            <li className="flex items-center mb-10 space-x-2">
              <span>⚙️</span>
              <span className="cursor-pointer font-semibold hover:text-gray-700">
                Settings
              </span>
            </li>
          </ul>

          <button
            onClick={handleLogOut}
            className="cursor-pointer text-left text-gray-400 font-semibold hover:text-gray-700 mt-auto"
          >
            <FontAwesomeIcon
              className="mr-2"
              icon={faPowerOff}
              style={{ color: "#B197FC" }}
            />
            Log out
          </button>
        </div>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0   lg:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </div>
  );
};

export default Sidebar;
