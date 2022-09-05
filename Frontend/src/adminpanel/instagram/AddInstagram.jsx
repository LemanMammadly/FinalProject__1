import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './AddInstagram.css'
import SideBarDrop from '../../components/SideBarDropdown/SideBarDrop'


const AddInstagram = () => {
    const history=useNavigate()

    const [inputs,setInputs]=useState({
        image:'',
        message:'',
        user:''
    }) 

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

    const sendRequest=async()=>{
        await axios.post('http://localhost:5000/instagram',{
            image: String(inputs.image),
            message:String(inputs.message),
            user:String(inputs.user)
        }).then(res=>res.data)
    }


  return (
    <div>
    <div className='row justify-content-center'>
      <div className="col-lg-2">
        <SideBarDrop/>
      </div>
      <div className="container addinstagram col-lg-4">
          <form onSubmit={handleSubmit} className="content">
              <h1 id="say-hello">Add Instagram Post!</h1>
              <div>
              <div className="image">
                  <label for="image">Image</label><br />
                  <input value={inputs.image} onChange={handleChange} name='image' className="fld" placeholder="Enter image" id="image" />
              </div>

              <div className="title">
                  <label for="title">Message</label><br />
                  <input  value={inputs.message} onChange={handleChange} name='message' class="fld" placeholder="Enter message" id="message" />
              </div>

              <div className="user">
                  <label for="user">User</label><br />
                  <input value={inputs.user} onChange={handleChange} name='user' class="fld" placeholder="Enter user" id="user" />
              </div>
              </div>
              <button className="btn upd" type="submit">ADD</button>
          </form>
  </div>
  </div>
  </div>
  )
}

export default AddInstagram
