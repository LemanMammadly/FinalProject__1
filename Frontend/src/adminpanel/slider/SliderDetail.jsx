import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import "../slider/Slider.Detail.css"
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import SideBarDrop from '../../components/SideBarDropdown/SideBarDrop'

const SliderDetail = () => {

  const history=useNavigate();

    const [slider , setSlider] = useState([])

   const slider_arr = slider && slider.map(item => {
    return item._id
   })
   console.log(slider_arr)

    useEffect(() => {
      axios.get('http://localhost:5000/slider')
        .then(res => setSlider(res.data.sliders)) 
        .catch(error => console.log(error))
    } , [])

  return (
   <div>
     <div className='slidersidebardetail'>
      <div className="col-lg-3">
       <SideBarDrop/>
      </div>
      	<table class="table table-image">
      {slider&&slider.map((sliderss,id)=>(
		  <tbody>
		    <tr key={sliderss.id}>
		      <td class="w-25">
			      <img src={sliderss.image} class="img-fluid img-thumbnail" alt=""/>
		      </td>
		      <td><p className='text'>{sliderss.title}</p></td>
		      <td><p className='text'>{sliderss.description}</p></td>
          <td>
          <div className='text-end'>
          <NavLink to={`/updateslider/${slider_arr[id]}`} onClick={async() => {
               await axios.put(`http://localhost:5000/slider/${slider_arr[id]}`)
               .then(res => res.data)
            }} className='btn btn1 me-1 btnn'>Update</NavLink>
            <NavLink to={`/deleteslider/${slider_arr[id]}`} onClick={async()=>{
             await axios.delete(`http://localhost:5000/slider/${slider_arr[id]}`)
             .then(()=>history('/sliderDetail'))
            }} className='btn btn2 ms-3 btnn'>Delete</NavLink>
          
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

export default SliderDetail


