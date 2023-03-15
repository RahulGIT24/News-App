import React, { Component } from 'react'
import Navbar from './Components/Navbar'
import News from './Components/News'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

//* Class based component
export default class App extends Component {
  pageSize = 15;
  apiKey = process.env.REACT_APP_NEWS_API
  constructor(props) {
    super(props);
    this.state = {
      mode: 'light'
    }
  }
  toogleBtn = () => {
    if (this.state.mode === 'light') {
      this.setState({
        mode: 'dark'
      })
      document.body.style.backgroundColor = '#212529'
      document.body.style.color = 'white'
    } else {
      this.setState({
        mode: 'light'
      })
      document.body.style.backgroundColor = 'white'
      document.body.style.color = '#212529'
    }
  }
  state = {
    progress: 0
  }
  setProgress = (progress) => {
    this.setState({ progress: progress })
  }
  render() {
    return (
      <Router>
        <Navbar toogleBtn={this.toogleBtn} mode={this.state.mode} />
        <LoadingBar
          color='#f11946'
          height={3}
          progress={this.state.progress}
        />
        <Routes>
          <Route exact path="/News-App" element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="home" pageSize={this.pageSize} mode={this.state.mode} />} />
          <Route exact path="/sports" element={<News apiKey={this.apiKey} setProgress={this.setProgress} key='sports' category='sports' pageSize={this.pageSize} mode={this.state.mode} />} />
          <Route exact path="/business" element={<News apiKey={this.apiKey} setProgress={this.setProgress} key='business' category='business' pageSize={this.pageSize} mode={this.state.mode} />} />
          <Route exact path="/entertainment" element={<News apiKey={this.apiKey} setProgress={this.setProgress} key='entertainment' category='entertainment' pageSize={this.pageSize} mode={this.state.mode} />} />
          <Route exact path="/general" element={<News apiKey={this.apiKey} setProgress={this.setProgress} key='general' category='general' pageSize={this.pageSize} mode={this.state.mode} />} />
          <Route exact path="/health" element={<News apiKey={this.apiKey} setProgress={this.setProgress} key='health' category='health' pageSize={this.pageSize} mode={this.state.mode} />} />
          <Route exact path="/science" element={<News apiKey={this.apiKey} setProgress={this.setProgress} key='science' category='science' pageSize={this.pageSize} mode={this.state.mode} />} />
          <Route exact path="/technology" element={<News apiKey={this.apiKey} setProgress={this.setProgress} key='technology' category='technology' pageSize={this.pageSize} mode={this.state.mode} />} />
        </Routes>
      </Router>
    )
  }
}

