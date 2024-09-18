import React from 'react'

function Icon({ children }) {
  return (
    <>
        <li className='hover:scale-125 transition-all duration-300 ease-in-out'>
            <a href="#" className='text-lg '>
                {children}
            </a>
        </li>
    </>
  )
}

export default Icon