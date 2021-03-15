import React from "react";
import InputBox from "./InputBox";
import SearchText from "./SearchText";

import "./styles.css";

export default function Header(props) {
  return (
    <header className="header">
      <InputBox
        input={props.input}
        handleChange={props.handleChange}
        handleSubmit={props.handleSubmit}
      />
      <SearchText hasSearched={props.hasSearched} searchInput={props.input} />
    </header>
  );
}
