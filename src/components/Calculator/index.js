import React from "react";

import './styles.scss'

import MoneyInput from './components/MoneyInput'

export default class Calculator extends React.Component {
  constructor() {
    super();

    this.state = {
      initialCapital: null
    }
  }

  changeInitialCapital(initialCapital) {
    this.setState({initialCapital});
  }

  render () {
    return (
      <div className="Calculator" id="calculator">
        <MoneyInput changeValue={this.changeInitialCapital.bind(this)}/>  
        <MoneyInput />
        <MoneyInput />
        <div>{this.state.initialCapital}</div>
        <div>{this.state.initialCapital * 10}</div>
      </div>
    );
  }
}
