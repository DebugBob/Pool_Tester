import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex absolute top-0 font-semibold text-gray-500 bg-white min-w-full h-16 px-4 border-b border-gray-100 justify-between items-center">
      <div className="material-symbols-outlined text-blue-300 select-none">
        water
      </div>
      <div className="flex gap-10 text-xl h-full">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            `flex items-center px-4 ${
              isActive
                ? "text-blue-500 rounded-b border-b"
                : "hover:text-gray-300"
            }`
          }
        >
          Customers
        </NavLink>
        <NavLink
          to="/schedule"
          className={({ isActive }) =>
            `flex items-center px-4 ${
              isActive
                ? "text-blue-500 rounded-b border-b"
                : "hover:text-gray-300"
            }`
          }
        >
          Schedule
        </NavLink>
      </div>
      <button className="material-symbols-outlined cursor-pointer text-gray-600 hover:text-blue-500 active:text-gray-500">
        settings
      </button>
    </div>
  );
};

export default Navbar;
