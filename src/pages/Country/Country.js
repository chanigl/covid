import React, { useEffect, useState } from "react";
import axios from "axios";
import ListCountry from "../../components/ListCountry/ListCountry";
import { useParams } from "react-router-dom";

const Country = () => {
  const params = useParams();

  console.log(params.code);

  const [coviData, setCoviData] = useState([]);
  // const [cases, setCases] = useState('')
  // const [recovered, setRecovered] = useState('')
  // const [today, setToday] = useState([])
  // const [deaths, setDeaths] = useState('')
  // const [critical, setCritical] = useState('')
  // const [code, setCode] = useState('')

  async function countryData() {
    const countryUrl = `https://corona-api.com/countries/${params.code}`;
    const { data } = await axios.get(countryUrl);
    console.log(data);
    const dataList = data.data.latest_data;
    setCoviData([
      data.data.timeline[0].new_confirmed,
      dataList.confirmed,
      dataList.recovered,
      data.data.today.deaths,
      dataList.deaths,
      dataList.critical
    ]);
    // setCases(dataList.confirmed)
    // setRecovered(dataList.recovered)
    // setToday(data.data.today.deaths)
    // setDeaths(dataList.deaths)
    // setCritical(dataList.critical)
    console.log({ coviData });
  }

  useEffect(() => {
    countryData();
  }, []);

  return (
    <div>
      <h1>{params.name}:</h1>
      <hr />
      <div>active: {coviData[0]}</div>
      <div>cases: {coviData[1]}</div>
      <div>recovered: {coviData[2]}</div>
      <div>today: {coviData[3]}</div>
      <div>deaths: {coviData[4]}</div>
      <div>critical: {coviData[5]}</div>
    </div>
  );
};

export default Country;
