import { createContext, useState } from "react";

export const CartContext=createContext()

export const Cart5=({children})=>{
    const [count,setCount]=useState(0)
    const handleApp=()=>{
        setCount(count=>count+1)
    }
  return(
     <CartContext.Provider value={{count,handleApp}}>{children}</CartContext.Provider>
  )
}
export default Cart5
// export const useProduct4=useContext(CartContext)