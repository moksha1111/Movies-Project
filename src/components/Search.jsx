import React from "react";

const Search = ({ searchTerm, setSearchTerm }) => {
  function handlerChange(e) {
    setSearchTerm(e.target.value);
  }
  return (
    <div className="search">
      <div>
        <img src="search.svg" alt="Search Icon" />
        <input
          type="text"
          placeholder="Search through thousands of movies"
          value={searchTerm}
          onChange={handlerChange}
        />
      </div>
    </div>
  );
};

export default Search;
