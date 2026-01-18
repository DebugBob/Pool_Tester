import { useState } from "react";
import Searchbar from "./Searchbar.tsx";

interface sidebarProps {
  data: any[];
  onSelectCustomer: (customer: any) => void;
  onCreateNew: () => void;
}

const Sidebar = ({ data, onSelectCustomer, onCreateNew }: sidebarProps) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="md:flex flex-col h-screen p-4 pt-20 w-3xs bg-white items-center justify-center rounded-sm border-r-2 border-gray-100 hidden md:visible">
      <Searchbar onSearch={setSearchTerm} />
      <button
        onClick={onCreateNew}
        className="bg-gray-50 py-4 w-full border-b cursor-pointer font-semibold border-gray-200 hover:bg-gray-200 focus:bg-blue-200 focus:border-l-4 focus:border-blue-300"
      >
        Create new
      </button>
      <div className="bg-gray-50 h-full w-full rounded-b-xl overflow-y-scroll overscroll-contain active:cursor-grab">
        <div>
          {filteredData.map((item, idx) => (
            <button
              key={idx}
              onClick={() => onSelectCustomer(item)}
              className="flex items-center justify-between bg-white py-4 w-full border-b cursor-pointer font-semibold border-gray-200 hover:bg-gray-100 focus:bg-blue-200 focus:border-l-4 focus:border-blue-300"
            >
              <span className="material-symbols-outlined px-2 text-blue-500">
                experiment
              </span>
              <span className="flex flex-col items-start">
                <div>{item.name}</div>
                <div>{item.date}</div>
              </span>
              <span className="material-symbols-outlined text-gray-400">
                {" "}
                chevron_right{" "}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
