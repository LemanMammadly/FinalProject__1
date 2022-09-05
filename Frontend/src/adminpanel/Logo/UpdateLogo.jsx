import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import SideBarDrop from '../../components/SideBarDropdown/SideBarDrop'
import './UpdateLogo.css'

const UpdateLogo = () => {

  const history=useNavigate()

  const [inputs,setInputs] = useState({}) 
  
  const id = useParams().id
  
  useEffect(() => {
      const fetchHandler = async () => {
          await axios.get(`http://localhost:5000/logo/${id}`)
          .then(res=>res.data)
          .then(data=>setInputs(data.logos))
      }
          fetchHandler();
  }, [id])

  const handleSubmit = (e) => {
      e.preventDefault();
      sendRequest().then(()=>history('/admin'));
  }

  const sendRequest = async () => {
      await axios.put(`http://localhost:5000/logo/${id}`,{
          logo : String (inputs.logo)
      }).then(res => res.data.logos)
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
    <div className="container updateLogo col-lg-4">
        <form onSubmit={handleSubmit} className="content">
            <h1 id="say-hello">Update Logo!</h1>
            <div>
            <div className="image">
                <label for="logo">Logo</label><br />
                <input value={inputs.logo} onChange={handleChange} name='logo' class="fld" placeholder="Enter logo" id="logo" />
            </div>
            </div>
            <button className="btn upd" type="submit">UPDATE</button>
        </form>
</div>
    
</div>
  )
}

export default UpdateLogo
