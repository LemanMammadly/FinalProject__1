import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './Instagram.css'

const Instagram = () => {
    const[instagram,setInstagram]=useState([])

    useEffect(() => {
        axios.get('http://localhost:5000/instagram')
          .then(res => setInstagram(res.data.instagrams)) 
          .catch(error => console.log(error))
      },[])
      console.log(instagram);

  return (
    <div className="instagram">
            <div>
                <div className="h3 top">
                    <h3>@FOLLOW US ON INSTAGRAM</h3>
                </div>
                <div className="bottom row justify-content-between">
                { instagram && instagram.map((instagramss)=>(
                    <div className="imgs col-lg-2">
                    <img className='img-fluid' src={instagramss.image} alt="" />
                    <div className="text">
                        <span><i class="fa-regular fa-heart"></i> 40</span>
                        <p>{instagramss.message}</p>
                        <span><p>Photo by {instagramss.user}</p></span>
                    </div>
                    </div>
                    ))
                }
                </div>
     </div>
    </div>
  )
}

export default Instagram