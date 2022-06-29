import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Sort.css";
import { useNavigate, useParams } from "react-router-dom";

const Sort = () => {
  const navigate = useNavigate();
  const params = useParams();

  const [sortDeaths, setSortDeaths] = useState([]);
  const [sortConfirmed, setSortConfirmed] = useState([]);
  const [sortDeathsToday, setSortDeathsToday] = useState([]);
  const [sortConfirmedToday, setSortConfirmedToday] = useState([]);

  async function setSort() {
    const countryUrl = "https://corona-api.com/countries";
    const { data } = await axios.get(countryUrl);
    setSortDeaths(
      data.data.map((el) => ({
        code: el.code,
        name: el.name,
        deaths: el.latest_data.deaths,
      }))
    );
    setSortConfirmed(
      data.data.map((el) => ({
        code: el.code,
        name: el.name,
        confirmed: el.latest_data.confirmed,
      }))
    );
    setSortDeathsToday(
      data.data.map((el) => ({
        code: el.code,
        name: el.name,
        deaths: el.today.deaths,
      }))
    );
    setSortConfirmedToday(
      data.data.map((el) => ({
        code: el.code,
        name: el.name,
        confirmed: el.today.confirmed,
      }))
    );
  }

  function sortDeath(a, b) {
    var deathsa = a.deaths;
    var deathsb = b.deaths;
    return deathsa < deathsb ? 1 : -1;
  }

  function sortConfirmeds(a, b) {
    var confirmeda = a.confirmed;
    var confirmedb = b.confirmed;
    return confirmeda < confirmedb ? 1 : -1;
  }
  sortDeaths.sort(sortDeath);
  const sortDeathSlice = sortDeaths.slice(0, 5);
  sortConfirmed.sort(sortConfirmeds);
  const sortConfirmedSlice = sortConfirmed.slice(0, 5);
  sortDeathsToday.sort(sortDeath);
  const sortDeathsTodaySlice = sortDeathsToday.slice(0, 5);
  sortConfirmedToday.sort(sortConfirmeds);
  const sortConfirmedTodaySlice = sortConfirmedToday.slice(0, 5);

  useEffect(() => {
    setSort();
  }, []);

  return (
    <div className="sort">
      <ol className="deaths">
        <h2>Most Deaths - All Time</h2>
        {sortDeathSlice.map((el) => (
          <li onClick={() => navigate(`../country/${el.name}/${el.code}`)}>
            {el.name}
          </li>
        ))}
      </ol>
      <ol className="deaths">
        <h2>Most Confiremed - All Time</h2>
        {sortConfirmedSlice.map((el) => (
          <li onClick={() => navigate(`../country/${el.name}/${el.code}`)}>
            {el.name}
          </li>
        ))}
      </ol>
      <ol className="deaths">
        <h2> Most Deaths - Today</h2>
        {sortDeathsTodaySlice.map((el) => (
          <li onClick={() => navigate(`../country/${el.name}/${el.code}`)}>
            {el.name}
          </li>
        ))}
      </ol>
      <ol className="deaths">
        <h2> Most Confiremed - Today</h2>
        {sortConfirmedTodaySlice.map((el) => (
          <li onClick={() => navigate(`../country/${el.name}/${el.code}`)}>
            {el.name}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Sort;
