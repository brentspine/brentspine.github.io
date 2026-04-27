provideKeycloak({
  config: {
    url: 'https://idp.dev.cloud.ruv.de/auth/',
    realm: 'weatherangle',
    clientId: 'frontend'
  },
  initOptions: {
    onLoad: 'login-required',
    checkLoginIframe: false
  }
});
