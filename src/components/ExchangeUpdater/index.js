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
    var component = this;

    fetch('https://usd-ars-exchange-rate.herokuapp.com/usd-ars-exchange-rate.json')
      .then((response) => response.json())
      .then(function (data) {
        component.setState({ lastUpdate: data.last_update });
      });
  }

  componentDidMount() {
    this.fetchUsdArsExchangeRate();

    this.interval = setInterval(() => {
      this.fetchUsdArsExchangeRate();
    },
    5000);
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
