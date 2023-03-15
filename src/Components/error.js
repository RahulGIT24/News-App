import React, { Component } from 'react'
import errorImg from "./error.png"
export default class error extends Component {
    reload = () => {
        location.reload();
    }
    render() {
        let mode = this.props;
        return (
            <div className='container'>
                <img src={errorImg} alt="error-image" />
                <h1 className='my-5'><b><i>Error</i></b> occured while fetching news</h1>
                <p>Try:</p>
                <li>Checking the connection</li>
                <li>Reconnecting to Wi-Fi</li>
                <button className={`btn btn-lg my-5 btn-${mode == 'dark' ? 'light' : 'dark'} bg-${mode == 'dark' ? 'dark' : 'light'} text-${mode == 'dark' ? 'light' : 'dark'}`} onClick={this.reload}>Try Again</button>
            </div>
        )
    }
}
