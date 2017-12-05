import React, { Component } from 'react'
import './App.css'
import Title from './components/Title'
import Editor from './components/Editor'
import BlogContainer from './components/BlogContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        < Title content="BlogPage"/>
        < Editor />
        < BlogContainer />
      </div>
    )
  }
}

export default App
