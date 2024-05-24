import React from 'react'

function Check({
    changeFn,
    isChecked,
    fieldName,
    value,
    label }) {
  return (
    <label className="label">
        <input 
            type="checkbox"
            onChange={changeFn}
            checked={isChecked}
            name={fieldName}
            value={value}       
        />{' '}
        {label}
    </label>
    
  )
}

export default Check