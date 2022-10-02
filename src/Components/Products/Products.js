import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from '../Context/CartContext'
import './Products.css'
const Products = () => {
  const items=[]
    const [products,setProducts]=useState([])
    const {handleApp}=useContext(CartContext)
     
    useEffect(()=>{
         axios.get('https://acciojob-module-7-sept-2022-default-rtdb.asia-southeast1.firebasedatabase.app/products.json').then((response)=>{
          console.log(response.data)
          for(const dataItem in response.data){
            // console.log(response.data[dataItem].name)
                items.push(
                  {
                    id:response.data[dataItem].id,
                    newprice : response.data[dataItem].newPrice,
                    oldprice :response.data[dataItem].oldPrice,
                    productimage:response.data[dataItem].productImage,
                    productname:response.data[dataItem].productName

                  })  
                setProducts(items)
                 
          
            }
           
          })
         
    },[])
   
    
  return (
    <div className='productsContainer'>
        <div className='product-title'>
             <h3 className='productTitle'>Products</h3>
        </div>
         <div className='productItems'>
         {
            products && (
              products.map((item)=>(
                <div className='product-item' key={item.id}>
                  <div className='product-image'>
                    <img className='product-img' src={item.productimage}></img>
                  </div>
                  <div className='bottm-items'>
                    <h3 className='productname'>{item.productname}</h3>
                    <div className='price-section'>
                      <div className='star-section'>
                        
                        <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 0L11.0206 6.21885H17.5595L12.2694 10.0623L14.2901 16.2812L9 12.4377L3.70993 16.2812L5.73056 10.0623L0.440492 6.21885H6.97937L9 0Z" fill="#FFAC4B"/>
                        </svg>

                        
                        <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 0L11.0206 6.21885H17.5595L12.2694 10.0623L14.2901 16.2812L9 12.4377L3.70993 16.2812L5.73056 10.0623L0.440492 6.21885H6.97937L9 0Z" fill="#FFAC4B"/>
                        </svg>


                        <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 0L11.0206 6.21885H17.5595L12.2694 10.0623L14.2901 16.2812L9 12.4377L3.70993 16.2812L5.73056 10.0623L0.440492 6.21885H6.97937L9 0Z" fill="#FFAC4B"/>
                        </svg>


                        <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 0L11.0206 6.21885H17.5595L12.2694 10.0623L14.2901 16.2812L9 12.4377L3.70993 16.2812L5.73056 10.0623L0.440492 6.21885H6.97937L9 0Z" fill="#FFAC4B"/>
                        </svg>


                        <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 0L11.0206 6.21885H17.5595L12.2694 10.0623L14.2901 16.2812L9 12.4377L3.70993 16.2812L5.73056 10.0623L0.440492 6.21885H6.97937L9 0Z" fill="#FFAC4B"/>
                        </svg>
                      </div> 
                      <div className='price-sec'>
                          <h3 className='oldprice'>{item.oldprice}/-</h3>
                          <h3 className='newprice'>{item.newprice}/-</h3>
                        </div>
                    </div>
                    
                    <button onClick={handleApp} className='product-btn'><span className='product-btnText'>ADD TO CART</span></button>
                  </div>
                </div>
    
  )))
  
}
         </div>
    </div>
  )
}

export default Products
