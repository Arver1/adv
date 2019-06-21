import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { modulName } from "../../ducks/auth";
import UnAuthorized from "./UnAuthorized";



class ProtectedRoute extends Component {
  render(){
    const { component,  ...rest} = this.props;
    return (
      <Route {...rest} render={this.renderProtected} />
    )
  }
  
  renderProtected = (routeProps) => {
    const {component: ProtectedComponent, authorized} = this.props;
    
    return authorized ? <ProtectedComponent {...routeProps} /> : <UnAuthorized />
  }
}


export default connect(state => {
  return {authorized: !!state[modulName].user}
}, null, null, {pure: false})(ProtectedRoute)
