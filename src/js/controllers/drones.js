angular
  .module('droneApp')
  .controller('DronesIndexCtrl', DronesIndexCtrl)
  .controller('DronesNewCtrl', DronesNewCtrl)
  .controller('DronesShowCtrl', DronesShowCtrl)
  .controller('DronesEditCtrl', DronesEditCtrl);

DronesIndexCtrl.$inject = ['Drone', 'filterFilter', 'orderByFilter', '$scope'];
function DronesIndexCtrl(Drone, filterFilter, orderByFilter, $scope) {
  const vm = this;

  vm.all = Drone.query();
  function filterDrones() {
    const params = { name: vm.q };
    if(vm.useWeight) params.weight = vm.weight;
    if(vm.useSpeed) params.speed = vm.speed;

    vm.filtered = filterFilter(vm.all, params);
    vm.filtered = orderByFilter(vm.filtered, vm.sort);
  }

  $scope.$watchGroup([
    () => vm.q,
    () => vm.useWeight,
    () => vm.weight,
    () => vm.useSpeed,
    () => vm.speed,
    () => vm.sort


  ], filterDrones);
}

DronesNewCtrl.$inject = ['Drone', 'User',  '$state'];
function DronesNewCtrl(Drone, User, $state) {
  const vm = this;
  vm.drone = {};
  vm.users = User.query();

  function dronesCreate() {
    Drone
      .save({ drone: vm.drone })
      .$promise
      .then(() => $state.go('dronesIndex'));
  }

  vm.create = dronesCreate;
}

DronesShowCtrl.$inject = ['Drone', 'User', 'Comment', '$stateParams', '$state', '$auth'];
function DronesShowCtrl(Drone, User, Comment, $stateParams, $state, $auth) {
  const vm = this;
  if ($auth.getPayload()) vm.currentUser = User.get({ id: $auth.getPayload().id });

  vm.drone = Drone.get($stateParams);

  function dronesDelete() {
    vm.drone
      .$remove()
      .then(() => $state.go('dronesIndex'));
  }

  vm.delete = dronesDelete;
}

DronesEditCtrl.$inject = ['Drone', 'User', '$stateParams', '$state'];
function DronesEditCtrl(Drone, User, $stateParams, $state) {
  const vm = this;

  vm.drone = Drone.get($stateParams);

  function dronesUpdate() {
    Drone
      .update({ id: vm.drone.id, drone: vm.drone })
      .$promise
      .then(() => {
        $state.go('droneShow', $stateParams);
      });
  }

  vm.update = dronesUpdate;
}
