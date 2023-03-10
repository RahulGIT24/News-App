import React, { Component } from 'react'

export class NewsItem extends Component {

  render() {
    let { title, description, imageUrl, newsUrl, author, date, source, mode } = this.props;
    return (
      <div className='container'>
        <div className={`card bg-${mode == 'light' ? 'light' : 'dark'} text-${mode == 'light' ? 'dark' : 'light'}`} >
          <img className="card-img-top" src={imageUrl} alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text">Author - <b>{author}</b></p>
            <p className="card-text">Published On - {date}</p>
            <p className="card-text">Source - <b>{source}</b></p>
            <a href={newsUrl} target="_blank" className={`btn btn-sm btn-${mode == 'light' ? 'dark' : 'light'} bg-${mode == 'light' ? 'light' : 'dark'} text-${mode == 'light' ? 'dark' : 'light'}`}>Read More</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
