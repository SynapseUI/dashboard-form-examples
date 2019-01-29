import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

// -----------------------------------------------------------------------------------------
// ----------------------------------------- Data ------------------------------------------
// -----------------------------------------------------------------------------------------
import dataForRoutes from '../../../data/dataForRoutes';

class SwitchAndRoutes extends Component {
  render() {
    return (
      <Switch>
        {dataForRoutes.map(({ link, component }) => {
          switch (link) {
            case '/':
              return <Route exact key={link} path={link} component={component} />;

            default:
              return <Route key={link} path={link} component={component} />;
          }
        })}
      </Switch>
    );
  }
}

export default SwitchAndRoutes;
