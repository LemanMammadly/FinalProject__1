import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import SideBarDrop from '../../components/SideBarDropdown/SideBarDrop'
import './UpdateInstagram.css'

const UpdateInstagram = () => {
    const history=useNavigate()

    const [inputs,setInputs] = useState({}) 

    const id = useParams().id

    useEffect(() => {
        const fetchHandler = async () => {
            await axios.get(`http://localhost:5000/instagram/${id}`)
            .then(res=>res.data)
            .then(data=>setInputs(data.instagram))
        }
            fetchHandler();
    }, [id])

    const handleSubmit = (e) => {
        e.preventDefault();
        sendRequest().then(()=>history('/admin'));
    }
    const sendRequest = async () => {
        await axios.put(`http://localhost:5000/instagram/${id}`,{
            image : String(inputs.image),
            message : String(inputs.message),
            user : String(inputs.user)
        }).then(res => res.data.instagram)
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
    <div className="container updateInstagram col-lg-4">
        <form onSubmit={handleSubmit} className="content">
            <h1 id="say-hello">Update Instagram!</h1>
            <div>
            <div className="image">
                <label for="image">Image</label><br />
                <input value={inputs.image} onChange={handleChange} name='image' class="fld" placeholder="Enter image" id="image" />
            </div>
            <div className="message">
                <label for="message">Message</label><br />
                <input value={inputs.message} onChange={handleChange} name='message' class="fld" placeholder="Enter message" id="message" />
            </div>
            <div className="user">
                <label for="user">User</label><br />
                <input value={inputs.user} onChange={handleChange} name='user' class="fld" placeholder="Enter user" id="user" />
            </div>
            </div>
            <button className="btn upd" type="submit">UPDATE</button>
        </form>
</div>
    
</div>
  )
}

export default UpdateInstagram
