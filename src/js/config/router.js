angular
  .module('droneApp')
  .config(Router);

Router.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];
function Router($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true);

  $stateProvider
    .state('register', {
      url: '/register',
      templateUrl: 'js/views/auth/register.html',
      controller: 'RegisterCtrl as register'
    })
    .state('login', {
      url: '/',
      templateUrl: 'js/views/auth/login.html',
      controller: 'LoginCtrl as login'
    })
    .state('droneIndex', {
      url: '/drone',
      templateUrl: 'js/views/drones/index.html',
      controller: 'DronesIndexCtrl as dronesIndex'
    })
    .state('droneNew', {
      url: '/drone/new',
      templateUrl: 'js/views/drones/new.html',
      controller: 'DronesNewCtrl as dronesNew'
    })
    .state('droneShow', {
      url: '/drone/:id',
      templateUrl: 'js/views/drones/show.html',
      controller: 'DronesShowCtrl as dronesShow'
    })
    .state('droneEdit', {
      url: '/drone/:id/edit',
      templateUrl: 'js/views/drones/edit.html',
      controller: 'DronesEditCtrl as dronesEdit'
    })
    .state('userIndex', {
      url: '/users',
      templateUrl: 'js/views/user/index.html',
      controller: 'UserIndexCtrl as usersIndex'
    })
    .state('userShow', {
      url: '/users/:id',
      templateUrl: 'js/views/user/show.html',
      controller: 'UserShowCtrl as usersShow'
    })
    .state('raceIndex', {
      url: '/race',
      templateUrl: 'js/views/race/index.html',
      controller: 'RaceIndexCtrl as raceIndex'
    })
    .state('raceShow', {
      url: '/race/:id',
      templateUrl: 'js/views/race/show.html',
      controller: 'RaceShowCtrl as raceShow'
    });

  $urlRouterProvider.otherwise('/');
}
