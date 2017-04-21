angular
  .module('droneApp')
  .config(Auth);

Auth.$inject = ['$authProvider', 'API_URL'];
function Auth($authProvider, API_URL){
  $authProvider.signupUrl = `${API_URL}/register`;
  $authProvider.loginUrl = `${API_URL}/login`;

  $authProvider.github({
    clientId: '4eec8f826482b91c404a',
    url: `${API_URL}/oauth/github`
  });

  $authProvider.facebook({
    clientId: '1899015653703205',
    url: `${API_URL}/auth/facebook`
  });
}
