import React from "react"
import Style from "./input.module.css"

function Input ( {type , placeholder, style, onChange, value, name } ) {
    return (

    <input type={type} placeholder={placeholder} style={style} onChange={onChange} className={Style.input} value={value} name={name}/> 
    
)
}

export default Input