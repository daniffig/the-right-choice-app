import React from "react";

import './styles.scss'

import MoneyInput from './components/MoneyInput'

export default class Calculator extends React.Component {
  render () {
    return (
      <div className="Calculator" id="calculator">
        <MoneyInput />  
        <MoneyInput />
        <MoneyInput />
      </div>
    );
  }
}
