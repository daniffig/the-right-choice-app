import React from 'react';

import { Card, CardContent, Typography } from '@material-ui/core';

export default class LastUpdate extends React.Component {
  render () {
    return (
      <Card id={this.props.id}>
        <CardContent>
          <Typography component="p">Última actualización</Typography>
        </CardContent>
      </Card>
    );
  }
}
