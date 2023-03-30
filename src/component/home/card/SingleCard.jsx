import React from 'react';

const SingleCard = ({movie,HandleWatchTIme}) => {
          const {movieName,watchTime,description,poster,imdbRating} =movie;
          return (
                    <div className='col-md-6'>
                         <div className="movies-container card p-4 w-100">
         <div className="movie-card">
         <img className="img-fluid w-25" src={poster} alt="" />
          <h2>{movieName}</h2>
          <p>{description}</p>
          <div className="time-rating d-flex justify-content-around">
                    <p>WatchTime : {watchTime}</p>
                    <p>Rating : {imdbRating}</p>
          </div>
          <button onClick={()=>HandleWatchTIme(watchTime)} className="btn bg-success w-75">Book Now</button>
          
         </div>
      </div>      
                    </div>
          );
};

export default SingleCard;