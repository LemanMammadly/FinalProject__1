import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import SideBarDrop from '../../components/SideBarDropdown/SideBarDrop';
import './PhotosDetail.css'

const PhotosDetail = () => {
    const history=useNavigate();

    const [photos , setPhotos] = useState([])

    const photos_arr = photos && photos.map(item => {
        return item._id
       })
       console.log(photos_arr)
    
        useEffect(() => {
          axios.get('http://localhost:5000/photos')
            .then(res => setPhotos(res.data.photos)) 
            .catch(error => console.log(error))
        },[])
  return (
    <div className='photosdetail'>
    <div className="col-lg-3">
      <SideBarDrop/>
    </div>
        <table class="table table-image">
    {photos&&photos.map((photoss,id)=>(
        <tbody>
          <tr key={photoss.id} >
            <td className="w-100 row justify-content-between">
                <div className="imgs col-lg-3">
                <img src={photoss.image} className="img-fluid imgg img-thumbnail" alt=""/>
                </div>
                <div className="btns col-lg-7 text-end">
                <NavLink to={`/updatephotos/${photos_arr[id]}`} onClick={async() => {
                await axios.put(`http://localhost:5000/photos/${photos_arr[id]}`)
                .then(res => res.data)
             }} className='btn btn1 me-1 btnn'>Update</NavLink>
             <NavLink to={`/deletephotos/${photos_arr[id]}`} onClick={async()=>{
              await axios.delete(`http://localhost:5000/photos/${photos_arr[id]}`)
              .then(()=>history('/photosDetail'))
             }} className='btn btn2 ms-3 btnn'>Delete</NavLink>
                </div>
            </td>
             
          </tr>
        </tbody>
    ))}
      </table>   
  </div>
  )
}

export default PhotosDetail
