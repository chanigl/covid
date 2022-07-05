import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import './Country.css'

const Country = () => {
  const params = useParams();

  console.log(params);

  const [coviData, setCoviData] = useState([]);
  const [coviDatActive, setCoviDatActive] = useState([]);

  async function countryData() {
    const countryUrl = `https://corona-api.com/countries/${params.code}`;
    const { data } = await axios.get(countryUrl);
     console.log(data);
    const dataList = data.data.latest_data;

    data.data.timeline[0] === undefined
      ? setCoviDatActive(["no data"])
      : setCoviDatActive(data.data.timeline[0].new_confirmed.toLocaleString());
    setCoviData([
      dataList.confirmed.toLocaleString(),
      dataList.recovered.toLocaleString(),
      data.data.today.deaths.toLocaleString(),
      dataList.deaths.toLocaleString(),
      dataList.critical.toLocaleString(),
    ]);
  }

  useEffect(() => {
    countryData();
  }, [params]);

  return (
    <>
      <div>
        <h1>{params.name}:</h1>
        <hr />
        <div className="datadiv">
        <div><span>active:</span> {coviDatActive}</div>
        <div><span>cases: </span>{coviData[0]}</div>
        <div><span>recovered:</span> {coviData[1]}</div>
        <div><span>today:</span> {coviData[2]}</div>
        <div><span>deaths:</span> {coviData[3]}</div>
        <div><span>critical: </span>{coviData[4]}</div>
      </div>
      </div>
    </>
  );
};

export default Country;
