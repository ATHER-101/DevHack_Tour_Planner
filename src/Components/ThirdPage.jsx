import React from 'react'
import CorouselCard from './CorouselCard'
import "../css/3.css"
import { Link } from 'react-router-dom';
function ThirdPage() {
  return (
    <>
    <Link className="button" to={"/tour"} style={{"height":"auto","width":"100px", "textAlign":"center","padding":"10px","position":"absolute", "right":"30px"}}>Next</Link>
    <div className ="back">
      <center><h1 className="head">Do you have any personal preferences</h1></center>
      <CorouselCard/>
    </div>
    </>
  )
}

export default ThirdPage
