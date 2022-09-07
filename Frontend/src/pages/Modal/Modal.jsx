import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Modal.css'

const Modal = ({image,title,price,hide}) => {
    const[product,setProducts]=useState([])

    useEffect(() => {
      axios.get('http://localhost:5000/card')
        .then(res => setProducts(res.data.cards)) 
        .catch(error => console.log(error))
    },[])
        let modalStyle={
            display:"block",
            backgroundColor:"rgba(140, 134, 134,0.1)",
        } 
  return (
    <div>
        <div className="modal show fade" style={modalStyle}>
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title modaltitle w-100 text-center">Product Detail</h5>
                    <button type="button" className="btn-close" onClick={hide}></button>
                </div>
                <div className="modal-body row justify-content-between">
                   <div className="img col-lg-5">
                   <img src={image}  alt="" />
                   </div>
                   <div className="text col-lg-5">
                   <p className='title'>{title}</p>
                    <p className='price'>{price} AZN</p>
                   </div>
                   <div className="btn">
                    <NavLink to="/">ADD TO CARD</NavLink>
                    </div>
                    <div className="btnn">
                    <NavLink to="/">READ MORE</NavLink>
                    </div>
                </div>
                </div>
            </div>  
        </div>
    </div>
  )
}

export default Modal 