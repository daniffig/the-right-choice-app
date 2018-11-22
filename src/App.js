import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Calculator from './components/Calculator'

import ExchangeUpdater from './components/ExchangeUpdater/'
import ExchangeRate from './components/ExchangeRate';

import { Grid, Paper } from '@material-ui/core';

class App extends Component {
  constructor () {
    super();

    this.state = {
      
    }
  }

  render() {
    return (
      <div className="App">
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <ExchangeUpdater id="ExchangeUpdater-last-update"></ExchangeUpdater>
          </Grid>
          <Grid item xs={6}>
            <ExchangeRate
              id="ExchangeRate-USD-buying-rate"
              className="buy"
              label="Compra USD">
            </ExchangeRate>
          </Grid>
          <Grid item xs={6}>
            <ExchangeRate
              id="ExchangeRate-USD-selling-rate"
              label="Venta USD">
            </ExchangeRate>
          </Grid>
          <Grid item xs={12}>
            <Calculator />
          </Grid>
        </Grid>
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
      </div>
    );
  }
}

export default App;
