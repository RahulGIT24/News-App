import React, { useState } from 'react'
import Navbar from './Components/Navbar'
import News from './Components/News'
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

function App() {
  const pageSize = 15;
  const apiKey = process.env.REACT_APP_NEWS_API

  // Defining state
  const [mode, setMode] = useState('light')
  const [progress, setProgres] = useState(0)

  const toogleBtn = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#212529'
      document.body.style.color = 'white'
    } else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      document.body.style.color = '#212529'
    }
  }

  const setProgress = (progress) => {
    setProgres(progress)
  }

  return (
    <Router>
      <Navbar toogleBtn={toogleBtn} mode={mode} />
      <LoadingBar
        color='#f11946'
        height={3}
        progress={progress}
      />
      <Routes>
        <Route exact path="/" element={<News apiKey={apiKey} setProgress={setProgress} key="home" pageSize={pageSize} mode={mode} />} />
        <Route exact path="/sports" element={<News apiKey={apiKey} setProgress={setProgress} key='sports' category='sports' pageSize={pageSize} mode={mode} />} />
        <Route exact path="/business" element={<News apiKey={apiKey} setProgress={setProgress} key='business' category='business' pageSize={pageSize} mode={mode} />} />
        <Route exact path="/entertainment" element={<News apiKey={apiKey} setProgress={setProgress} key='entertainment' category='entertainment' pageSize={pageSize} mode={mode} />} />
        <Route exact path="/general" element={<News apiKey={apiKey} setProgress={setProgress} key='general' category='general' pageSize={pageSize} mode={mode} />} />
        <Route exact path="/health" element={<News apiKey={apiKey} setProgress={setProgress} key='health' category='health' pageSize={pageSize} mode={mode} />} />
        <Route exact path="/science" element={<News apiKey={apiKey} setProgress={setProgress} key='science' category='science' pageSize={pageSize} mode={mode} />} />
        <Route exact path="/technology" element={<News apiKey={apiKey} setProgress={setProgress} key='technology' category='technology' pageSize={pageSize} mode={mode} />} />
      </Routes>
    </Router>
  )
}

export default App