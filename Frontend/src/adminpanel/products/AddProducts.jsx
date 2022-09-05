import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import SideBarDrop from '../../components/SideBarDropdown/SideBarDrop'
import './AddProducts.css'


const AddProducts = () => {
    const history=useNavigate()

    const [inputs,setInputs]=useState({
        image: '',
        title:'',
        price:''
    }) 
    const sendRequest=async()=>{
        await axios.post('http://localhost:5000/card',{
            image: String(inputs.image),
            title: String(inputs.title),
            price: Number(inputs.price)
        }).then(res=>res.data)
    }

    const handleChange=(e)=>{
        setInputs((prevState)=>({
            ...prevState,
            [e.target.name] : e.target.value
        }))
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        sendRequest().then(()=>history('/admin'));
    }

  return (
    <div>
      <div className='row justify-content-center'>
        <div className="col-lg-2">
          <SideBarDrop/>
        </div>
        <div className="container addproducts col-lg-4">
            <form onSubmit={handleSubmit} className="content">
                <h1 id="say-hello">Add Products to Card!</h1>
                <div>
                <div className="image">
                    <label for="image">Image</label><br />
                    <input value={inputs.image} onChange={handleChange} name='image' className="fld" placeholder="Enter image" id="image" />
                </div>

                <div className="title">
                    <label for="title">Title</label><br />
                    <input  value={inputs.title} onChange={handleChange} name='title' class="fld" placeholder="Enter title" id="title" />
                </div>

                <div className="price">
                    <label for="price">Price</label><br />
                    <input value={inputs.price} onChange={handleChange} name='price' class="fld" placeholder="Enter price" id="price" />
                </div>
                </div>
                <button className="btn upd" type="submit">ADD</button>
            </form>
    </div>
    </div>
    </div>
  )
}

export default AddProducts
