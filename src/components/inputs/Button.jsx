import React from 'react'

const Button = (props) => {
    const {onClick, text, otherClasses, type} = props
  return (
    <button type={type} 
        className={`btn border-none tracking-widest ${otherClasses}`} 
            onClick={onClick}
        >
            {text}
    </button>
  )
}

export default Button
