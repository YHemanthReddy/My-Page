import React from 'react'

const Footer = () => {
  return (
    <div className='flex justify-between shadow-lg h-12 rounded-md bg-slate-500 text-white'>
        <div>
            <h1>&copy; 2023 Company</h1>
        </div>
        <div className='flex content-around' >
            <h1 className='mr-5'>About</h1>
            <h1 className='mr-5'>Terms of Use</h1>
            <h1 className='mr-5'>Contact</h1>
        </div>
    </div>
  )
}

export default Footer