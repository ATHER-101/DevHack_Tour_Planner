import React, { useState } from 'react'
import "../css/corousel.css"
import img from '../css/img1.jpg'

function CorouselCard(props) {
  const [selected, setSelected] = useState(false);

  const selectionFunc = ()=>{
    if(selected==true){
      setSelected(false);
      document.getElementById('but').innerHTML = 'Wanna go!';
    }else{
      setSelected(true);
      document.getElementById('but').innerHTML = 'Dont wanna go!';
    }
  }

  return (
    <div className="card" style={{"width": "18rem"}}>
      {/* <img src={img} className="card-img-top" alt="..."/> */}
        <div className="card-body">
          <h5 className="card-title">{props.place}</h5>
          <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi maxime enim, quaerat excepturi aperiam, quidem beatae a pariatur exercitationem necessitatibus earum? Nesciunt unde possimus similique culpa eligendi, sint et modi.</p>
          <div className="btn btn-primary" onClick={selectionFunc} id='but'>Wanna go!</div>
        </div>
    </div>
  )
}

export default CorouselCard;