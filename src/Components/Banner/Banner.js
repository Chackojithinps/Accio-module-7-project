import React from 'react'
import './Banner.css'
import img from '../Images/col-md-6.png'
const Banner = () => {
  return (
    <div className='banner-container'>
       <div className='banner-content'>
         <div className='banner-items'>
            <div className='first-title'>
                <h5 className='firstTitle'>SUMMER 2020</h5>
            </div>
            <div className='second-title'>
                <h1 className='secondTitle'>NEW COLLECTION</h1>
            </div>
            <div className='third-text'>
                <h4 className='thirdText'>We know how large objects will act,<br/> 
                but things on a small scale.</h4>
            </div>
            <div className='banner-btn'>
                <button className='btn-banner'><h3 className='btn-item'>SHOP NOW</h3></button>
            </div>
         </div>
         <div className='bannerImage'>
          <img src={img}></img>
       </div>
        </div>

       

    </div>
  )
}

export default Banner
