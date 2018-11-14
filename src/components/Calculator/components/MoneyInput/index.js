import React from "react";

import Input from '@material-ui/core/Input';
import { TextField, InputAdornment } from "@material-ui/core";

export default class MoneyInput extends React.Component {
  constructor() {
    super();
    this.state = {
      value: null
    }
  }

  handleChange(e) {
    const value = e.target.value;
    this.props.changeValue(value);
  }

  render () {
    return (
      <div>
        <TextField
          value={this.state.value}
          variant="outlined"
          label="Capital inicial"     
          onChange={this.handleChange.bind(this)}     
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}>

        </TextField>
      </div>
    );
  }
}