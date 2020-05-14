import React from 'react';
import './App.css';
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
          <Table/>
        </div>
      </div>
    </div>
  );
}

export default App;
