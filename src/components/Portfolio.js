import React from 'react'


const Portfolio = () => {
  return (


    <div id="carouselExampleControls" className="carousel slide " data-bs-ride="carousel" style={{ marginTop: '115px' }}>
      <div className="carousel-inner">
        <div className="carousel-item active">

        <video className='d-block-item w-100' autoPlay loop muted>
          <source src='https://mdbcdn.b-cdn.net/img/video/Tropical.mp4'/>
        </video>
        </div>
        <div className="carousel-item" >
          <video className='d-block w-100'autoPlay loop muted>
            <source src='https://mdbcdn.b-cdn.net/img/video/forest.mp4' type='video/mp4'/>
          </video>
        </div>
        <div className="carousel-item">
          <video className='d-block w-100' autoPlay loop muted>
            <source src='https://mdbcdn.b-cdn.net/img/video/Agua-natural.mp4' type="video/mp4"/>
          </video>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>


  )
}

export default Portfolio
