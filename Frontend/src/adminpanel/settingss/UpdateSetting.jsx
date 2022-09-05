import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import SideBarDrop from '../../components/SideBarDropdown/SideBarDrop'
import './UpdateSetting.css'

const UpdateSetting = () => {
    const history=useNavigate()

    const [inputs,setInputs] = useState({}) 

    const id = useParams().id

    useEffect(() => {
        const fetchHandler = async () => {
            await axios.get(`http://localhost:5000/setting/${id}`)
            .then(res=>res.data)
            .then(data=>setInputs(data.settings))
        }
            fetchHandler();
    }, [id])

    const handleSubmit = (e) => {
        e.preventDefault();
        sendRequest().then(()=>history('/admin'));
    }
    const sendRequest = async () => {
        await axios.put(`http://localhost:5000/setting/${id}`,{
            phone : String(inputs.phone),
            icon1 : String(inputs.icon1),
            icon2 : String(inputs.icon2),
            icon3 : String(inputs.icon3),
            icon4 : String(inputs.icon4),
            icon5 : String(inputs.icon5),
        }).then(res => res.data.settings)
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
    <div className="container updateSetting col-lg-4">
        <form onSubmit={handleSubmit} className="content">
            <h1 id="say-hello">Update Settings!</h1>
            <div>
            <div className="phone">
                <label for="phone">Phone</label><br />
                <input value={inputs.phone} onChange={handleChange} name='phone' class="fld" placeholder="Enter phone" id="phone" />
            </div>
            <div className="icon1">
                <label for="icon1">Icon1</label><br />
                <input value={inputs.icon1} onChange={handleChange} name='icon1' class="fld" placeholder="Enter icon1" id="icon1" />
            </div>
            <div className="icon2">
                <label for="icon2">Icon2</label><br />
                <input value={inputs.icon2} onChange={handleChange} name='icon2' class="fld" placeholder="Enter icon2" id="icon2" />
            </div>
            <div className="icon3">
                <label for="icon3">Icon3</label><br />
                <input value={inputs.icon3} onChange={handleChange} name='icon3' class="fld" placeholder="Enter icon3" id="icon3" />
            </div>
            <div className="icon4">
                <label for="icon4">Icon4</label><br />
                <input value={inputs.icon4} onChange={handleChange} name='icon4' class="fld" placeholder="Enter icon4" id="icon4" />
            </div>
            <div className="icon5">
                <label for="icon5">Icon5</label><br />
                <input value={inputs.icon5} onChange={handleChange} name='icon5' class="fld" placeholder="Enter icon5" id="icon5" />
            </div>
            </div>
            <button className="btn upd" type="submit">UPDATE</button>
        </form>
</div>
    
</div>
  )
}

export default UpdateSetting