import React from 'react'
import Search from './Search.js';

import { useSelector } from 'react-redux';

const Table = () => {
  const searchQuery = useSelector(state => state.search);
  const stocks = useSelector(state => state.stocks);

  const filtered = searchQuery ? stocks.filter(stonk => stonk.name.toLowerCase().includes(searchQuery)) : stocks;

  return (
    <div>
      <Search />
      <table>
        <thead>
          <tr>
            <th>Stock</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {
            filtered.map((stonk, index) => {
              return (
                <tr key={index}>
                  <td>{stonk.name}</td>
                  <td>{stonk.price}</td>
                </tr>
              );
            })
          }
        </tbody>
      </table>
    </div>
  );
}

export default Table;
