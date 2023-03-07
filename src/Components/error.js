import React from 'react'
import errorImg from './error.jpg'
export default function error() {
    const reload = () => {
        location.reload();
    }
    return (
        <div className='container'>
            <img src={errorImg} alt="error-image" className='my-3' />
            <h1 className='my-5'><b><i>Error</i></b> occured while fetching news</h1>
            <p>Try:</p>
            <li>Checking the connection</li>
            <li>Reconnecting to Wi-Fi</li>
            <button className="btn-primary btn-lg my-5" onClick={reload}>Try Again</button>
        </div>
    )
}
