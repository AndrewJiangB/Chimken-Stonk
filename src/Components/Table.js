import React, { Component } from 'react'

class Table extends Component {
  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>Stock</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Tesla</td>
            <td>5000+-999</td>
          </tr>
          <tr>
            <td>Apple</td>
            <td>3000</td>
          </tr>
          <tr>
            <td>Oil</td>
            <td>-40</td>
          </tr>
        </tbody>
      </table>
    )
  }
}

export default Table