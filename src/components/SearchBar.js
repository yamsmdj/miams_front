import React, { useState } from "react";
import Search from "../assets/Icons/search.svg";

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="relative hidden sm:block">
        <input
          type="search"
          value={searchTerm}
          onChange={handleChange}
          className="border border-black bg-transparent px-32 py-3"
          placeholder="Rechercher une recette..."
        />
        <img src={Search} alt="loupe" className=" absolute m-auto top-2" />
      </div>
      <button type="submit">Rechercher</button>
    </form>
  );
};

export default SearchBar;
