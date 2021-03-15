import React from "react";

export default function SearchText(props) {
  //   console.log(props.hasSearched);
  return (
    <>
      {props.hasSearched && (
        <p className="search-text">Showing results for "{props.searchInput}"</p>
      )}
    </>
  );
}
