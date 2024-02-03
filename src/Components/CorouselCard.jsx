import React from 'react'
import "../css/corousel.css"
function CorouselCard() {
  return (
    <div className="detailed-view-card-container" style={{"width":"400px","border-radius":"20px"}}>
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-static-website/tajmahal-c1-img.png"
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-static-website/tajmahal-c2-img.png"
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-static-website/tajmahal-c3-img.png"
                className="d-block w-100"
                alt="..."
              />
            </div>
          </div>
          <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
        <div className="detailed-view-card-text-container">
          <h1 className="detailed-view-card-heading">Taj Mahal</h1>
          <p className="detailed-view-card-description">
            The Taj Mahal is considered to be the greatest architectural
            achievement in the whole range of Indo-Islamic architecture. Its
            recognised architectonic beauty has a rhythmic combination of solids
            and voids, concave and convex and light shadow; such as arches and
            domes further increases the aesthetic aspect. Not a piece of
            architecture, as other buildings are, but the proud passions of an
            emperor's love wrought in living stones.
          </p>
        </div>
      </div>
  )
}

export default CorouselCard;