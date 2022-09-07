import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Product.css'
import Modal from '../Modal/Modal'


const Product = () => {

  const[model,setModel]=useState(false)
  const[tempdata,setTempdata]=useState([])

  const getData=(image,title,price)=>{
    let tempData=[image,title,price]
    setTempdata(item=> [1, ...tempData ])

    return setModel(true);

  }
  const[product,setProducts]=useState([])

  useEffect(() => {
    axios.get('http://localhost:5000/card')
      .then(res => setProducts(res.data.cards)) 
      .catch(error => console.log(error))
  },[])

  return (
    <> 
    <section id='featured'>
    <div className="container">
      <div className="row alldv justify-content-between">
        <div className="top">
          <h3>FEATURED PRODUCTS</h3>
        </div>
        {product&&product.map((productss)=>(
          <div className="bottom row all col-lg-3 mb-5">
          <div className="box">
          <div className="btm-img">
            <img className='img-fluid' src={productss.image} alt="" />
            <div className="btn">
              <NavLink to="/" onClick={()=>getData(productss.image, productss.title, productss.price)}>QUICK VIEW</NavLink>
            </div>
          </div>
          <div className="btm-text">
            <a href="/">{productss.title}</a>
            <span>{productss.price} AZN</span>
          </div>
          </div>
        </div>
        ))}
      </div>
    </div>
  </section> 
  {
    model===true ? <Modal image={tempdata[1]} title={tempdata[2]} price={tempdata[3]} hide={()=>setModel(false)}/> :" "
  }
  <div className='loadmorediv'>
    <NavLink className='loadmore' to='/'>LOAD MORE</NavLink>
  </div>
 </>
  )
}

export default Product
 
