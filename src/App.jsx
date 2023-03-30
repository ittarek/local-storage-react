import { useState } from "react";

import "./App.css";
import Home from './component/home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./component/header/Header";
import SideCard from "./component/home/card/SideCard";




function App() {
  const [watchTime ,setWatchTime] = useState('')
  const [count, setCount] = useState(0);
  const HandleWatchTIme = (time) => {
        const previousWatchTime = JSON.parse(localStorage.getItem('watchTime'));
        // console.log(previousWatchTime);
        if(previousWatchTime){
        const sum = previousWatchTime + time;
        localStorage.setItem('watchTime', sum)
        setWatchTime(sum)
        }else{
          localStorage.setItem('watchTime',time)
          setWatchTime(time)
        }
  }

  return (
    <div className="App">
     
<Header></Header>
      <div className="main row">

        <div className="home-container col-md-8 ">
        <Home HandleWatchTIme ={HandleWatchTIme}></Home>
        </div>
        <div className="side-card col-md-4 card">
          <SideCard watchTime={watchTime}></SideCard>
        </div>
      </div>
     
    </div>
  );
}

export default App;
