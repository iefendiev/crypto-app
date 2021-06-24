import React from 'react';

const Search = ({ search, setSearch }) => {
  return (
    <div className="search-form">
      <input
        placeholder="Find a coin"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      ></input>
    </div>
  );
};

export default Search;
