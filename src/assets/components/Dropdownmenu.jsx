import { useState } from "react";
import Megamenu from "./Megamenu";
const Dropdownmenu = () => {
  
    const [megaMenuVisible, setMegaMenuVisible] = useState(false);

    const toggleMegaMenu = () => {
        setMegaMenuVisible(!megaMenuVisible);
      };


  return (
    <>
    <div className="mt-2 w-full sm:w-80 md:w-60 lg:w-40">
    <div className="font-normal bg-white md:text-lg  shadow divide-y divide-gray-100 dark:bg-gray-700 dark:divide-gray-600">
      <ul
        className="py-2 text-sm text-gray-700 dark:text-gray-400"
        aria-labelledby="dropdownLargeButton"
      >
        <li>
          <button
              onClick={toggleMegaMenu}
            className="flex px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
          >
            Dashboard{" "}
            <svg
              className="w-2.5 h-2.5 ml-2.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>
        </li>
        <li>
          <a
            href="#"
            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
          >
            Settings
          </a>
        </li>
        <li>
          <a
            href="#"
            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
          >
            Earnings
          </a>
        </li>
      </ul>
    </div>
    </div>
    <div>
     {megaMenuVisible && (
         <div className=" top-0 left-0 w-full h-full z-10">
        <Megamenu />
        
    </div>
    )}
    </div>
    </>


  );
};

export default Dropdownmenu;
