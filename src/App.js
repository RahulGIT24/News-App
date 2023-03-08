import React, { Component } from 'react'
import Navbar from './Components/Navbar'
import News from './Components/News'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//* Class based component
export default class App extends Component {
  pageSize = 15;
  render() {
    return (
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<News key="home" pageSize={this.pageSize} />} />
          <Route exact path="/sports" element={<News key='sports' category='sports' pageSize={this.pageSize} />} />
          <Route exact path="/business" element={<News key='business' category='business' pageSize={this.pageSize} />} />
          <Route exact path="/entertainment" element={<News key='entertainment' category='entertainment' pageSize={this.pageSize} />} />
          <Route exact path="/general" element={<News key='general' category='general' pageSize={this.pageSize} />} />
          <Route exact path="/health" element={<News key='health' category='health' pageSize={this.pageSize} />} />
          <Route exact path="/science" element={<News key='science' category='science' pageSize={this.pageSize} />} />
          <Route exact path="/technology" element={<News key='technology' category='technology' pageSize={this.pageSize} />} />
        </Routes>
      </Router>
    )
  }
}

