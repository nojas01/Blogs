import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

class BlogItem extends PureComponent {
  static propTypes = {
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    authorName: PropTypes.string.isRequired,
  }

  render() {
    return(
      <div>
      </div>
    )
  }
}
export default BlogItem
