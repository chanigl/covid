import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import ListCountry from "../ListCountry/ListCountry";
import "./Navbar.css";
import axios from "axios";

const styleNav = {
  display: "flex",
  justifyContent: "space-around",
  texttTansform: "uppercase",
  backgroundColor: "cornflowerblue",
  height: "150px",
};

const Navbar = ({ countryList, setCountryList, inputValue, setInputValue, isClick, setIsClick }) => {

  async function listCountries() {
    const countryUrl = "https://corona-api.com/countries";
    const { data } = await axios.get(countryUrl);
    // console.log(data);
    setCountryList(data.data.map((el) => ({ name: el.name, code: el.code })));
  }

  useEffect(() => {
    listCountries();
  }, []);

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
          value={inputValue}
          onClick={() => {
            setIsClick(true);
          }}
          onChange={(e) => {
            setInputValue(e.target.value);
            console.log(inputValue);
          }}
        />{" "}
        {isClick ?<div className="list">{ (
          <ListCountry
            countryList={countryList}
            inputValue={inputValue}
            setInputValue={setInputValue}
            setIsClick={setIsClick}
              />
        )}</div> : null}
      </div>
      <Link to="/about">
        <h1 className="title">About</h1>
      </Link>
    </div>
  );
};

export default Navbar;
