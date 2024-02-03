import React from 'react'
import "../css/nav.css"

function Navbar() {
  return (
    <div>
     <nav className="navbar navbar-expand-lg navbar-light bg-white">
      <div className="container">
        <a className="navbar-brand" href="#" style={{"font-weight":"600"}}>
          LazyTourist
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ml-auto">
            <a className="nav-link active" id="navItem1" href="#">
              Why Choose Us?
              <span className="sr-only">(current)</span>
            </a>
            {/* <a className="nav-link" href="#" id="navItem2"></a> */}
            <a className="nav-link" href="#" id="navItem2">Payment</a>
            <a className="nav-link" href="#" id="navItem3">Follow Us</a>
          </div>
        </div>
      </div>
    </nav>
    </div>
  )
}

export default Navbar
