import React from 'react'
import loading from './spinner.gif'
export default function spinner() {
  return (
    <div className='container d-flex justify-content-center'>
      <img src={loading} alt="loading"/>
    </div>
  )
}
