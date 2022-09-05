import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import SideBarDrop from '../../components/SideBarDropdown/SideBarDrop'

import './SetingDetail.css'

const SetingsDetail = () => {

    
  const [settings , setSettings] = useState([])

  const setting_arr = settings && settings.map(item => {
    return item._id
   })

   useEffect(() => {
    axios.get('http://localhost:5000/setting')
      .then(res => setSettings(res.data.settings)) 
      .catch(error => console.log(error))
  } , [])

  return (
    <div>
       <div className='setingdetail'>
      <div className="col-lg-3">
       <SideBarDrop/>
      </div>
      	<table class="table table-image">
      {settings&&settings.map((settingss,id)=>(
		  <tbody>
		    <tr key={settingss.id}>
		      <td class="w-25">
			      <p>{settingss.phone}</p>
		      </td>
		      <td><i className={settingss.icon1}></i></td>
		      <td><i className={settingss.icon2}></i></td>
		      <td><i className={settingss.icon3}></i></td>
		      <td><i className={settingss.icon4}></i></td>
		      <td><i className={settingss.icon5}></i></td>
              <td>
              <div className='text-end'>
              <NavLink to={`/updatesettings/${setting_arr[id]}`} onClick={async() => {
                  await axios.put(`http://localhost:5000/setting/${setting_arr[id]}`)
                  .then(res => res.data)
               }} className='btn btn1 ms-1 btnn'>Update</NavLink>
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

export default SetingsDetail
