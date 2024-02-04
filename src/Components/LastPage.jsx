import React from 'react';
import Path from './Path';
import list from './TSP';
import places from './Api';

function LastPage() {
  const tour =list[0];
  return (
    <div className='m-5'>
      <Path place={places[0]}/>
      {tour.map((elements)=>{
        if(elements!=0){
          return(<Path place={places[elements]}/>);
        }
      })}
      
      <div className="itinerary-item__point-icon">
            <svg width="1em" height="1em" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-4a4 4 0 100-8 4 4 0 000 8z" fill="black">
              </path>
            </svg>
          </div>
          <div className='heading'>
            <h3>{places[0]}</h3>
          </div>

          <div className="h3 my-5">Total distance to be travelled: {list[1]}</div>

    </div>
  )
}

export default LastPage
