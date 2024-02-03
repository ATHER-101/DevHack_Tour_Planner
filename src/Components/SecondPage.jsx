import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import img1 from "../css/img2.jpg";
import img2 from "../css/img3.jpg";
import "../css/2.css"

function SecondPage() {
  const [place, setPlace] = useState("");
  const [range, setRange] = useState(1000);
  const [people, setPeople] = useState(0);
  const [days, setDays] = useState(0);

  const handlePlace =  (event) => {
    setPlace(event.target.value);
  }

  const handleChange = (event) => {
    setRange(event.target.value);
    console.log(range);
  }

  const subCounter = () => {
    if (people > 0) {
      setPeople(people - 1);
    }
  }

  const addCounter = () => {
    setPeople(people + 1);
  }

  const subDays = () => {
    if (days > 0) {
      setDays(days - 1);
    }
  }

  const addDays = () => {
    setDays(days + 1);
  }

  return (
    <div className='mx-5 mt-4'>
      <Link className="button" to={"/preference"} style={{"height":"auto","width":"100px", "textAlign":"center","padding":"10px","position":"absolute", "right":"30px"}}>Next</Link>
      <div>
        <label htmlFor="exampleFormControlInput1" className="form-label h1 mb-3">Where do you wanna go?</label>
        <input type="email" className="form-control col-4 mb-5" id="exampleFormControlInput1" placeholder="Goa? Maybe!" value={place} onChange={handlePlace}/>
      </div>

      <label htmlFor="customRange3" className="form-label h1 mb-3 d-block">How is your pocket?</label>
      <input type="range" className="form-range col-6" min="10000" max="100000" step="5000" id="customRange3" value={range} onChange={handleChange}></input>
      <div className="mb-5" style={{ "fontSize": "20px" }}>Rs. {range}</div>

      <label htmlFor="exampleFormControlInput2" className="form-label h1 mb-3">How many people?</label>
      <div className="input-group col-2 p-0 mb-5">
        <button className="btn btn-outline-secondary" style={{ "width": "40px" }} type="button" onClick={subCounter}>-</button>
        <div type='number' className="form-control col-4 text-center" placeholder="Recipient's username" aria-label="Recipient's username with two button addons" id='exampleFormControlInput2' style={{ "width": "30px" }} >{people}</div>
        <button className="btn btn-outline-secondary" style={{ "width": "40px" }} type="button" onClick={addCounter}>+</button>
      </div>

      <label htmlFor="exampleFormControlInput2" className="form-label h1 mb-3">How many days?</label>
      <div className="input-group col-2 p-0 mb-5">
        <button className="btn btn-outline-secondary" style={{ "width": "40px" }} type="button" onClick={subDays}>-</button>
        <div type='number' className="form-control col-4 text-center" placeholder="Recipient's username" aria-label="Recipient's username with two button addons" id='exampleFormControlInput2' style={{ "width": "30px" }} >{days}</div>
        <button className="btn btn-outline-secondary" style={{ "width": "40px" }} type="button" onClick={addDays}>+</button>
      </div>

      <img src={img1} alt="hgfg" className='img1' />
      <img src={img2} alt="hgfg" className='img2' />

    </div>

  )
}

export default SecondPage;
