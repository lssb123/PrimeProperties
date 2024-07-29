import React from 'react'
import { Link } from 'react-router-dom'

function Invalid() {
  return (
    <div className='text-center h-96 mt-16'>
        <h1 className='text-blue font-bold font-bold text-2xl'>Your Not An Authorized Person</h1> 
        <Link to="/" className="border bg-blue-200 p-1 rounded-md">Click here to login</Link>
        </div>
  )
}

export default Invalid