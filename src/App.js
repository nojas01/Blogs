import React, { Component } from 'react'
import './App.css'
import Title from './components/Title'

class App extends Component {
  render() {
    return (
      <div className="App">
        < Title content="BlogPage"/>

        <div className="Editor">
          <input
            type="text"
            ref="title"
            className="Title"
            placeholder="Blog Title" />
          <input
            type="text"
            ref="body"
            className="BlogPost"
            placeholder="Blog Away.."/>
          <input
            type="text"
            ref="authorName"
            className="authorName"
            placeholder="Your Name"  />
        </div>

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
