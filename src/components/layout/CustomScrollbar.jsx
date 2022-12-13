import React from 'react'

const CustomScrollbar = ({otherClasses, children}) => {
  return (
    <div className={`${otherClasses} scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch`}>
      {children}
    </div>
  )
}

export default CustomScrollbar
