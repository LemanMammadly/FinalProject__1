import React from 'react'
import Slideer from '../../pages/Slideer/Slideer'
import Instagram from '../Instagram/Instagram'
import Lookbook from '../Lookbook/Lookbook'
import Photos from '../Photos/Photos'
import Product from '../Products/Product'

const Home = () => {
  return (
    <div>
      <Slideer/>
      <Photos/>
      <Product/>
      <Lookbook/>
      <Instagram/>
    </div>
  )
}

export default Home