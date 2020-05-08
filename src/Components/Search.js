import React, { Component } from 'react'

class Searchbar extends Component {
  render() {
    return(
      <input
          type="text"
          className="input"
          id="addInput"
          placeholder="MONI IN DA BANK"
        />
    )
  }
}

export default Searchbar;