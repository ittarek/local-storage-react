// import React, { Component } from "react";
import React, { useEffect } from "react";
import { useState } from "react";

const SideCard = ({ watchTime }) => {
  const [time, setTime] = useState(watchTime);
  const [breakTime, setBreakTime] = useState(0);
  useEffect(() => {
    const getWatchFromLocalStorage = localStorage.getItem("watchTime");
    setTime(getWatchFromLocalStorage);
    const getBreakTime = localStorage.getItem("breakTime");
    setBreakTime(getBreakTime);
  }, [watchTime]);

  const handleBreakTime = (breakTime) => {
         localStorage.setItem("breakTime", breakTime);
         setBreakTime(breakTime);
  }
  return (
    <div>
      <h1 className="bg-success">My Card</h1>
      <div>
        <p>total watch time </p>
        <input type="text" value={time} disabled />
      </div>
      <h4>Add break time </h4>
      <button onClick={()=>handleBreakTime(15)}>15</button>
      <button>20</button>
      <button>25</button>
      <input type="text" value={breakTime} disabled />
      <button>Compleat</button>
    </div>
  );
};

export default SideCard;
