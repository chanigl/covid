import React, { useEffect, useState } from "react";
import axios from "axios";
import './Home.css';

const Home = () => {
  
  const [time, setTime] = useState([]);

  async function timeline() {
    const countryUrl = `https://corona-api.com/timeline`;
    const { data } = await axios.get(countryUrl);
    console.log(data);
    const dataTimeLine = data.data[0];
    console.log(dataTimeLine.confirmed);
    setTime([
      dataTimeLine.confirmed,
      dataTimeLine.deaths,
      dataTimeLine.active,
      dataTimeLine.new_confirmed,
      dataTimeLine.new_deaths,
    ]);
    console.log(time);
  }
  useEffect(()=>{
    timeline();
  },[])
  return (
    <>
      <div className="total">total cases{time[0]}</div>
      <div className="confirmed">
        <span>  deaths{time[1]}</span>
        <span>  recovered{time[2]}</span>
        <span>  new cases{time[3]}</span>
        <span>  new deaths{time[4]}</span>
      </div>
    </>
  );
};

export default Home;
