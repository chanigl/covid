import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ListCountry.css";

const ListCountry = ({ countryList, inputValue, setInputValue, setIsClick }) => {
  
  const navigate = useNavigate();
  const [values, setValues] = useState(countryList);


  useEffect(() => {
    console.log(countryList);
    if (!inputValue=="")
    {const filter = countryList.filter((cur) =>
      cur.name?.toLowerCase().includes(inputValue?.toLowerCase())
    );
    console.log(filter);
    setValues(filter);}
  }, [inputValue]);

  return (
      <div className="option">
        {values.map((el) => (
          <option 
            onClick={() => {
              console.log(el);
              console.log(el.name);
              setInputValue(el.name)
              navigate(`../country/${el.name}/${el.code}`);
              setIsClick(false)
            }}
          >
            {el.name}
          </option>
        ))}
      </div>
  );
};

export default ListCountry;
