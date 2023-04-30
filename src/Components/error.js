import React from 'react'
import errorImg from "./error.png"

function error(props) {
    const reload = () => {
        location.reload();
    }
    let mode = props.mode;
    return (
        <>
            <div className='container'>
                <img src={errorImg} alt="error" />
                <h1 className='my-5'><b><i>Error</i></b> occured while fetching news</h1>
                <p>Try:</p>
                <li>Checking the connection</li>
                <li>Reconnecting to Wi-Fi</li>
                <button className={`btn btn-lg my-5 btn-${mode === 'dark' ? 'light' : 'dark'} bg-${mode === 'dark' ? 'dark' : 'light'} text-${mode === 'dark' ? 'light' : 'dark'}`} onClick={reload}>Try Again</button>
            </div>
        </>
    )
}

export default error