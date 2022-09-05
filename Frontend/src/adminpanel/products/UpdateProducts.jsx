import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import SideBarDrop from '../../components/SideBarDropdown/SideBarDrop'
import './UpdateProducts.css'

const UpdateProducts = () => {
    const history=useNavigate()

    const [inputs,setInputs] = useState({}) 

    const id = useParams().id

    useEffect(() => {
        const fetchHandler = async () => {
            await axios.get(`http://localhost:5000/card/${id}`)
            .then(res=>res.data)
            .then(data=>setInputs(data.card))
        }
            fetchHandler();
    }, [id])

    const handleSubmit = (e) => {
        e.preventDefault();
        sendRequest().then(()=>history('/admin'));
    }
    const sendRequest = async () => {
        await axios.put(`http://localhost:5000/card/${id}`,{
            image : String(inputs.image),
            title : String(inputs.title),
            price : Number(inputs.price)
        }).then(res => res.data.card)
    }
    const handleChange = (e) => {
        setInputs((prevState) => ({
            ...prevState,
            [e.target.name] : e.target.value
        }))
    }

  return (
    <div className='row justify-content-center'>
        <div className="col-lg-2">
          <SideBarDrop/>
        </div>
        <div className="container updateproducts col-lg-4">
            <form onSubmit={handleSubmit} className="content">
                <h1 id="say-hello">Update Products!</h1>
                <div>
                <div className="image">
                    <label for="image">Image</label><br />
                    <input value={inputs.image} onChange={handleChange} name='image' class="fld" placeholder="Enter image" id="image" />
                </div>
                <div className="title">
                    <label for="title">Title</label><br />
                    <input value={inputs.title} onChange={handleChange} name='title' class="fld" placeholder="Enter title" id="title" />
                </div>
                <div className="price">
                    <label for="price">Price</label><br />
                    <input value={inputs.price} onChange={handleChange} name='price' class="fld" placeholder="Enter price" id="price" />
                </div>
                </div>
                <button className="btn upd" type="submit">UPDATE</button>
            </form>
    </div>
        
    </div>
  )
}

export default UpdateProducts