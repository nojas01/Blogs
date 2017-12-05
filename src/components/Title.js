import React, { PureComponent } from 'react'

class Title extends PureComponent {

  render () {
    return (
      <div>
         <h1>{this.props.content }</h1> 
      </div>
    )
  }
}

export default Title
