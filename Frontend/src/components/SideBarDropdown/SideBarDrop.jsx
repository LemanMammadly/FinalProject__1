import React from 'react'
import './SideBarDrop.css'
import SideItem from './SideItem'
import { NavItems } from '../../data/NavItemData'
import { NavLink } from 'react-router-dom'

const SideBarDrop = () => {
  return (
    <div className='dropdownmenu' style={sideNavStyle}>
      <h2 className='admin' style={headerStyle}><NavLink to='/admin'>Admin</NavLink></h2>
      {NavItems.map((navItem,index)=>{
        return <SideItem key={index } items={navItem}/> 
      })}
    </div>
  )
}

const sideNavStyle={
    height:"100vh",
    width:"260px",
    background:"#111111",
    position:"fixed",
    border:"1px solid transparent",
    left:0,
    textAlign:"left"
 
}

const headerStyle={
    fontWeight:"400",
    padding:"0px 20px",
    color:"#fff",
    textAlign:"center",
    marginTop:"30px",
    cursor:"pointer",
    fontSize:"35px"
}


export default SideBarDrop
