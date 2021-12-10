import React from "react";
import { Button } from "../Button/Button";
import "./Search.css";

const Search = ({ setSearch, updatePageNumber }) => {
  let searchBtn = (e) => {
    e.preventDefault();
  };
  return (
    <form className="d-flex flex-sm-row flex-column align-items-center justify-content-center gap-4 mb-5"
    >
      <input
        onChange={(e) => {
          updatePageNumber(1);
          setSearch(e.target.value);
        }}
        placeholder="Search for characters"
        className="searchInput"
        type="text"
      />
      <button
        onClick={searchBtn}
        className="searchBTN btn btn-primary fs-5"
      >
        Search
      </button>
      <Button class="searchBTN btn btn-primary fs-5" content="+" />
    </form>
  );
};

export default Search;
