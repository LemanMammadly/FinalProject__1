import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import './UpdatePhotos.css'
import SideBarDrop from '../../components/SideBarDropdown/SideBarDrop'



const UpdatePhotos = () => {
    const history=useNavigate()

    const [inputs,setInputs] = useState({}) 
    
    const id = useParams().id
    
    useEffect(() => {
        const fetchHandler = async () => {
            await axios.get(`http://localhost:5000/photos/${id}`)
            .then(res=>res.data)
            .then(data=>setInputs(data.photo))
        }
            fetchHandler();
    }, [id])

    const handleSubmit = (e) => {
        e.preventDefault();
        sendRequest().then(()=>history('/admin'));
    }

    const sendRequest = async () => {
        await axios.put(`http://localhost:5000/photos/${id}`,{
            image : String(inputs.image)
        }).then(res => res.data.photo)
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
        <div className="container updatePhoto col-lg-4">
            <form onSubmit={handleSubmit} className="content">
                <h1 id="say-hello">Update Photos!</h1>
                <div>
                <div className="image">
                    <label for="image">Image</label><br />
                    <input value={inputs.image} onChange={handleChange} name='image' class="fld" placeholder="Enter image" id="image" />
                </div>
                </div>
                <button className="btn upd" type="submit">UPDATE</button>
            </form>
    </div>
        
    </div>
  )
}

export default UpdatePhotos
