import React, { Component } from 'react'

class Button extends Component {

  switchtab() {
    return
  }

  render() {
    return(
      <button onClick={this.switchtab()}>
        {this.props.label}
      </button>
    )
  }
}

export default Button;