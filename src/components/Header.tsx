// import React from 'react'
import type { HeaderProps } from '../Types/types';

const Header = (props : HeaderProps) => {
  return (
    <div className='p-6'>
      <button
        onClick={props.logout}
               
               className="fixed top-4 right-4 bg-red-500 text-white px-4 py-2 rounded-lg shadow hover:bg-red-600 transition"

            >
                Logout
            </button>
    </div>
  )
}

export default Header
