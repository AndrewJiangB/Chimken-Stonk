import React from 'react';
import './App.css';
import Searchbar from './Components/Search.js';
import Button from './Components/Button.js';
import Table from './Components/Table.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Chimken Stonk
      </header>
      <div className="body">
        <div className="sidebar">
          <div className="search">
            <Searchbar />
          </div>
          <div className="user">
            User's profile
          </div>
        </div>

        <div className="main-content">
          <div  className="navigation">
            <Button label="americano" />
            <Button label="europeen"/>
            <Button label="chynah"/>
          </div>
              /**
              * Init Alpha Vantage with your API key.
              *
              * @param {String} key
              *   Your Alpha Vantage API key.
              */
              const alpha = alphavantage({ key: '1WZ54Y6ITWWPVOE4' });
          <Table/>
        </div>
      </div>
    </div>
  );
}

export default App;
