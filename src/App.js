import React, { Component } from 'react'
import './App.css'
import Title from './components/Title'
import Editor from './components/Editor'

class App extends Component {
  render() {
    return (
      <div className="App">
        < Title content="BlogPage"/>
        < Editor />

        <article className="BlogPosts">
          <h3> blogpost 1 </h3>
          <div>
            <p> content: bla bla bla </p>
            <p> autor name </p>
          </div>
        </article>
      </div>
    )
  }
}

export default App
