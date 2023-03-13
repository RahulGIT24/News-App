import React from 'react'

const NewsItem = (props) => {
  return (
    <div className='container'>
      <div className={`card bg-${props.mode == 'light' ? 'light' : 'dark'} text-${props.mode == 'light' ? 'dark' : 'light'}`} >
        <img className="card-img-top" src={props.imageUrl} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.description}...</p>
          <p className="card-text">Author - <b>{props.author}</b></p>
          <p className="card-text">Published On - {props.date}</p>
          <p className="card-text">Source - <b>{props.source}</b></p>
          <a href={props.newsUrl} target="_blank" className={`btn btn-sm btn-${props.mode == 'light' ? 'dark' : 'light'} bg-${props.mode == 'light' ? 'light' : 'dark'} text-${props.mode == 'light' ? 'dark' : 'light'}`}>Read More</a>
        </div>
      </div>
    </div>
  )
}

export default NewsItem
