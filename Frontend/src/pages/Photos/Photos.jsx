import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './Photos.css'

const Photos = () => {

    const[photos,setPhotos]=useState([])

    useEffect(() => {
        axios.get('http://localhost:5000/photos')
          .then(res => setPhotos(res.data.photos)) 
          .catch(error => console.log(error))
      },[])


  return (
    <div>
        <section id='category'>
            <div className="container">
            <div className="all">
            <div className="row justify-content-between">
                {photos&&photos.slice(0,3).map((photoss)=>(
                    <div className="col-lg-4 photo">
                    <div className="img-cat">
                    <img className='img-fluid' src={photoss.image} alt="" />
                    <div className="textcat">
                        <a href="/">DRESSES</a>
                    </div>
                    </div>
                </div>
                ))}
            </div>
            </div>
            </div>
        </section>
    </div>
  )
}

export default Photos
