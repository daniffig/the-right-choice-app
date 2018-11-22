import React from "react";

import './styles.scss'

import MoneyInput from './components/MoneyInput'

export default class Calculator extends React.Component {
  constructor() {
    super();

    this.state = {
      initialCapital: 0
    }
  }

  changeExchangeRates(exchangeRates) {
    // this.setState(exchange)
  }

  changeInitialCapital(initialCapital) {
    this.setState({
      initialCapital: initialCapital
    });
  }

  render () {
    return (
      <div className="Calculator" id="calculator">
        <MoneyInput changeValue={this.changeInitialCapital.bind(this)}/>  
        <div>{this.state.initialCapital}</div>
        <div>{this.state.initialCapital * 10}</div>
      </div>
    );
  }
}
