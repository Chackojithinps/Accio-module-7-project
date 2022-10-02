import React, { useContext } from 'react'
import { CartContext } from '../Context/CartContext'
import {BrowserRouter,Link,Route, Routes} from 'react-router-dom'
import Footer from '../Footer/Footer'
import './Header.css'
const Header = () => {
    const {count}=useContext(CartContext)
  return (
    <div className='headerContainer'>
        <div className='headerCaption'>
            <h3 className='headerTitle'>AccioJob</h3>
        </div>
        <div className='headerItems'>
           {/* <Routes>
              

             
              <Route path='/shop' element="home"/>
              <Route path='/about' element="home"/>
              <Route path='/blog' element="home"/>
              <Route path='/contact' element="home"/>
              <Route path='/pages' element="home"/>
           </Routes> */}

           <BrowserRouter>
              <Link className='headerItem' to='/'>Home</Link>
              <Link className='headerItem' to='/shop'>Shop</Link>
              <Link className='headerItem' to='/about'>About</Link>
              <Link className='headerItem' to='/blog'>Blog</Link>
              <Link className='headerItem' to='/contact'>Contact</Link>
              <Link className='headerItem' to='/pages'>Pages</Link>

              {/* <Routes>
                 <Route exact path='/blog' element={<Footer/>}/>
              </Routes> */}
           </BrowserRouter>
           {/* <span className='headerItem'>Home</span>
           <span className='headerItem'>Shop</span>
           <span className='headerItem'>About</span>
           <span className='headerItem'>Blog</span>
           <span className='headerItem'>Contact</span>
           <span className='headerItem'>Pages</span> */}
        </div>
        <div className='header-rightsection'>
            <div className='userIcon'>
                <svg className='userIcon1' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#23A6F0" >
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
            </div>
            <div className='login-section'>
                <span className='loginregister'>Login / Register</span>
            </div>
            <div className='header-icons'>
                <svg className='searchIcon' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#23A6F0" >
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
                <svg className='cartIcon' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#23A6F0">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                </svg>
               
                  <span className='count'>{count}</span> 
                
               
                <svg className='addIcon' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#23A6F0" >
                     <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
                <span className='count'>1</span>


            </div>
        </div>
    </div>
  )
}

export default Header
