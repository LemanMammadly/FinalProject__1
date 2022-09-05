import React from 'react'
import './Slideer.css'
import axios from "axios"
import { useState, useEffect } from 'react'



const Slideer = () => {
    const[slider,setSlider]=useState([])
    
    useEffect(() => {
      axios.get('http://localhost:5000/slider')
        .then(res => setSlider(res.data.sliders)) 
        .catch(error => console.log(error))
    },[])

  return (
    <div>
          <div id="carouselExampleControls" className="carousel slide homeslider" data-bs-ride="carousel">
          <div className="carousel-inner">
         { slider && slider.map((sliders)=>(
          <div className="carousel-item active">
            <img src={sliders.image} className="d-block w-100 img" alt="..."/>
            <div className="text1">
                  <span>{sliders.description}</span>
                  <h2>{sliders.title}</h2>
                  <a href="/">SHOP NOW</a>
              </div>
          </div>  ))
      } 
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span className="carousel-control-prev-icon icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div> 
        
    </div>

  )
}

export default Slideer

