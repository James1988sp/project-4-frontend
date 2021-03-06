angular
  .module('droneApp')
  .controller('RegisterCtrl', RegisterCtrl)
  .controller('LoginCtrl', LoginCtrl);

RegisterCtrl.$inject = ['$auth', '$state'];
function RegisterCtrl($auth, $state) {
  const vm = this;
  vm.user = {};

  function submit() {
    $auth.signup(vm.user)
      .then(() => $state.go('login'));
  }

  vm.submit = submit;
}

LoginCtrl.$inject = ['$auth', '$state'];
function LoginCtrl($auth, $state) {
  const vm = this;
  vm.credentials = {};

  function submit() {
    $auth.login(vm.credentials)
      .then((response) => {
        $state.go('userShow', { id: response.data.user.id });
      });
  }

  vm.submit = submit;
  function authenticate(provider) {
    $auth.authenticate(provider)
      .then(user => console.log(user));
  }

  vm.authenticate = authenticate;
}
