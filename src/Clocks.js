import React, { useState, useEffect } from "react";
import data from "./data";

function Clocks() {
  let [myDate, setMyDate] = useState(new Date());
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let [myClocks, setMyClocks] = useState([
    {
      capital: "Santo Domingo",
      offset: -4,
    },
    {
      capital: "Madrid",
      offset: 1,
    },
    {
      capital: "Tokyo",
      offset: 8,
    },
  ]);
  const AllClocks = data;

  function msToTime(duration, addHr) {
    var seconds = Math.floor((duration / 1000) % 60),
      minutes = Math.floor((duration / (1000 * 60)) % 60),
      hours = Math.floor(((duration / (1000 * 60 * 60)) % 24) + addHr);
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    if (hours < 24) return hours + ":" + minutes + ":" + seconds;
    else {
      hours = hours - 24;
      return hours + ":" + minutes + ":" + seconds;
    }
  }

  function addToMyClocks(city) {
    const copyArray = [...myClocks];
    copyArray.push(AllClocks.find((el) => el.capital === city));
    setMyClocks(copyArray);
  }

  function deleteFromMyClocks(city) {
    const copyArray = myClocks.filter((el) => el.capital !== city.capital);
    setMyClocks(copyArray);
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setMyDate(new Date());
      return () => clearInterval(timer);
    }, 1000);
  });

  return (
    <div>
      <br />
      <div className="btnGroup">
        <label htmlFor="cities">ADD CITY</label>
        <select
          name="cities"
          id="cities"
          defaultValue="bydefault"
          onChange={(e) => addToMyClocks(e.target.value)}
        >
          <option value="bydefault" disabled hidden>
            --Please choose an option--
          </option>
          {AllClocks.map((el, index) => {
            return (
              <option key={index} value={el.capital}>
                {el.capital}
              </option>
            );
          })}
        </select>
      </div>
      <br />
      <h3>{`${
        months[myDate.getMonth()]
      } ${myDate.getDate()}, ${myDate.getFullYear()}`}</h3>
      <h2>THE COORDINATED UNIVERSAL TIME IS</h2>
      <h1>{msToTime(myDate, 0)}</h1>
      <section>
        {myClocks.map((el, index) => {
          return (
            <div key={index}>
              <h6 onClick={() => deleteFromMyClocks(el)}>X</h6>
              <h4>{el.capital}</h4>
              <h5>{msToTime(myDate, el.offset)}</h5>
            </div>
          );
        })}
      </section>
    </div>
  );
}

export default Clocks;
