import React, { Component } from 'react'

export default class spinner extends Component {
  render(props) {
    let mode = this.props;
    return (
      <div className='container d-flex justify-content-center my-5'>
        <div className={`spinner-border text-${mode=='light'?'dark':mode=='dark'?'light':""}`} role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    )
  }
}
