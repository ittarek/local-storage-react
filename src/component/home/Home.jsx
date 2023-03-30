import React, { useEffect } from "react";
import { useState } from "react";
import SingleCard from "./card/SingleCard";

const Home = ({HandleWatchTIme}) => {
  const [movies, setMovies] = useState([]);
//   deffendencey 
//   const [control ,setControl] = useState(false);

  useEffect(()=>{
          fetch('data.json')
          .then(res => res.json())
          .then(data => setMovies(data))
  },[])
//   console.log(movies);
  return (
    <div className="row mt-4">
          {/* defendancy onclick */}
          {/* <button onClick={()=>setControl(!control)}>render</button> */}
     
     

      {
          movies.map(movie => <SingleCard movie={movie} key={movie.poster} HandleWatchTIme={HandleWatchTIme}></SingleCard>)
      }
    </div>
  );
};

export default Home;
