import { useState } from "react";
import { Link } from "react-router-dom";
import Avatar from "../../assets/avatar.png";
import Monoma from "../../assets/monoma.jpeg";

export const Navbar = () => {
 
  const [ open, setOpen ] = useState( false );

  return (
    <>
      <nav className="bg-slate-500 bg-gradient-to-r from-green-300 p-2 w-full">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <div className="flex items-center">
            <img
              src={ Monoma }
              className="h-6 mr-3 sm:h-10"
              alt="Flowbite Logo"
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap text-white">
              MONOMA TECHNOLOGY
            </span>
          </div>
          <div>
            <img
              onClick={() => setOpen( !open )}
              className="w-10 h-10 rounded-full cursor-pointer"
              src={ Avatar }
              alt="User dropdown "
            />
            <h2 className="text-green-300 -ml-3">Welcome</h2>
            {open && (
              <div className="bg-white p-8 shadow-xl absolute top-20 rounded-xl -ml-12">
                <ul>
                  <li className="font-sans  bg-white hover:bg-green-300 rounded-xl">
                    <Link to="/Login"> Logout </Link>                 
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};
