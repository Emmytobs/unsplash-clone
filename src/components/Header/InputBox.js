import React from "react";
import searchIcon from "./search-icon.png";

export default function InputBox(props) {
  return (
    <form onSubmit={props.handleSubmit}>
      <img
        src={searchIcon}
        alt="Search Icon"
        width="24px"
        height="24px"
        style={{ marginLeft: "12px" }}
      />
      <input
        name="searchInput"
        type="search"
        value={props.input}
        className="image-input"
        onChange={props.handleChange}
        placeholder="Search for photos (ex: flower)"
      />
    </form>
  );
}
