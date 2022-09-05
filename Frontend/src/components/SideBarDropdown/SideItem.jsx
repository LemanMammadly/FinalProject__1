import React, { useState } from 'react'

const SideItem = ({items}) => {
    const {name,links,open}=items;
    const [isOpen,setOpen]=useState(open)

    const openSideNav=()=>{
        setOpen(!isOpen)
    }
  return (
    <div onClick={()=>openSideNav()} style={sideItemStyle}>
      <p style={nameStyle}>{name}</p>
      {isOpen&&links.map((link,index)=>{
        const {title,to}=link;
        return(
            <div key={index} style={linkContainerStyle}>
                <a href={to} style={linkStyle}>
                    <p style={nameStyle}>{title}</p>
                </a>
            </div>
        )
      })}
    </div>
  )
}


const nameStyle={
    margin:"25px",
    fontWeight:"500",
    cursor:"pointer"
}

const sideItemStyle={
    height:"auto",
    minHeight:"60px",
    width:"260px",
    color:"#fff",
    display:"flex",
    alignItems:"flex-start",
    flexDirection:"column",
   
}

const linkContainerStyle={
    height:"auto",
    width:"260px",
    background:"#262626",
    borderTop:"1px solid #d6d6d6",
    
}

const linkStyle={
    textDecoration:"none",
    color:"#fff"
}

export default SideItem
