import React, { PureComponent } from 'react'
// import PropTypes from 'prop-types'

class Editor extends PureComponent {

  render() {
    return(
      <div className="Editor">
        <input
          type="text"
          ref="title"
          className="title"
          placeholder="Blog Title" />
        <input
          type="text"
          ref="body"
          className="body"
          placeholder="Blog Away.."/>
        <input
          type="text"
          ref="authorName"
          className="authorName"
          placeholder="Your Name"  />
      </div>

    )
  }
}

export default Editor
