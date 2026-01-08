import React, { useState } from "react";

interface SearchbarProps {
  onSearch: (query: string) => void;
}

const Searchbar: React.FC<SearchbarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div className="flex w-full z-0">
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={handleChange}
        className="p-2 rounded-tl-lg  border border-gray-300 w-full focus:outline-none focus:ring-2 focus:ring-blue-200"
      />
      <button
        onClick={handleSearch}
        className="px-4 py-2 rounded-tr-lg bg-blue-500 text-white  hover:bg-blue-600 active:bg-blue-500 transition cursor-pointer material-symbols-outlined"
      >
        search
      </button>
    </div>
  );
};

export default Searchbar;
