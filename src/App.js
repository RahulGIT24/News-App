import React, { Component } from 'react'
import Navbar from './Components/Navbar'
import News from './Components/News'

//* Class based component
export default class App extends Component {
  render() {
    return (
      <>
        <Navbar/>
        <News category= 'sports'/>
      </>
    )
  }
}

