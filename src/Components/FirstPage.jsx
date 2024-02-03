import React from 'react';
import "../css/1.css"
import { Link } from 'react-router-dom';

function FirstPage() {
  return (
    <>
    <div className="bg-container d-flex flex-column justify-content-center"></div>
      <div className="tourism-card">
        <h1 className="main-heading" style={{"color":"white"}}>We plan your trip while you sleep</h1>
        <p className="paragraph" style={{"color":"white"}}>Let us know what you like, and we'll do the rest</p>
        <Link className="button" to={'/details'}>
          Let's Get Started!!
        </Link>
      </div>
      </>
  )
}

export default FirstPage
