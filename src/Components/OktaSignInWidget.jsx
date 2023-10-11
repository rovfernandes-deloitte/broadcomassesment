import React, { useEffect, useRef } from 'react';
import OktaSignIn from '@okta/okta-signin-widget';
import '@okta/okta-signin-widget/dist/css/okta-sign-in.min.css';
import config from '../config';
import { useOktaAuth } from '@okta/okta-react';
const OktaSignInWidget = ({ onSuccess, onError }) => {
 
  const widgetRef = useRef();
  useEffect(() => {
    console.log(onSuccess,onError)
    if (!widgetRef.current) {
      return false;
    }


    const widget = new OktaSignIn(config.widget);

   // Search for URL Parameters to see if a user is being routed to the application to recover password
   console.log(new URL(window.location.href))
   var searchParams = new URL(window.location.href).searchParams;
   console.log(new URL(window.location))
   console.log(searchParams)
   widget.otp = searchParams.get('otp');
   widget.state = searchParams.get('state');
   widget.showSignInToGetTokens({
      el: widgetRef.current,
      scopes: ['openid', 'email', 'profile'], // Add desired scopes
    }).then(onSuccess).catch(onError);

    return () => widget.remove();
  }, [onSuccess, onError]);
  

  return (<div ref={widgetRef} />);
};

export default OktaSignInWidget;
