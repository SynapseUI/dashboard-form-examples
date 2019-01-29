import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

// -----------------------------------------------------------------------------------------
// ----------------------------------------- Data ------------------------------------------
// -----------------------------------------------------------------------------------------
import dataForRoutes, { links, objKeys } from '../../../data/dataForRoutes';

class SwitchAndRoutes extends Component {
  render() {
    return (
      <Switch>
        {dataForRoutes.map(({ link, component }) => {
          return <Route key={link} path={link} component={component} />;
        })}
        <Redirect exact from={'/'} to={links[objKeys.BUSINESS_OWNER_INFO]} />
      </Switch>
    );
  }
}

export default SwitchAndRoutes;
