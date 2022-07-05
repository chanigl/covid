import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./ListCountry.css";

const ListCountry = ({ countryList, setCountryList, inputValue }) => {
  const navigate = useNavigate();
  const [value, setValue] = useState(countryList);

  async function listCountries() {
    const countryUrl = "https://corona-api.com/countries";
    const { data } = await axios.get(countryUrl);
    console.log(data);
    // setCountryList(data.data.map((el) => `${el.name}  :${el.code}`));
    setCountryList(data.data.map((el) => ({ name: el.name, code: el.code })));
  }

  useEffect(() => {
    listCountries();
  }, []);

  useEffect(() => {
    console.log(countryList);
    const filter = countryList.filter((cur) =>
      cur.name.toLowerCase().includes(inputValue.toLowerCase())
    );
    console.log(filter);
    setValue(filter);
  }, [inputValue]);

  return (
    <div>
      <div
        style={{
          overflow: "scroll",
          height: "150px",
          width: "150px",
          border: "1px solid black",
          backgroundColor: "white",
        }}
      >
        {value.map((el) => (
          <option
            onClick={() => {
              console.log(el);
              navigate(`../country/${el.name}/${el.code}`);
            }}
          >
            {el.name}
          </option>
        ))}
      </div>
    </div>
  );
};

export default ListCountry;
