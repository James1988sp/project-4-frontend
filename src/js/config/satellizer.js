angular
  .module('droneApp')
  .config(Auth);

Auth.$inject = ['$authProvider', 'API_URL'];
function Auth($authProvider, API_URL) {
  $authProvider.signupUrl = `${API_URL}/register`;
  $authProvider.loginUrl = `${API_URL}/login`;

  $authProvider.tokenPrefix = '';

  $authProvider.facebook({
    clientId: '234976903646228',
    url: `${API_URL}/oauth/facebook`
  });

}
