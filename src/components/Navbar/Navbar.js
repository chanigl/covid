import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ListCountry from "../ListCountry/ListCountry";
import "./Navbar.css";

const styleNav = {
  display: "flex",
  justifyContent: "space-around",
  texttTansform: "uppercase",
  backgroundColor: "cornflowerblue",
  height: "150px",
};
const Navbar = ({ countryList, setCountryList, inputValue, setInputValue }) => {
  const [isClick, setIsClick] = useState(false);

  return (
    <div style={styleNav}>
      <Link to="/home">
        <h1 className="title">Home</h1>
      </Link>
      <div className="search">
        <button
          className="clear"
          onClick={() => {
            setIsClick(false);
            setInputValue("");
          }}
        >
          x
        </button>
        <input
          className="input"
          style={{ display: "flex", width: "200px", height: "40px" }}
          type="text"
          placeholder="searchCountry"
          onClick={() => {
            setIsClick(true);
            console.log(isClick);
          }}
          onChange={(e) => {
            setInputValue(e.target.value);
            console.log(inputValue);
          }}
        />{" "}
        {isClick ? (
          <ListCountry
            countryList={countryList}
            setCountryList={setCountryList}
            inputValue={inputValue}
            setInputValue={setInputValue}
          />
        ) : null}
      </div>
      <Link to="/about">
        <h1 className="title">About</h1>
      </Link>
    </div>
  );
};

export default Navbar;
