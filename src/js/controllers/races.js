angular
  .module('droneApp')
  .controller('RacesIndexCtrl', RacesIndexCtrl)
  .controller('RacesNewCtrl', RacesNewCtrl)
  .controller('RacesShowCtrl', RacesShowCtrl)
  .controller('RacesEditCtrl', RacesEditCtrl);

RacesIndexCtrl.$inject = ['Race'];
function RacesIndexCtrl(Race) {
  const vm = this;

  vm.all = Race.query();
}

RacesNewCtrl.$inject = ['Race', 'User', '$state'];
function RacesNewCtrl(Race, User, $state) {
  const vm = this;
  vm.Race = {};
  vm.users = User.query();

  function raceCreate() {
    Race
      .save({ race: vm.race })
      .$promise
      .then(() => $state.go('racesIndex'));
  }

  vm.create = raceCreate;
}

RacesShowCtrl.$inject = ['Race', 'User', 'Comment', '$stateParams', '$state', '$auth'];
function RacesShowCtrl(Race, User, Comment, $stateParams, $state, $auth) {
  const vm = this;
  if ($auth.getPayload()) vm.currentUser = User.get({ id: $auth.getPayload().id });

  vm.race = Race.get($stateParams);

  function raceDelete() {
    vm.race
      .$remove()
      .then(() => $state.go('racesIndex'));
  }

  vm.delete = raceDelete;

  function raceUpdate() {
    console.log(vm.race);
    Race
      .update({id: vm.race.id, race: vm.race });
  }

  function addComment() {
    vm.comment.race_id = vm.race.id;

    Comment
      .save({ comment: vm.comment })
      .$promise
      .then((comment) => {
        vm.race.comments.push(comment);
        vm.comment = {};
      });
  }

  vm.addComment = addComment;

  function deleteComment(comment) {
    Comment
      .delete({ id: comment.id })
      .$promise
      .then(() => {
        const index = vm.race.comments.indexOf(comment);
        vm.race.comments.splice(index, 1);
      });
  }

  vm.deleteComment = deleteComment;

  function toggleAttending() {
    const index = vm.race.attendee_ids.indexOf(vm.currentUser.id);
    if (index > -1) {
      vm.race.attendee_ids.splice(index, 1);
      vm.race.attendees.splice(index, 1);
    } else {
      vm.race.attendee_ids.push(vm.currentUser.id);
      vm.race.attendees.push(vm.currentUser);
    }
    raceUpdate();
  }
  vm.toggleAttending = toggleAttending;

  function isAttending() {
    return $auth.getPayload() && vm.race.$resolved && vm.race.attendee_ids.includes(vm.currentUser.id);
  }
  vm.isAttending = isAttending;
}

RacesEditCtrl.$inject = ['Race', 'User', '$stateParams', '$state'];
function RacesEditCtrl(Race, User, $stateParams, $state) {
  const vm = this;

  Race.get($stateParams).$promise.then((race) => {
    vm.race = race;
    vm.race.date = new Date(race.date);
  });

  vm.users = User.query();

  function raceUpdate() {
    Race
      .update({id: vm.race.id, race: vm.race })
      .$promise
      .then(() => $state.go('racesShow', { id: vm.race.id }));
  }

  vm.update = raceUpdate;
}
