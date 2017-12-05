import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

class BlogContainer extends PureComponent {

  render() {
    return(
      <article className="BlogPosts">
        <h3> blogpost 1 </h3>
        <div>
          <p> content: bla bla bla </p>
          <p> autor name </p>
        </div>
      </article>

    )
  }
}

export default BlogContainer
