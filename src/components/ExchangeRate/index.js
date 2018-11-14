import React from 'react';

import { Card, CardContent, Typography } from '@material-ui/core';

import styles from './styles.scss';

export default class ExchangeRate extends React.Component {
  render () {
    let className = 'ExchangeRate ';

    if (typeof this.props.className !== 'undefined') {
      className += this.props.className;
    }

    return (
      <Card id={this.props.id} className={className}>
        <CardContent>
          <Typography component="h2" color='inherit'>$ 36.00</Typography>
          <Typography component="p">{this.props.label}</Typography>
        </CardContent>
      </Card>    
    );
  }
}