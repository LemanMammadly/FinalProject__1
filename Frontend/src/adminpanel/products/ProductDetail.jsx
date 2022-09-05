import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import './ProductDetail.css'
import SideBarDrop from '../../components/SideBarDropdown/SideBarDrop';

const ProductDetail = () => {
  const history=useNavigate();
    
  const [products , setProducts] = useState([])

  const product_arr = products && products.map(item => {
    return item._id
   })

   useEffect(() => {
    axios.get('http://localhost:5000/card')
      .then(res => setProducts(res.data.cards)) 
      .catch(error => console.log(error))
  } , [])


  return (
    <div>
       <div className='productdetail'>
      <div className="col-lg-3">
       <SideBarDrop/>
      </div>
      	<table class="table table-image">
      {products&&products.map((productss,id)=>(
		  <tbody>
		    <tr key={productss.id}>
		      <td class="w-25">
			      <img src={productss.image} class="img-fluid img-thumbnail" alt=""/>
		      </td>
		      <td><p className='text'>{productss.title}</p></td>
		      <td><p className='text'>{productss.price} AZN</p></td>
              <td>
              <NavLink to={`/updateproducts/${product_arr[id]}`} onClick={async() => {
                  await axios.put(`http://localhost:5000/card/${product_arr[id]}`)
                  .then(res => res.data)
               }} className='btn btn1 ms-1 btnn'>Update</NavLink>
               <NavLink to={`/deleteproducts/${product_arr[id]}`} onClick={async()=>{
                await axios.delete(`http://localhost:5000/card/${product_arr[id]}`)
                .then(()=>history('/productdetail'))
               }} className='btn btn2 ms-2 btnn'>Delete</NavLink>
              </td>
		    </tr>
		  </tbody>
      ))}
		</table>   
    </div>
    </div>
  )
}

export default ProductDetail
