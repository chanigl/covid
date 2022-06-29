import React, { useEffect, useState } from "react";
import axios from "axios";
import './Home.css';
import Sort from "../../components/Sort/Sort";

const Home = () => {
  
  const [time, setTime] = useState([]);

  async function timeline() {
    const countryUrl = `https://corona-api.com/timeline`;
    const { data } = await axios.get(countryUrl);
    const dataTimeLine = data.data[0];
    setTime([
       dataTimeLine.confirmed.toLocaleString(),
      dataTimeLine.deaths.toLocaleString(),
      dataTimeLine.active.toLocaleString(),
      dataTimeLine.new_confirmed.toLocaleString(),
      dataTimeLine.new_deaths.toLocaleString(),
    ]);
  }
  useEffect(()=>{
    timeline();
  },[])
  return (
    <>
      <div className="total">total cases: {time[0]}</div>
      <div className="confirmed">
        <span className="spanconfirmed">   deaths: {time[1]}</span>
        <span className="spanconfirmed">   recovered:  {time[2]}</span>
        <span className="spanconfirmed">   new cases:  {time[3]}</span>
        <span className="spanconfirmed">  new deaths:  {time[4]}</span>
      </div>
      <Sort/>
   </>
  );
};

export default Home;
