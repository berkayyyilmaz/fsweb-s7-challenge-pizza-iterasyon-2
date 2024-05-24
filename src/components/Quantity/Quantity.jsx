import React, { useState } from 'react'
import './Quantity.css'

function Quantity({formData,setFormData}) {
    

    const decrease = () =>{
      setFormData({...formData, quantity:formData.quantity-1})
}
    const increase = () =>{
      setFormData({...formData, quantity:formData.quantity+1})
}

  return (
    <div className='quantity-div'>
        <button className='left-button' type='button' onClick={decrease} disabled={formData.quantity<2}>-</button>
        <div className='current-quantity'>{formData.quantity}</div>
        <button className='right-button'type='button' onClick={increase}>+</button>
    </div>
  )
}

export default Quantity