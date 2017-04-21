angular
  .module('droneApp')
  .controller('UserIndexCtrl', UserIndexCtrl)
  .controller('UserShowCtrl', UserShowCtrl)
  .controller('UserEditCtrl', UserEditCtrl);

UserIndexCtrl.$inject = ['$rootScope', '$state', '$auth', 'User'];
function UserIndexCtrl($rootScope, $state, $auth, User) {
  const vm = this;

  vm.all = User.query();
}


UserShowCtrl.$inject = ['User', 'Drone', '$stateParams', '$state'];
function UserShowCtrl(User, Drone, $stateParams, $state) {
  const vm = this;

  User.get($stateParams, (user) => {
    vm.user = user;
    vm.userDrone = Drone.query({ createdBy: user.id });
  });

  vm.selectedInfo = null;

  function userDelete() {
    vm.user
      .$remove()
      .then(() => $state.go('login'));
  }

  vm.delete = userDelete;

  function deleteDrone() {
    Drone
      .delete({ id: vm.selectedDrone.id })
      .$promise
      .then(() => {
        const index = vm.userDrone.indexOf(vm.selectedDrone);
        if(index > -1) vm.userDrone.splice(index, 1);
        vm.selectedDrone = null;
      });
  }

  vm.deleteDrone = deleteDrone;
}

UserEditCtrl.$inject = ['User', '$stateParams', '$state'];
function UserEditCtrl(User, $stateParams, $state) {
  const vm = this;

  vm.user = User.get($stateParams);

  function userUpdate() {
    vm.user
      .$update({ id: vm.user.id, user: vm.user })
      .$promise
      .then(() => $state.go('userShow', $stateParams));
  }

  vm.update = userUpdate;
}
