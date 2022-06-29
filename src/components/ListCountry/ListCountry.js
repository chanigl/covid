import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './ListCountry.css'

const ListCountry = () => {
  const navigate = useNavigate();

  const [countryList, setCountryList] = useState([]);

  async function listCountries() {
    const countryUrl = "https://corona-api.com/countries";
    const { data } = await axios.get(countryUrl);
    console.log(data);
    setCountryList(data.data.map((el) => `${el.name}  :${el.code}`));
    console.log({ countryList });
  }

  return (
    <div>
        <select
          onClick={listCountries}
          onChange={(e) => {
            const nameCountry = e.target.value.split(":")[0];
            const codeCountry = e.target.value.split(":")[1];
            navigate(`../country/${nameCountry}/${codeCountry}`);
          }}
        >
          <option>'searchCountry'</option>
          {countryList.map((el) => (
            <option>{el}</option>
          ))}
        </select>
      </div>
  );
};

export default ListCountry;
