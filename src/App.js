import React, { Component } from 'react'
import Navbar from './Components/Navbar'
import News from './Components/News'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//* Class based component
export default class App extends Component {
  pageSize = 15;
  constructor(props) {
    super(props);
    this.state = {
      mode: 'light'
    }
  }
  toogleBtn = () => {
    if (this.state.mode == 'light') {
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
  render() {
    return (
      <Router>
        <Navbar toogleBtn={this.toogleBtn} mode={this.state.mode} />
        <Routes>
          <Route exact path="/" element={<News key="home" pageSize={this.pageSize} mode={this.state.mode} />} />
          <Route exact path="/sports" element={<News key='sports' category='sports' pageSize={this.pageSize} mode={this.state.mode} />} />
          <Route exact path="/business" element={<News key='business' category='business' pageSize={this.pageSize} mode={this.state.mode} />} />
          <Route exact path="/entertainment" element={<News key='entertainment' category='entertainment' pageSize={this.pageSize} mode={this.state.mode} />} />
          <Route exact path="/general" element={<News key='general' category='general' pageSize={this.pageSize} mode={this.state.mode} />} />
          <Route exact path="/health" element={<News key='health' category='health' pageSize={this.pageSize} mode={this.state.mode} />} />
          <Route exact path="/science" element={<News key='science' category='science' pageSize={this.pageSize} mode={this.state.mode} />} />
          <Route exact path="/technology" element={<News key='technology' category='technology' pageSize={this.pageSize} mode={this.state.mode} />} />
        </Routes>
      </Router>
    )
  }
}

