export default {
    oidc: {
      issuer: 'https://dev-36694115.okta.com/oauth2/default',
      clientId: '0oacg0pt3hKsyoSH35d7',
      scopes: ['openid', 'profile', 'email'],
      redirectUri: `${window.location.origin}/login/callback`
    },  
    widget: {
      issuer: 'https://dev-36694115.okta.com/oauth2/default',
      clientId: '0oacg0pt3hKsyoSH35d7',
      redirectUri: `${window.location.origin}/login/callback`,
      scopes: ['openid', 'profile', 'email'],
    }
  };

