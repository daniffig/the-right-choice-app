import React from 'react';

import { Card, CardContent, Typography } from '@material-ui/core';

export default class ExchangeUpdater extends React.Component {
  constructor() {
    super();

    this.state = {
      lastUpdate: null
    }
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      var elem = document.querySelector('iframe');

      elem.src = elem.src;

      var compra = document.querySelector('iframe .compra');

      console.log(compra);

      this.setState({ lastUpdate: (new Date()).toLocaleString('es-AR') });
    },
    5000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render () {
    var iframeStyles = {
      // display: 'none'
    }

    return (
      <Card id={this.props.id}>
        <CardContent>
          <Typography component="p">Última actualización: <span>{this.state.lastUpdate}</span></Typography>
        </CardContent>
      </Card>
    );
  }
}
