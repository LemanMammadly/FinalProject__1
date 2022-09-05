import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import './LogoDetail.css'
import SideBarDrop from '../../components/SideBarDropdown/SideBarDrop'


const LogoDetail = () => {

    const [logo , setLogo] = useState([])

    const logo_arr = logo && logo.map(item => {
        return item._id
       })
       console.log(logo_arr)
    
        useEffect(() => {
          axios.get('http://localhost:5000/logo')
            .then(res => setLogo(res.data.logos)) 
            .catch(error => console.log(error))
        },[])

  return (
    <div>
      <div className='logodetail'>
    <div className="col-lg-3">
     <SideBarDrop/>
    </div>
        <table class="table table-image">
    {logo&&logo.map((logos,id)=>(
        <tbody>
          <tr key={logos.id} >
            <td className="w-100 row justify-content-between">
                <div className="imgs col-lg-3">
                <img src={logos.logo} className="img-fluid imgg img-thumbnail" alt=""/>
                </div>
                <div className="btns col-lg-7 text-end">
                <NavLink to={`/updatelogo/${logo_arr[id]}`} onClick={async() => {
                await axios.put(`http://localhost:5000/logo/${logo_arr[id]}`)
                .then(res => res.data)
             }} className='btn btn1 me-1 btnn'>Update</NavLink>
                </div>
            </td> 
          </tr>
        </tbody>
    ))}
      </table>   
  </div>
    </div>
  )
}

export default LogoDetail
