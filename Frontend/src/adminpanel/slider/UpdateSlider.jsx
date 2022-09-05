import React from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
import './UpdateSlider.css'
import { useNavigate } from 'react-router-dom'
import SideBarDrop from '../../components/SideBarDropdown/SideBarDrop'


const UpdateSlider = () => {

    const history=useNavigate()


    const [inputs,setInputs] = useState({}) 
    
    const id = useParams().id
    console.log(id);
    

    useEffect(() => {
        const fetchHandler = async () => {
            await axios.get(`http://localhost:5000/slider/${id}`)
            .then(res=>res.data)
            .then(data=>setInputs(data.slider))
        }
            fetchHandler();
    }, [id])

    const handleSubmit = (e) => {
        e.preventDefault();
        sendRequest().then(()=>history('/admin'));
    }

    const sendRequest = async () => {
        await axios.put(`http://localhost:5000/slider/${id}`,{
            title : String(inputs.title),
            description : String(inputs.description),
            image : String(inputs.image)
        }).then(res => res.data.slider)
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
        <div className="container updateslider col-lg-4">
            <form onSubmit={handleSubmit} className="content">
                <h1 id="say-hello">Update Slider!</h1>
                <div>
                <div className="title">
                    <label for="title">Title</label><br />
                    <input value={inputs.title} onChange={handleChange} name='title' className="fld" placeholder="Enter title" id="title" />
                </div>

                <div className="description">
                    <label for="description">Description</label><br />
                    <input  value={inputs.description} onChange={handleChange} name='description' class="fld" placeholder="Enter description" id="description" />
                </div>

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

export default UpdateSlider