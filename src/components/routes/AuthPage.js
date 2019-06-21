import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Route, NavLink} from "react-router-dom";
import SignInForm from "../auth/SignInForm";
import SignUpForm from "../auth/SignUpForm";
import {modulName, signUp} from "../../ducks/auth";
import Loader from "../common/Loader";

class AuthPage extends Component {
  render() {
    
    const { loading } = this.props;
    return (
      <div>
        <h1>Auth Page</h1>
        <NavLink to="/auth/signin" activeStyle={{color: 'red'}}>sing in</NavLink>
        <NavLink to="/auth/signup" activeStyle={{color: 'red'}}>sing up</NavLink>
        <Route path="/auth/signin" render={() => <SignInForm onSubmit={this.handleSignIn}/>} />
        <Route path="/auth/signup" render={()=> <SignUpForm onSubmit={this.handleSignUp}/>}/>
        {loading && <Loader/>}
      </div>
    )
  }
  
  handleSignIn = (values) => console.log('___', values);
  handleSignUp = ({email, password}) => this.props.signUp(email, password);
}


export default connect(state => ({
  loading: state[modulName].loading
}), {signUp})(AuthPage);
