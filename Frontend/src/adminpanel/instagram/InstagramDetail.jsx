import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import SideBarDrop from '../../components/SideBarDropdown/SideBarDrop';
import "./InstagramDetail.css"

const InstagramDetail = () => {

  const history=useNavigate();

  const [instagram , setInstagram] = useState([])

  const instagram_arr = instagram && instagram.map(item => {
    return item._id
   })

   useEffect(() => {
    axios.get('http://localhost:5000/instagram')
      .then(res => setInstagram(res.data.instagrams)) 
      .catch(error => console.log(error))
  } , [])



  return (
    <div>
    <div className='instagramdetail'>
   <div className="col-lg-3">
    <SideBarDrop/>
   </div>
       <table class="table table-image">
   {instagram&&instagram.map((instagramss,id)=>(
       <tbody>
         <tr key={instagramss.id}>
           <td class="w-25">
               <img src={instagramss.image} class="img-fluid img-thumbnail" alt=""/>
           </td>
           <td><p className='text'>{(instagramss.message).slice(0,50)}...</p></td>
           <td><p className='text'>{instagramss.user}</p></td>
           <td>
           <NavLink to={`/updateInstagram/${instagram_arr[id]}`} onClick={async() => {
               await axios.put(`http://localhost:5000/instagram/${instagram_arr[id]}`)
               .then(res => res.data)
            }} className='btn btn1 ms-1 btnn'>Update</NavLink>
            <NavLink to={`/deleteInstagram/${instagram_arr[id]}`} onClick={async()=>{
             await axios.delete(`http://localhost:5000/instagram/${instagram_arr[id]}`)
             .then(()=>history('/instagramdetail'))
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

export default InstagramDetail
