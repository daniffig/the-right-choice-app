import React from 'react';

import { Card, CardContent, Typography } from '@material-ui/core';

export default class ExchangeUpdater extends React.Component {
  constructor() {
    super();

    this.state = {
      lastUpdate: null
    }
  }

  fetchUsdArsExchangeRate() {
    fetch('https://usd-ars-exchange-rate.herokuapp.com/usd-ars-exchange-rate.json').then(function (data) {
      console.log(data);
    });
  }

  componentDidMount() {
    this.fetchUsdArsExchangeRate();
    // this.interval = setInterval(() => {
    //   var elem = document.querySelector('iframe');

    //   elem.src = elem.src;

    //   var compra = document.querySelector('iframe .compra');

    //   console.log(compra);

    //   this.setState({ lastUpdate: (new Date()).toLocaleString('es-AR') });
    // },
    // 5000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render () {
    return (
      <Card id={this.props.id}>
        <CardContent>
          <Typography component="p">Última actualización: <span>{this.state.lastUpdate}</span></Typography>
        </CardContent>
      </Card>
    );
  }
}
