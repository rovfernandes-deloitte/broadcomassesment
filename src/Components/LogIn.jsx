import React from 'react';
import { Redirect } from 'react-router-dom';
import OktaSignInWidget from './OktaSignInWidget';
import { useOktaAuth } from '@okta/okta-react';
import { Tokens } from '@okta/okta-auth-js';
import { useHistory } from "react-router-dom";
const Login1 = ({ config }) => {
  const history = useHistory();

  console.log("working")
  const { oktaAuth, authState } = useOktaAuth();
  console.log(authState)
  const onSuccess = (tokens) => {
    console.log("sucessss")
 
      history.push('/dashboard');
    
    oktaAuth.handleLoginRedirect(tokens);

  };

  const onError = (err) => {
    console.log('Sign in error:', err);
  };

  if (!authState) {
    return <div>Loading ... </div>;
  }

  return authState.isAuthenticated ?
    <Redirect to={{ pathname: '/dashboard' }}/> :
    <OktaSignInWidget config={config} onSuccess={onSuccess} onError={onError}/>;
};

export default Login1;