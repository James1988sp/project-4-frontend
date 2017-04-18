angular
  .module('droneApp')
  .controller('DronesIndexCtrl', DronesIndexCtrl)
  .controller('DronesNewCtrl', DronesNewCtrl)
  .controller('DronesShowCtrl', DronesShowCtrl)
  .controller('DronesEditCtrl', DronesEditCtrl);

DronesIndexCtrl.$inject = ['Drone'];
function DronesIndexCtrl(Drone) {
  const vm = this;

  vm.all = Drone.query();
}

DronesNewCtrl.$inject = ['Drone', '$state'];
function DronesNewCtrl(Drone, $state) {
  const vm = this;
  vm.drone = {};

  function dronesCreate() {
    Drone
      .save({ drone: vm.drone })
      .$promise
      .then(() => $state.go('dronesIndex'));
  }

  vm.create = dronesCreate;
}

DronesShowCtrl.$inject = ['Drone', '$stateParams', '$state'];
function DronesShowCtrl(Drone, $stateParams, $state) {
  const vm = this;

  vm.drone = Drone.get($stateParams);

  function dronesDelete() {
    vm.drone
      .$remove()
      .then(() => $state.go('dronesIndex'));
  }

  vm.delete = dronesDelete;
}

DronesEditCtrl.$inject = ['Drone', '$stateParams', '$state'];
function DronesEditCtrl(Drone, $stateParams, $state) {
  const vm = this;

  vm.drone = Drone.get($stateParams);

  function dronesUpdate() {
    vm.drone
      .$update({ id: vm.drone.id, drone: vm.drone })
      .$promise
      .then(() => $state.go('dronesShow', $stateParams));
  }

  vm.update = dronesUpdate;
}
