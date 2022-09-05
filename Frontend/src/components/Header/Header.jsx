import axios from 'axios';
import React, { useEffect, useState }  from 'react'
import { useLocation } from 'react-router-dom';
import './Header.css'

const Header = () => {


    const[logo,setLogo]=useState([])

    useEffect(() => {
        axios.get('http://localhost:5000/logo')
          .then(res => setLogo(res.data.logos)) 
          .catch(error => console.log(error))
      },[])


    const { pathname } = useLocation();
    if (pathname === "/admin") return null;
    else if (pathname === "/sliderDetail") return null;
    else if (pathname === "/addSlider") return null;
    else if (pathname === "/updateSlider") return null;
    else if (pathname === '/addphotos') return null;
    else if (pathname === '/photosDetail') return null;
    else if (pathname === '/addproducts') return null;
    else if (pathname === '/productdetail') return null;
    else if (pathname === '/productdetail') return null;
    else if (pathname === '/addInstagram') return null;
    else if (pathname === '/instagramdetail') return null;
    else if (pathname === '/logodetail') return null;
    else if (pathname === '/settingdetail') return null;



  return (
    <header>
        <div className="container">
            <div className="row all py-4 justify-content-between">
                <div className="left col-lg-2 col-5">
                {logo && logo.slice(0,1).map((logos)=>(
                    <img className='img-fluid' src={logos.logo} alt="" />
                ))}
                </div>
                <div className="row center col-lg-6 text-end">
                    <div className="all-link">
                        <a href="/">Home</a>
                        <a href="/shop">Shop</a>
                        <a className="red" href="/sale">Sale</a>
                        <a href="/features">Features</a>
                        <a href=".blog">Blog</a>
                        <a href="/about">About</a>
                        <a href="/contact">Contact</a>
                    </div>
                </div>
                <div className="right col-lg-3 text-end col-5 col-sm-4 col-md-3 justify-content-between">
                    <i className="fa-solid fa-circle-user mx-4"></i>
                    <i className="fa-solid fa-bag-shopping second"></i>
                    <i className="fa-solid fa-bars res"></i>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header